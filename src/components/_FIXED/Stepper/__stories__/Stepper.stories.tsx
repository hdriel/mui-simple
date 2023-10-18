import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { range } from 'lodash-es';
import { DoneAll as DoneAllIcon } from '@mui/icons-material';
import Stepper from '../Stepper';
import { useSimpleStepper } from '../Stepper.utils';
import { stepsChildren, stepsStrChildren, stepsStr, steps } from './Stepper.mocks';

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

export const StepsStr: Story = {
    args: {
        steps: stepsStr,
        children: stepsStrChildren,
    },
};

export const StepsObj: Story = {
    args: {
        steps: steps,
        children: stepsChildren,
    },
};

export const Color: Story = {
    args: {
        color: '#d509b9', // todo: not working
        steps: stepsStr,
        children: stepsStrChildren,
    },
};

export const StepIndex: Story = {
    args: {
        steps: stepsStr,
        stepIndex: 2,
        children: stepsStrChildren,
    },
};

export const StepsIndexSkipped: Story = {
    args: {
        steps: stepsStr,
        stepIndex: stepsStr.length - 1,
        stepsIndexSkipped: range(1, stepsStr.length - 1),
        children: stepsStrChildren,
    },
};

export const AllCompletedCmp: Story = {
    args: {
        allCompletedCmp: <DoneAllIcon />,
        steps: stepsStr,
        stepIndex: stepsStr.length,
        children: stepsStrChildren,
    },
};

export const OnChangeEvents: Story = {
    args: {
        allCompletedCmp: <DoneAllIcon />,
        steps: stepsStr,
        children: stepsStrChildren,
    },
    render: (args) => {
        const [activeStep, setActiveStep] = useState(0);
        const [skipSteps, setSkipSteps] = useState([]);
        return (
            <Stepper
                {...args}
                stepsIndexSkipped={skipSteps}
                stepIndex={activeStep}
                onNext={(index: number) => {
                    setSkipSteps((a) => a.filter((i) => i !== index));
                    setActiveStep(index + 1);
                }}
                onBack={(index: number) => setActiveStep(index - 1)}
                onSkip={(index: number) => {
                    setSkipSteps((a) => (a.includes(index) ? a : [...a, index]));
                    setActiveStep(index + 1);
                }}
                onDone={() => console.log('Done')}
                onReset={() => {
                    /* todo: implement this */
                }}
            />
        );
    },
};

export const UseSimpleStepper: Story = {
    args: {
        allCompletedCmp: <DoneAllIcon />,
        steps: stepsStr,
        stepIndex: stepsStr.length,
        children: stepsStrChildren,
    },
    render: (args) => {
        const [activeStep, setActiveStep] = useState(0);
        const [skipSteps, setSkipSteps] = useState([]);
        return <Stepper {...args} {...useSimpleStepper()} />;
    },
};

export const Labels: Story = {
    args: {
        allCompletedCmp: <DoneAllIcon />,
        steps,
        BACK_LABEL: 'BBB',
        NEXT_LABEL: 'NNN',
        DONE_LABEL: 'DDD',
        SKIP_LABEL: 'SSS',
        OPTIONAL_LABEL: 'OOO',
        children: stepsChildren,
    },
    render: (args) => {
        const [activeStep, setActiveStep] = useState(0);
        const [skipSteps, setSkipSteps] = useState([]);
        return <Stepper {...args} {...useSimpleStepper()} />;
    },
};

export const StepsBottomLabel: Story = {
    args: {
        steps,
        stepIndex: 2,
        stepsBottomLabel: true,
        children: stepsChildren,
    },
};
export const StepsOnlyWithoutComplete: Story = {
    args: {
        allCompletedCmp: <DoneAllIcon />,
        steps: stepsStr,
        stepIndex: stepsStr.length,
        stepsOnlyWithoutComplete: true,
        children: stepsStrChildren,
    },
};

export const VerticalOrientation: Story = {
    args: {
        steps,
        stepIndex: 2,
        orientation: 'vertical',
        children: stepsChildren,
    },
};

export const QontoStyle: Story = {
    args: {
        steps,
        stepIndex: 2,
        orientation: 'horizontal',
        qontoStyle: true,
        children: stepsChildren,
    },
};

export const QontoVerticalStyle: Story = {
    args: {
        steps,
        stepIndex: 2,
        orientation: 'vertical',
        qontoStyle: true,
        children: stepsChildren,
    },
};

export const CustomStyleProps: Story = {
    args: {
        steps,
        stepIndex: 2,
        children: stepsChildren,
        customStyleProps: {
            fontSize: 20,
            background: '#DDaa0c',
            lineColor: '#cd00c0',
            padding: 20,
            lineWidth: 5,
            checkIcon: 'OfflinePin',
            dotIcon: 'RadioButtonChecked',
            marginContent: 10,
        },
    },
};

// unmountOnExit?: boolean;
