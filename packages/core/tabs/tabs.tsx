'use client';

import type { ComponentProps, Ref } from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '../cn';

export const Tabs = TabsPrimitive.Root;

type TabsListProps = {
    ref?: Ref<typeof TabsPrimitive.List>;
} & ComponentProps<typeof TabsPrimitive.List>;

export function TabsList({ className, ref, ...props }: TabsListProps) {
    return (
        <TabsPrimitive.List
            className={cn(
                'bg-muted text-muted-foreground inline-flex h-10 items-center justify-center rounded-md p-1',
                className
            )}
            ref={ref}
            {...props}
        />
    );
}

TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = {
    ref?: Ref<typeof TabsPrimitive.Trigger>;
} & ComponentProps<typeof TabsPrimitive.Trigger>;

export function TabsTrigger({ className, ref, ...props }: TabsTriggerProps) {
    return (
        <TabsPrimitive.Trigger
            className={cn(
                'ring-offset-background focus-visible:ring-ring focus-visible:outline-hidden data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
            ref={ref}
            {...props}
        />
    );
}

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = {
    ref?: Ref<typeof TabsPrimitive.Content>;
} & ComponentProps<typeof TabsPrimitive.Content>;

export function TabsContent({ className, ref, ...props }: TabsContentProps) {
    return (
        <TabsPrimitive.Content
            className={cn(
                'ring-offset-background focus-visible:ring-ring focus-visible:outline-hidden mt-2 focus-visible:ring-2 focus-visible:ring-offset-2',
                className
            )}
            ref={ref}
            {...props}
        />
    );
}

TabsContent.displayName = TabsPrimitive.Content.displayName;
