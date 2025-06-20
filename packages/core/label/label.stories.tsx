import type { Meta, StoryObj } from '@storybook/nextjs';

import { Label } from './label';

const meta: Meta<typeof Label> = {
    component: Label,
    title: 'core/Label',
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Primary: Story = {
    args: {},
};
