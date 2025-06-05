import React, { useState } from 'react';
import meta, { AccordionMetaType, Story } from './_meta';
import { Stack } from '@mui/material';
import Accordion from '../Accordion';
import Button from '../../Button/Button';
import { SMALL_IPSUM, LARGE_IPSUM } from '../../../../__stories__/consts';

export default {
    ...meta,
    title: 'Data-Display/Accordion/Styles',
    argTypes: {
        ...Object.keys(meta.argTypes).reduce(
            (obj, argType) => ({
                ...obj,
                [argType]: { ...obj[argType], table: { disable: true } },
            }),
            {}
        ),
    },
    tags: ['autodocs'],
} as AccordionMetaType;

export const Expanded: Story = {
    args: {
        id: 'acc-id',
        expanded: 'acc-id',
        label: 'Expanded',
        details: SMALL_IPSUM,
    },
};

export const OnChangeAcc: Story = {
    args: {
        label: 'onChange',
        details: SMALL_IPSUM,
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
        details: SMALL_IPSUM,
    },
};

export const Label: Story = {
    args: {
        label: 'Accordion Label',
        details: SMALL_IPSUM,
    },
};

export const SecondaryLabel: Story = {
    args: {
        label: 'Accordion Label',
        secondaryLabel: 'Accordion secondary label',
        details: SMALL_IPSUM,
    },
};

export const BottomSecondaryLabel: Story = {
    args: {
        label: 'Accordion Label',
        bottomSecondaryLabel: 'Accordion secondary label',
        details: SMALL_IPSUM,
    },
};

export const Details_ = (args) => (
    <Stack>
        <Accordion label="details as children" details={SMALL_IPSUM} expanded />
        <Accordion label="children" expanded>
            {SMALL_IPSUM}
        </Accordion>
    </Stack>
);

export const DetailsMaxRows: Story = {
    args: {
        label: 'Details Max Rows 3',
        detailsMaxRows: 3,
        expanded: true,
        details: LARGE_IPSUM,
    },
};

export const ExpandedAndCollapsedIcon: Story = {
    args: {
        label: 'Accordion Label',
        expandedIcon: 'Send',
        collapsedIcon: 'Person',
        details: SMALL_IPSUM,
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
        details: SMALL_IPSUM,
    },
};

export const ShowMoreAndHideLabel: Story = {
    args: {
        label: 'Details Max Rows 3',
        detailsMaxRows: 3,
        showMoreLabel: 'read more',
        hideLabel: 'hide back',
        expanded: true,
        details: LARGE_IPSUM,
    },
};

export const BgColor: Story = {
    args: {
        label: 'background summary',
        bgColor: '#10DCCA',
        expanded: true,
        details: SMALL_IPSUM,
    },
};

export const BgColorDetails: Story = {
    args: {
        label: 'background details ',
        bgColorDetails: '#10DCCA',
        expanded: true,
        details: SMALL_IPSUM,
    },
};

export const TextColor: Story = {
    args: {
        label: 'Details Max Rows 3',
        textColor: '#10DCCA',
        expanded: true,
        details: SMALL_IPSUM,
    },
};

export const LabelColor: Story = {
    args: {
        label: 'Details Max Rows 3',
        labelColor: '#10DCCA',
        expanded: true,
        details: SMALL_IPSUM,
    },
};

export const LabelColorFunc: Story = {
    args: {
        label: 'labelColor as function by expanded state',
        labelColor: (expanded) => (expanded ? '#7e049a' : '#07860d'),
        expanded: true,
        details: SMALL_IPSUM,
    },
};

export const LongLabel: Story = {
    args: {
        label: LARGE_IPSUM,
        details: SMALL_IPSUM,
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
        details: LARGE_IPSUM,
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
            {LARGE_IPSUM}
        </Accordion>
        <Accordion useCustomStyle detailsMaxRows={3} label="Use Custom Style B">
            {LARGE_IPSUM}
        </Accordion>
    </Stack>
);
