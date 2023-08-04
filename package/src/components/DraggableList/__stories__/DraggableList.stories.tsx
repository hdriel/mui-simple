import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import DraggableList from '../DraggableList';
import Avatar from '../../_FIXED/Avatar/Avatar';
import Button from '../../_FIXED/Button/Button';

const meta: Meta<typeof DraggableList> = {
    title: 'Wrappers/DraggableList',
    component: DraggableList,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DraggableList>;

export const Default: Story = {
    args: {},
};

export const AvatarsColumn: Story = {
    args: {
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
        renderValue: (props) => <Avatar {...props} />,
    },
    render: (args) => {
        const [items, setItems] = useState(args.dataList);
        return <DraggableList {...args} dataList={items} onChange={setItems} />;
    },
};

export const AvatarsRow: Story = {
    args: {
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
        renderValue: (props) => <Avatar {...props} />,
    },
    render: (args) => {
        const [items, setItems] = useState(args.dataList);
        return <DraggableList {...args} dataList={items} onChange={setItems} />;
    },
};

export const ButtonsColumn: Story = {
    args: {
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
        renderValue: (props) => <Button {...props} />,
    },
    render: (args) => {
        const [items, setItems] = useState(args.dataList);
        return <DraggableList {...args} dataList={items} onChange={setItems} />;
    },
};

export const ButtonsRow: Story = {
    args: {
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
        renderValue: (props) => <Button {...props} />,
    },
    render: (args) => {
        const [items, setItems] = useState(args.dataList);
        return <DraggableList {...args} dataList={items} onChange={setItems} />;
    },
};
