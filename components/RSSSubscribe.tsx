'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Rss,
    Copy,
    Check,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface RSSSubscribeProps {
    /** Additional CSS classes */
    className?: string;
    /** Size variant */
    size?: "sm" | "lg" | null | undefined;
    /** Display variant */
    variant?: 'auto' | 'compact' | 'button-only';
    /** Override automatic page detection with specific feed */
    feedType?: 'all' | 'blog' | 'trip-reports' | 'guides' | 'gear-reviews';
    /** Show option to expand to other feeds */
    showOtherFeeds?: boolean;
    /** Base URL for your site */
    baseUrl?: string;
}

interface RSSFeed {
    key: string;
    name: string;
    description: string;
    url: string;
    paths: string[]; // URL paths where this feed should be primary
}

export default function RSSSubscribe({
    className = '',
    size = 'sm',
    variant = 'auto',
    feedType,
    showOtherFeeds = true,
    baseUrl = typeof window !== 'undefined' ? window.location.origin : '',
}: RSSSubscribeProps) {
    const [currentPath, setCurrentPath] = useState('');
    const [isExpanded, setIsExpanded] = useState(false);
    const [copiedFeed, setCopiedFeed] = useState<string | null>(null);

    // Update current path on client side
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCurrentPath(window.location.pathname);
        }
    }, []);

    const feeds: RSSFeed[] = [
        {
            key: 'all',
            name: 'All Posts',
            description: 'Everything - trip reports, guides, gear reviews, and blog posts',
            url: `${baseUrl}/feed/all`,
            paths: ['/', '/about', '/contact', '/feed'] // Default/general pages
        },
        {
            key: 'blog',
            name: 'Blog Posts',
            description: 'Personal thoughts and outdoor musings',
            url: `${baseUrl}/feed/blog`,
            paths: ['/blog'] // Blog listing and individual blog posts
        },
        {
            key: 'trip-reports',
            name: 'Trip Reports',
            description: 'Detailed reports from outdoor adventures',
            url: `${baseUrl}/feed/trip-reports`,
            paths: ['/reports'] // Trip reports listing and individual reports
        },
        {
            key: 'guides',
            name: 'Guides',
            description: 'Route guides, gear guides, and planning resources',
            url: `${baseUrl}/feed/guides`,
            paths: ['/guides'] // Guides listing and individual guides
        },
        {
            key: 'gear-reviews',
            name: 'Gear Reviews',
            description: 'In-depth reviews of outdoor gear and equipment',
            url: `${baseUrl}/feed/gear-reviews`,
            paths: ['/gear'] // Gear reviews listing and individual reviews
        }
    ];

    // Determine the primary feed for current page
    const getPrimaryFeed = (): RSSFeed => {
        // If feedType is explicitly provided, use that
        if (feedType) {
            return feeds.find(feed => feed.key === feedType) || feeds[0];
        }

        // Auto-detect based on current path
        for (const feed of feeds) {
            // Check if current path starts with any of the feed's paths
            if (feed.paths.some(path => {
                if (path === '/') {
                    // Only match exact root, not all paths
                    return currentPath === '/';
                }
                return currentPath.startsWith(path);
            })) {
                return feed;
            }
        }

        // Default to 'All Posts' if no specific match
        return feeds[0];
    };

    const primaryFeed = getPrimaryFeed();
    const otherFeeds = feeds.filter(feed => feed.key !== primaryFeed.key);

    // Handle copying feed URL
    const handleCopyFeed = async (feedUrl: string, feedName: string) => {
        try {
            await navigator.clipboard.writeText(feedUrl);
            setCopiedFeed(feedUrl);

            // Track RSS subscription interest
            if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'rss_subscribe_attempt', {
                    method: 'copy_url',
                    feed_type: feedName.toLowerCase().replace(/\s+/g, '_'),
                    page_context: currentPath,
                });
            }

            // Reset copied state after 2 seconds
            setTimeout(() => setCopiedFeed(null), 2000);
        } catch (err) {
            console.error('Failed to copy feed URL:', err);
            prompt('Copy this RSS feed URL:', feedUrl);
        }
    };

    // Handle opening feed in RSS reader
    const handleOpenFeed = (feedUrl: string, feedName: string) => {
        // Track RSS subscription attempt
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'rss_subscribe_attempt', {
                method: 'direct_link',
                feed_type: feedName.toLowerCase().replace(/\s+/g, '_'),
                page_context: currentPath,
            });
        }

        // Open feed URL - browsers/RSS readers will handle it appropriately
        window.open(feedUrl, '_blank');
    };

    // Size configurations
    const sizeConfig = {
        sm: {
            iconSize: 'h-4 w-4',
            text: 'text-xs',
            spacing: 'gap-2',
            padding: 'p-2'
        },
        md: {
            iconSize: 'h-4 w-4',
            text: 'text-sm',
            spacing: 'gap-3',
            padding: 'p-3'
        },
        lg: {
            iconSize: 'h-5 w-5',
            text: 'text-base',
            spacing: 'gap-4',
            padding: 'p-4'
        }
    };

    const config = size ? sizeConfig[size] : sizeConfig['sm'];

    // Button-only variant - UPDATED: Much more compact
    if (variant === 'button-only') {
        return (
            <Button
                variant="outline"
                size="sm"
                className={cn(
                    'text-orange-600 border-orange-200 hover:bg-orange-50 dark:hover:bg-orange-900/20',
                    'w-fit flex-shrink-0', // Don't stretch, don't shrink
                    className
                )}
                onClick={() => handleOpenFeed(primaryFeed.url, primaryFeed.name)}
                title={`Subscribe to ${primaryFeed.name} RSS feed`}
            >
                <Rss className="h-4 w-4" />
                <span className="ml-2">Subscribe</span>
            </Button>
        );
    }

    // Compact variant - UPDATED: Much smaller and inline
    if (variant === 'compact') {
        return (
            <div className={cn(
                'inline-flex items-center gap-2 bg-orange-50/80 border border-orange-200 rounded-lg px-3 py-2',
                'dark:bg-orange-900/20 dark:border-orange-800/50',
                'w-fit max-w-xs', // Constrain width, smaller max width
                className
            )}>
                <Rss className="h-4 w-4 text-orange-600 flex-shrink-0" />
                <span className="text-sm font-medium text-orange-900 dark:text-orange-100 truncate">
                    {primaryFeed.name}
                </span>
                <div className="flex gap-1 ml-auto flex-shrink-0">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleOpenFeed(primaryFeed.url, primaryFeed.name)}
                        className="text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-800/30 text-xs h-7 px-2"
                    >
                        Subscribe
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                            'h-7 w-7',
                            copiedFeed === primaryFeed.url ? 'text-green-600' : 'text-orange-600',
                            'hover:bg-orange-100 dark:hover:bg-orange-800/30'
                        )}
                        onClick={() => handleCopyFeed(primaryFeed.url, primaryFeed.name)}
                        title={copiedFeed === primaryFeed.url ? 'Copied!' : 'Copy RSS URL'}
                    >
                        {copiedFeed === primaryFeed.url ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    </Button>
                </div>
            </div>
        );
    }

    // Auto variant - UPDATED: Much more compact
    return (
        <div className={cn(
            'w-fit max-w-sm bg-orange-50/80 border border-orange-200 rounded-lg p-3',
            'dark:bg-orange-900/20 dark:border-orange-800/50',
            className
        )}>
            <div className="space-y-2">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Rss className="h-4 w-4 text-orange-600" />
                        <div>
                            <h3 className="text-sm font-semibold text-orange-900 dark:text-orange-100">
                                Subscribe to RSS
                            </h3>
                        </div>
                    </div>
                    {showOtherFeeds && otherFeeds.length > 0 && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-orange-600 hover:bg-orange-100 dark:hover:bg-orange-800/30 h-6 w-6 p-0"
                        >
                            {isExpanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        </Button>
                    )}
                </div>

                {/* Primary feed (contextual) */}
                <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded p-2 border border-orange-200">
                    <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                            {primaryFeed.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            {primaryFeed.description}
                        </div>
                    </div>
                    <div className="flex gap-1 ml-2 flex-shrink-0">
                        <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleOpenFeed(primaryFeed.url, primaryFeed.name)}
                            className="bg-orange-600 hover:bg-orange-700 text-white text-xs h-7 px-2"
                        >
                            Subscribe
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className={cn(
                                'h-7 w-7',
                                copiedFeed === primaryFeed.url ? 'text-green-600 border-green-300' : '',
                            )}
                            onClick={() => handleCopyFeed(primaryFeed.url, primaryFeed.name)}
                            title={copiedFeed === primaryFeed.url ? 'Copied!' : 'Copy RSS URL'}
                        >
                            {copiedFeed === primaryFeed.url ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        </Button>
                    </div>
                </div>

                {/* Other feeds (expandable) */}
                {showOtherFeeds && isExpanded && otherFeeds.length > 0 && (
                    <div className="space-y-1 pt-1 border-t border-orange-200">
                        <p className="text-xs text-orange-700 dark:text-orange-300 font-medium">
                            Other feeds:
                        </p>
                        {otherFeeds.map((feed) => (
                            <div key={feed.url} className="flex items-center justify-between bg-white dark:bg-gray-800 rounded p-2 border border-gray-200">
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">
                                        {feed.name}
                                    </div>
                                </div>
                                <div className="flex gap-1 ml-2 flex-shrink-0">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleOpenFeed(feed.url, feed.name)}
                                        className="text-xs h-6 px-2"
                                    >
                                        Subscribe
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={cn(
                                            'h-6 w-6',
                                            copiedFeed === feed.url ? 'text-green-600' : 'text-gray-500',
                                        )}
                                        onClick={() => handleCopyFeed(feed.url, feed.name)}
                                        title={copiedFeed === feed.url ? 'Copied!' : 'Copy RSS URL'}
                                    >
                                        {copiedFeed === feed.url ? <Check className="h-2 w-2" /> : <Copy className="h-2 w-2" />}
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Help text */}
                <p className="text-xs text-orange-600 dark:text-orange-400">
                    Add to your RSS reader to get updates.
                </p>
            </div>
        </div>
    );
}