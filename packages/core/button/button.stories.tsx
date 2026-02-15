import type { Meta, StoryObj } from '@storybook/nextjs';

import Link from 'next/link';

import { Button } from './button';

const meta: Meta<typeof Button> = {
    args: {
        children: 'Button',
    },
    component: Button,
    title: 'core/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        variant: 'default',
    },
};

export const IconButton = {
    args: {
        children: <span>👋</span>,
        size: 'icon',
        variant: 'default',
    },
};

export const AsChild = {
    args: {
        asChild: true,
        children: <Link href="/">Link Button</Link>,
    },
};
