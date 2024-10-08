import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@mui/material';

import Accordion from '../Accordion';
import Button from '../../Button/Button';

const meta: Meta<typeof Accordion> = {
    title: 'Data-Display/Accordion',
    component: Accordion,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const smallIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
const largeIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr";

export const Default: Story = {
    args: {
        children: '',
    },
};

export const Expanded: Story = {
    args: {
        id: 'acc-id',
        expanded: 'acc-id',
        label: 'Expanded',
        details: smallIpsum,
    },
};

export const OnChangeAcc: Story = {
    args: {
        label: 'onChange',
        details: smallIpsum,
    },
    render: (args) => {
        const [expanded, setExpanded] = useState(false);
        const onChange = (event, isExpanded) => setExpanded(isExpanded);
        return (
            <Accordion {...args} expanded={expanded} onChange={onChange}>
                on change event
            </Accordion>
        );
    },
};

export const Disabled: Story = {
    args: {
        expanded: true,
        label: 'Disabled',
        disabled: true,
        details: smallIpsum,
    },
};

export const Label: Story = {
    args: {
        label: 'Accordion Label',
        details: smallIpsum,
    },
};

export const SecondaryLabel: Story = {
    args: {
        label: 'Accordion Label',
        secondaryLabel: 'Accordion secondary label',
        details: smallIpsum,
    },
};

export const BottomSecondaryLabel: Story = {
    args: {
        label: 'Accordion Label',
        bottomSecondaryLabel: 'Accordion secondary label',
        details: smallIpsum,
    },
};

export const Details_ = (args) => (
    <Stack>
        <Accordion label="details as children" details={smallIpsum} expanded />
        <Accordion label="children" expanded>
            {smallIpsum}
        </Accordion>
    </Stack>
);

export const DetailsMaxRows: Story = {
    args: {
        label: 'Details Max Rows 3',
        detailsMaxRows: 3,
        expanded: true,
        details: largeIpsum,
    },
};

export const ExpandedAndCollapsedIcon: Story = {
    args: {
        label: 'Accordion Label',
        expandedIcon: 'Send',
        collapsedIcon: 'Person',
        details: smallIpsum,
    },
    render: (args) => {
        const [expanded, setExpanded] = useState(false);
        const onChange = (event, isExpanded) => setExpanded(isExpanded);
        return <Accordion {...args} expanded={expanded} onChange={onChange} />;
    },
};

export const ExpandedIcon: Story = {
    args: {
        label: 'Accordion Label',
        expandedIcon: 'Home',
        collapsedIcon: 'Person',
        details: smallIpsum,
    },
};

export const ShowMoreAndHideLabel: Story = {
    args: {
        label: 'Details Max Rows 3',
        detailsMaxRows: 3,
        showMoreLabel: 'read more',
        hideLabel: 'hide back',
        expanded: true,
        details: largeIpsum,
    },
};

export const BgColor: Story = {
    args: {
        label: 'background summary',
        bgColor: '#10DCCA',
        expanded: true,
        details: smallIpsum,
    },
};

export const BgColorDetails: Story = {
    args: {
        label: 'background details ',
        bgColorDetails: '#10DCCA',
        expanded: true,
        details: smallIpsum,
    },
};

export const TextColor: Story = {
    args: {
        label: 'Details Max Rows 3',
        textColor: '#10DCCA',
        expanded: true,
        details: smallIpsum,
    },
};

export const LabelColor: Story = {
    args: {
        label: 'Details Max Rows 3',
        labelColor: '#10DCCA',
        expanded: true,
        details: smallIpsum,
    },
};

export const LabelColorFunc: Story = {
    args: {
        label: 'labelColor as function by expanded state',
        labelColor: (expanded) => (expanded ? '#7e049a' : '#07860d'),
        expanded: true,
        details: smallIpsum,
    },
};

export const LongLabel: Story = {
    args: {
        label: largeIpsum,
        details: smallIpsum,
    },
};

export const ButtonsColor: Story = {
    args: {
        label: 'Details Max Rows 3',
        detailsMaxRows: 3,
        showMoreLabel: 'read more',
        hideLabel: 'hide back',
        buttonsColor: '#10DCCA',
        expanded: true,
        details: largeIpsum,
    },
};

const CounterCmp = () => {
    const [value, setValue] = useState(0);
    return (
        <Button onClick={() => setValue(value + 1)} endIcon={value}>
            Count:
        </Button>
    );
};
export const UnmountDetailsOnClose_ = (args) => (
    <Stack>
        <Accordion unmountDetailsOnClose={true} label="Lose Details On Close">
            <CounterCmp />
        </Accordion>
        <Accordion unmountDetailsOnClose={false} label="Save Details On Close">
            <CounterCmp />
        </Accordion>
    </Stack>
);

export const UseCustomStyle_ = (args) => (
    <Stack>
        <Accordion useCustomStyle detailsMaxRows={3} label="Use Custom Style A">
            {largeIpsum}
        </Accordion>
        <Accordion useCustomStyle detailsMaxRows={3} label="Use Custom Style B">
            {largeIpsum}
        </Accordion>
    </Stack>
);
