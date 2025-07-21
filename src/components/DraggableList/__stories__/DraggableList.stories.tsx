import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import DraggableList from '../DraggableList';
import Avatar from '../../_FIXED/Avatar/Avatar';
import Button from '../../_FIXED/Button/Button';

// need redux for these stories
// https://dnd.hellopangea.com/?path=/story/examples-single-vertical-list--basic
// https://storybook.js.org/addons/@dreamworld/addon-redux
const meta: Meta<typeof DraggableList> = {
    title: 'Wrappers/DraggableList',
    component: DraggableList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DraggableList>;

const render = (args) => {
    const [items, setItems] = useState(args.dataList);
    return <DraggableList {...args} dataList={items} onChange={setItems} />;
};

export const Default: Story = {
    args: {
        useDraggableContext: true,
    },
};

export const AvatarsColumn: Story = {
    args: {
        useDraggableContext: true,
        dataList: [
            { image: '1.jpg' },
            { image: '2.jpg' },
            { image: '3.jpg' },
            { image: '4.jpg' },
            { image: '5.jpg' },
            { image: '6.jpg' },
            { image: '7.jpg' },
        ],
        fieldId: 'image',
        flexDirection: 'column',
        flexGap: '10px',
        droppableClassName: 'images',
        renderValue: (props: any) => <Avatar {...props} />,
    },
    render,
};

export const AvatarsRow: Story = {
    args: {
        useDraggableContext: true,
        dataList: [
            { image: '1.jpg' },
            { image: '2.jpg' },
            { image: '3.jpg' },
            { image: '4.jpg' },
            { image: '5.jpg' },
            { image: '6.jpg' },
            { image: '7.jpg' },
        ],
        fieldId: 'image',
        flexDirection: 'row',
        flexGap: '10px',
        droppableClassName: 'images',
        renderValue: (props: any) => <Avatar {...props} />,
    },
    render,
};

export const ButtonsColumn: Story = {
    args: {
        useDraggableContext: true,
        dataList: [
            { startIcon: 'Send', label: 'Send' },
            { startIcon: 'Photo', label: 'Photo' },
            { icon: 'Fingerprint' },
            { startIcon: 'Google', label: 'Google' },
            { startIcon: 'YouTube', label: 'YouTube' },
        ],
        fieldId: 'image',
        flexDirection: 'column',
        flexGap: '10px',
        droppableClassName: 'images',
        renderValue: (props: any) => <Button {...props} />,
    },
    render,
};

export const ButtonsRow: Story = {
    args: {
        useDraggableContext: true,
        dataList: [
            { startIcon: 'Send', label: 'Send' },
            { startIcon: 'Photo', label: 'Photo' },
            { icon: 'Fingerprint' },
            { startIcon: 'Google', label: 'Google' },
            { startIcon: 'YouTube', label: 'YouTube' },
        ],
        fieldId: 'image',
        flexDirection: 'row',
        flexGap: '10px',
        droppableClassName: 'images',
        renderValue: (props: any) => <Button {...props} />,
    },
    render,
};
