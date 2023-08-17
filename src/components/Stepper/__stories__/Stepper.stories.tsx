import React, { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Edit as EditIcon } from '@mui/icons-material';
import Stepper from '../Stepper';
import { StepType } from '../../decs';

const meta: Meta<typeof Stepper> = {
    title: 'Navigation/Stepper',
    component: Stepper,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
    args: {},
};

const stepsStr: string[] = ['Vision', 'Goal', 'Plan', 'Action', 'Success'];
const steps: StepType[] = [
    {
        label: 'Decide What You Want',
        color: 'primary',
        icon: 'AltRoute',
    },
    {
        label: 'Write it Down',
        icon: <EditIcon />,
        optional: true,
    },
    {
        label: 'Set a Deadline',
        color: 'success.dark',
        icon: 'HourglassBottom',
    },
    {
        label: 'Make a List',
        color: '#0c7376',
        icon: 'PlaylistAddCheck',
    },
    {
        label: 'Take Action',
        error: true,
        icon: 'ThumbUpOffAlt',
    },
];

export const StepsStr: Story = {
    args: {
        steps: stepsStr,
    },
};

export const StepsObj: Story = {
    args: {
        steps: steps,
    },
};

export const Color: Story = {
    args: {
        color: '#2c00cd',
        steps: stepsStr,
    },
};

// allCompletedCmp?: ReactNode;
// color?: string;
// customStyleProps?: {
//   fontSize?: number | string;
//   background?: string;
//   lineColor?: string;
//   padding?: number | string;
//   lineWidth?: number | string;
//   checkIcon?: ReactNode;
//   dotIcon?: ReactNode;
//   marginContent?: number | string;
//   [key: string]: any;
// };
// labels?: { next?: string; back?: string; done?: string; skip?: string; optional?: string };
// onBack?: (stepId: number) => void;
// onDone?: () => void;
// onNext?: (stepId: number) => void;
// onReset?: () => void;
// onSkip?: (stepId: number) => void;
// orientation?: 'horizontal' | 'vertical';
// qontoStyle?: boolean;
// stepIndex?: number;
// stepsBottomLabel?: boolean;
// stepsIndexSkipped?: number[];
// stepsOnlyWithoutComplete?: boolean;
// unmountOnExit?: boolean;
