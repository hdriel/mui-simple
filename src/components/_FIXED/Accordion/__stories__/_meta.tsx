import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-webpack5';
import Accordion from '../Accordion';

export type AccordionMetaType = Meta<typeof Accordion>;
const meta: AccordionMetaType = {
    title: 'Data-Display/Accordion',
    component: Accordion,
    tags: ['autodocs', 'ui', 'collapsible', 'interactive'],
    argTypes: {
        id: { control: 'text', description: 'Accordion id' },
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
        detailsStyles: {
            control: 'object',
            description: 'sx props for details',
        },
    },
    decorators: [
        (Story) => (
            <div style={{ margin: '1rem', maxWidth: 600 }}>
                <Story />
            </div>
        ),
    ],
    parameters: {
        docs: {
            description: {
                component: 'Accordion UI component using MUI + custom styling and features.',
            },
        },
    },
};

export default meta;

export type Story = StoryObj<typeof Accordion>;
