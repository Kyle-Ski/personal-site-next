'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FaBluesky, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa6";
import {
    Share2,
    Copy,
    Check,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialShareProps {
    /** The URL to share */
    url: string;
    /** Custom title for sharing (falls back to page title if not provided) */
    title?: string;
    /** Custom description for sharing (falls back to meta description if not provided) */
    description?: string;
    /** Additional CSS classes */
    className?: string;
    /** Size variant */
    size?: 'sm' | 'md' | 'lg';
    /** Display variant */
    variant?: 'buttons' | 'compact' | 'minimal';
    /** Whether to show labels next to icons */
    showLabels?: boolean;
}

interface SocialPlatform {
    name: string;
    icon: React.ComponentType<{ className?: string; size?: number }>;
    shareUrl: (url: string, title: string, description?: string) => string;
    color: string;
    hoverColor: string;
}

const platforms: SocialPlatform[] = [
    {
        name: 'Twitter',
        icon: FaTwitter,
        shareUrl: (url, title) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        color: 'text-blue-400',
        hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
        name: 'Facebook',
        icon: FaFacebook,
        shareUrl: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        color: 'text-blue-600',
        hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedinIn,
        shareUrl: (url, title, description) => {
            const params = new URLSearchParams({
                url,
                title,
                ...(description && { summary: description })
            });
            return `https://www.linkedin.com/sharing/share-offsite/?${params.toString()}`;
        },
        color: 'text-blue-700',
        hoverColor: 'hover:bg-blue-50 dark:hover:bg-blue-900/20'
    },
    {
        name: 'Bluesky',
        icon: FaBluesky,
        shareUrl: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`,
        color: 'text-sky-500',
        hoverColor: 'hover:bg-sky-50 dark:hover:bg-sky-900/20'
    }
];

export default function SocialShare({
    url,
    title,
    description,
    className = '',
    size = 'md',
    variant = 'buttons',
    showLabels = false,
}: SocialShareProps) {
    const [copied, setCopied] = useState(false);

    // Auto-generate title and description from page metadata if not provided
    const shareTitle = title || (typeof document !== 'undefined' ?
        document.querySelector('meta[property="og:title"]')?.getAttribute('content') ||
        document.title : '');

    const shareDescription = description || (typeof document !== 'undefined' ?
        document.querySelector('meta[property="og:description"]')?.getAttribute('content') ||
        document.querySelector('meta[name="description"]')?.getAttribute('content') : '') || undefined;

    // Handle social platform sharing
    const handleShare = (platform: SocialPlatform) => {
        const shareUrl = platform.shareUrl(url, shareTitle, shareDescription);

        // Track sharing event with GTM
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'share', {
                method: platform.name.toLowerCase(),
                content_type: getContentType(),
                content_id: getContentId(),
            });
        }

        // Open share window
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
    };

    // Handle copy link
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);

            // Track copy event
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'share', {
                    method: 'copy_link',
                    content_type: getContentType(),
                    content_id: getContentId(),
                });
            }

            // Reset copied state after 2 seconds
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
            // Fallback: select the URL for manual copying
            prompt('Copy this link:', url);
        }
    };

    // Helper functions for analytics
    const getContentType = () => {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            if (pathname.includes('/blog/')) return 'blog_post';
            if (pathname.includes('/reports/')) return 'trip_report';
            if (pathname.includes('/gear/reviews/')) return 'gear_review';
            if (pathname.includes('/guides/')) return 'guide';
        }
        return 'page';
    };

    const getContentId = () => {
        if (typeof window !== 'undefined') {
            const pathname = window.location.pathname;
            const segments = pathname.split('/');
            return segments[segments.length - 1] || 'home';
        }
        return 'unknown';
    };

    // Size configurations
    const sizeConfig = {
        sm: {
            buttonSize: 'h-8 w-8',
            iconSize: 'h-4 w-4',
            spacing: 'gap-2',
            text: 'text-xs'
        },
        md: {
            buttonSize: 'h-9 w-9',
            iconSize: 'h-4 w-4',
            spacing: 'gap-3',
            text: 'text-sm'
        },
        lg: {
            buttonSize: 'h-10 w-10',
            iconSize: 'h-5 w-5',
            spacing: 'gap-4',
            text: 'text-sm'
        }
    };

    const config = sizeConfig[size];

    // Render different variants
    if (variant === 'compact') {
        return (
            <Card className={cn('bg-muted/30 border-border', className)}>
                <CardContent className="p-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Share2 className="h-4 w-4" />
                            <span>Share this post</span>
                        </div>
                        <div className={cn('flex', config.spacing)}>
                            {platforms.map((platform) => {
                                const Icon = platform.icon;
                                return (
                                    <Button
                                        key={platform.name}
                                        variant="ghost"
                                        size="icon"
                                        className={cn(
                                            config.buttonSize,
                                            platform.color,
                                            platform.hoverColor,
                                            'transition-colors'
                                        )}
                                        onClick={() => handleShare(platform)}
                                        title={`Share on ${platform.name}`}
                                    >
                                        <Icon className={config.iconSize} />
                                    </Button>
                                );
                            })}
                            <Button
                                variant="ghost"
                                size="icon"
                                className={cn(
                                    config.buttonSize,
                                    copied ? 'text-green-600' : 'text-muted-foreground',
                                    'hover:bg-accent transition-colors'
                                )}
                                onClick={handleCopyLink}
                                title={copied ? 'Link copied!' : 'Copy link'}
                            >
                                {copied ? <Check className={config.iconSize} /> : <Copy className={config.iconSize} />}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (variant === 'minimal') {
        return (
            <div className={cn('flex items-center', config.spacing, className)}>
                {platforms.map((platform) => {
                    const Icon = platform.icon;
                    return (
                        <Button
                            key={platform.name}
                            variant="ghost"
                            size="icon"
                            className={cn(
                                config.buttonSize,
                                platform.color,
                                platform.hoverColor,
                                'transition-colors'
                            )}
                            onClick={() => handleShare(platform)}
                            title={`Share on ${platform.name}`}
                        >
                            <Icon className={config.iconSize} />
                        </Button>
                    );
                })}
                <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                        config.buttonSize,
                        copied ? 'text-green-600' : 'text-muted-foreground',
                        'hover:bg-accent transition-colors'
                    )}
                    onClick={handleCopyLink}
                    title={copied ? 'Link copied!' : 'Copy link'}
                >
                    {copied ? <Check className={config.iconSize} /> : <Copy className={config.iconSize} />}
                </Button>
            </div>
        );
    }

    // Default 'buttons' variant
    return (
        <div className={cn('flex flex-wrap items-center', config.spacing, className)}>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Share:</span>
            </div>

            <div className={cn('flex flex-wrap', config.spacing)}>
                {platforms.map((platform) => {
                    const Icon = platform.icon;
                    return (
                        <Button
                            key={platform.name}
                            variant="outline"
                            size={showLabels ? 'sm' : 'icon'}
                            className={cn(
                                !showLabels && config.buttonSize,
                                platform.color,
                                platform.hoverColor,
                                'transition-colors border-border bg-background',
                                // Mobile optimizations
                                'min-w-0 flex-shrink-0'
                            )}
                            onClick={() => handleShare(platform)}
                            title={`Share on ${platform.name}`}
                        >
                            <Icon className={config.iconSize} />
                            {showLabels && (
                                <span className={cn('ml-1', config.text)}>{platform.name}</span>
                            )}
                        </Button>
                    );
                })}

                <Button
                    variant="outline"
                    size={showLabels ? 'sm' : 'icon'}
                    className={cn(
                        !showLabels && config.buttonSize,
                        copied ? 'text-green-600 border-green-200' : 'text-muted-foreground',
                        'transition-colors border-border bg-background',
                        'hover:bg-accent min-w-0 flex-shrink-0'
                    )}
                    onClick={handleCopyLink}
                    title={copied ? 'Link copied!' : 'Copy link'}
                >
                    {copied ? <Check className={config.iconSize} /> : <Copy className={config.iconSize} />}
                    {showLabels && (
                        <span className={cn('ml-1', config.text)}>
                            {copied ? 'Copied!' : 'Copy'}
                        </span>
                    )}
                </Button>
            </div>
        </div>
    );
}