import React, { useState } from 'react';
import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Stack } from '@mui/material';
import Accordion from '../Accordion';
import Button from '../../Button/Button';
import { SMALL_IPSUM, LARGE_IPSUM } from '../../../../__stories__/consts';
import { userEvent } from '@storybook/testing-library';
import { within } from '@testing-library/react';

const meta: Meta<typeof Accordion> = {
    title: 'Data-Display/Accordion',
    component: Accordion,
    tags: ['autodocs', 'ui', 'collapsible', 'interactive'],
    argTypes: {
        label: { control: 'text', description: 'Main accordion label' },
        secondaryLabel: { control: 'text', description: 'Optional label on the right' },
        bottomSecondaryLabel: { control: 'text', description: 'Secondary label shown below' },
        details: { control: 'text', description: 'Accordion content when expanded' },
        expanded: {
            control: 'boolean',
            description: 'Controls expanded state (true/false or string ID)',
        },
        expandedIcon: {
            control: 'text',
            description: 'Icon when expanded (name of MUI icon or SVG)',
        },
        collapsedIcon: {
            control: 'text',
            description: 'Icon when collapsed (name of MUI icon or SVG)',
        },
        showMoreLabel: { control: 'text', description: 'Label for "Show more" button' },
        hideLabel: { control: 'text', description: 'Label for "Hide" button' },
        buttonsColor: { control: 'color', description: 'Color of "Show more" / "Hide" buttons' },
        bgColor: { control: 'color', description: 'Background color for the summary section' },
        bgColorDetails: { control: 'color', description: 'Background color for the details section' },
        textColor: { control: 'color', description: 'Text color inside details' },
        labelColor: {
            control: 'color',
            description: 'Color of the label text (non-functional mode only)',
        },
        detailsMaxRows: {
            control: { type: 'number', min: 1, step: 1 },
            description: 'Max number of rows to show before truncating',
        },
        disabled: { control: 'boolean', description: 'Disables entire accordion' },
        disabledContentPadding: { control: 'boolean', description: 'Removes inner padding' },
        useCustomStyle: { control: 'boolean', description: 'Use custom MUI style overrides' },
        unmountDetailsOnClose: {
            control: 'boolean',
            description: 'Unmount details content when collapsed',
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Accordion UI component using MUI + custom styling.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: { children: '' },
};

export const ClickToExpand: Story = {
    args: { label: 'Test Expand', details: SMALL_IPSUM, onChange: fn() },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const summary = await canvas.getByText('Test Expand');
        await userEvent.click(summary);
    },
};

export const Playground: Story = {
    args: {
        label: 'Playground Accordion',
        details: SMALL_IPSUM,
        expandedIcon: 'ExpandMore',
        collapsedIcon: 'ExpandLess',
        detailsMaxRows: 2,
        bgColor: '#f5f5f5',
        textColor: '#333',
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactively test Accordion props here.',
            },
        },
    },
};

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
