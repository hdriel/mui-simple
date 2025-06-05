import { userEvent } from '@storybook/testing-library';
import { within } from '@testing-library/react';
import meta, { Story } from './_meta';
import { expect, fn } from '@storybook/test';

export default {
    ...meta,
    title: 'Data-Display/Accordion/Interaction',
};

export const Interactable: Story = {
    args: { label: 'Click Me', details: 'Hidden content here', onChange: fn() },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const trigger = canvas.getByText('Click Me');
        await userEvent.click(trigger);
        await expect(canvas.getByText('Hidden content here')).toBeVisible();
    },
};
