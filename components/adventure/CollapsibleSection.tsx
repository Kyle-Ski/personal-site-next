'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CollapsibleSectionProps {
    title: string;
    children: React.ReactNode;
    icon?: LucideIcon;
    defaultExpanded?: boolean;
    variant?: 'default' | 'compact' | 'bordered';
    className?: string;
    id?: string;
    subtitle?: string;
    badge?: string;
    onToggle?: (expanded: boolean) => void;
}

export default function CollapsibleSection({
    title,
    children,
    icon: Icon,
    defaultExpanded = false,
    variant = 'default',
    className = '',
    id,
    subtitle,
    badge,
    onToggle,
}: CollapsibleSectionProps) {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const contentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(0);

    // Measure content height when expanded state changes
    useEffect(() => {
        if (contentRef.current) {
            if (isExpanded) {
                setContentHeight(contentRef.current.scrollHeight);
            } else {
                setContentHeight(0);
            }
        }
    }, [isExpanded, children]);

    // Update height when children content changes
    useEffect(() => {
        if (isExpanded && contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, [children, isExpanded]);

    const toggleExpansion = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        onToggle?.(newState);
    };

    // Variant styles
    const getVariantStyles = () => {
        switch (variant) {
            case 'compact':
                return {
                    card: 'border-border bg-card/50',
                    header: 'py-3 px-4',
                    content: 'px-4 pb-4',
                };
            case 'bordered':
                return {
                    card: 'border-2 border-border bg-card',
                    header: 'py-4 px-6',
                    content: 'px-6 pb-6',
                };
            default:
                return {
                    card: 'border-border bg-card adventure-card',
                    header: 'py-4 px-6',
                    content: 'px-6 pb-6',
                };
        }
    };

    const styles = getVariantStyles();

    if (variant === 'compact') {
        // Compact variant - no card wrapper
        return (
            <div className={`${className}`} id={id}>
                {/* Compact Header */}
                <button
                    onClick={toggleExpansion}
                    className="w-full flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 border border-border rounded-t-lg transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={id ? `${id}-content` : undefined}
                >
                    <div className="flex items-center gap-3">
                        {Icon && <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                        <div className="text-left">
                            <div className="font-medium text-card-foreground">{title}</div>
                            {subtitle && (
                                <div className="text-sm text-muted-foreground">{subtitle}</div>
                            )}
                        </div>
                        {badge && (
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {badge}
                            </span>
                        )}
                    </div>
                    {isExpanded ? (
                        <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200" />
                    ) : (
                        <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform duration-200" />
                    )}
                </button>

                {/* Compact Content */}
                <div
                    style={{
                        height: contentHeight,
                        overflow: 'hidden',
                        transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    <div
                        ref={contentRef}
                        id={id ? `${id}-content` : undefined}
                        className="p-4 border-x border-b border-border rounded-b-lg bg-card"
                    >
                        {children}
                    </div>
                </div>
            </div>
        );
    }

    // Default and bordered variants - use Card wrapper
    return (
        <Card className={`${styles.card} ${className}`} id={id}>
            <CardHeader className={styles.header}>
                <button
                    onClick={toggleExpansion}
                    className="w-full flex items-center justify-between text-left group"
                    aria-expanded={isExpanded}
                    aria-controls={id ? `${id}-content` : undefined}
                >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                        {Icon && <Icon className="h-5 w-5 text-muted-foreground flex-shrink-0" />}
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                                {title}
                            </div>
                            {subtitle && (
                                <div className="text-sm text-muted-foreground mt-1">{subtitle}</div>
                            )}
                        </div>
                        {badge && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex-shrink-0 ml-2">
                                {badge}
                            </span>
                        )}
                    </div>
                    <div className="ml-4 flex-shrink-0">
                        {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-muted-foreground group-hover:text-card-foreground transition-all duration-200" />
                        ) : (
                            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-card-foreground transition-all duration-200" />
                        )}
                    </div>
                </button>
            </CardHeader>

            {/* Animated Content */}
            <div
                style={{
                    height: contentHeight,
                    overflow: 'hidden',
                    transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                <div ref={contentRef} id={id ? `${id}-content` : undefined}>
                    <CardContent className={styles.content}>
                        {children}
                    </CardContent>
                </div>
            </div>
        </Card>
    );
}

// Utility component for multiple collapsible sections with expand/collapse all
interface CollapsibleGroupProps {
    children: React.ReactElement<CollapsibleSectionProps>[];
    className?: string;
}

export function CollapsibleGroup({ children, className = '' }: CollapsibleGroupProps) {
    const [allExpanded, setAllExpanded] = useState(false);

    const handleExpandAll = () => {
        const newState = !allExpanded;
        setAllExpanded(newState);

        // Trigger all children to expand/collapse
        // This would need to be implemented with a context or ref system
        // For now, it's a placeholder for the UI
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {/* Expand/Collapse All Controls */}
            <div className="flex justify-end">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleExpandAll}
                    className="text-muted-foreground hover:text-card-foreground"
                >
                    {allExpanded ? 'Collapse All' : 'Expand All'}
                </Button>
            </div>

            {/* Collapsible Sections */}
            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}