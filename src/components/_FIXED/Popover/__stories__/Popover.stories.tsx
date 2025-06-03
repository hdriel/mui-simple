import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import Popover from '../Popover';
import Button from '../../Button/Button';
import Text from '../../Typography/Text';

const meta: Meta<typeof Popover> = {
    title: 'Utils/Popover',
    component: Popover,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Popover>;

const render = ({ content, ...args }) => {
    return (
        <Popover {...args} content={content}>
            <Button variant="contained">Button</Button>
        </Popover>
    );
};

export const Default: Story = {
    args: {
        content: <Text> Hover with a Popover.</Text>,
        vertical: 'bottom',
        horizontal: 'left',
        disableRestoreFocus: true,
    },
    render,
};
