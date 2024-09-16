import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { AddLocation as AddLocationIcon, Send as SendIcon } from '@mui/icons-material';

import Stepper from '../Stepper';
import { Typography } from '../Stepper.styled';
import { useSimpleStepper } from '../Stepper.utils';
import ToggleButtonGroup from '../../ToggleButtonGroup/ToggleButtonGroup';
import ToggleButtonGroups from '../../ToggleButtonGroup/ToggleButtonGroups';

export default {
    title: 'Navigation/StepperOld',
    component: Stepper,
    decorators: [
        (Story) => (
            <div
                style={{
                    height: '750px',
                    width: '750px',
                    backgroundColor: 'rgba(255,255,255,0.8)',
                    border: '1px solid black',
                    padding: '1em',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const actions = {
    onClick: action('onClick'),
};

const steps = [
    { label: 'Select campaign settings', optional: true, error: true },
    { label: 'Create an ad group', color: 'secondary' },
    'Create an ad',
];

export const Default = () => {
    return <Stepper {...actions} />;
};

export const SimpleStepper = () => {
    const stepperProps = useSimpleStepper();
    const steps = [
        { label: 'Select campaign settings', optional: true },
        { label: 'Create an ad group', color: 'secondary' },
        'Create an ad',
    ];

    return (
        <Stepper
            {...actions}
            {...stepperProps}
            steps={steps}
            onDone={stepperProps.onReset}
            allCompletedCmp={<Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>}
        >
            <div>Step A</div>
            <div>Step B</div>
            <div>Step C</div>
        </Stepper>
    );
};

export const StepsBottomLabelStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skipSteps, setSkipSteps] = useState([]);

    return (
        <Stepper
            {...actions}
            steps={steps}
            stepIndex={activeStep}
            onReset={() => {
                setSkipSteps([]);
                setActiveStep(0);
            }}
            onNext={(index) => {
                setSkipSteps((a) => a.filter((i) => i !== index));
                setActiveStep(index + 1);
            }}
            onBack={(index) => setActiveStep(index - 1)}
            onSkip={(index) => {
                setSkipSteps((a) => (a.includes(index) ? a : [...a, index]));
                setActiveStep(index + 1);
            }}
            onDone={() => {}}
            stepsIndexSkipped={skipSteps}
            stepsBottomLabel
            allCompletedCmp={<Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>}
        >
            <div>Step A</div>
            <div>Step B</div>
            <div>Step C</div>
        </Stepper>
    );
};

export const VerticalStepper = () => {
    const stepperProps = useSimpleStepper();
    const steps = [
        { label: 'Select campaign settings', optional: true },
        { label: 'Create an ad group', color: 'secondary' },
        'Create an ad',
    ];

    return (
        <Stepper
            {...actions}
            {...stepperProps}
            steps={steps}
            customStyleProps={{
                fontSize: 25,
                background: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
                lineColor: 'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
                padding: 3,
                lineWidth: 5,
                marginContent: 26,
            }}
            orientation="vertical"
            allCompletedCmp={<Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>}
        >
            <div>
                For each ad campaign that you create, you can control how much you're willing to spend on clicks and
                conversions, which networks and geographical locations you want your ads to show on, and more.
            </div>
            <div>An ad group contains one or more ads which target a shared set of keywords.</div>
            <div>
                Try out different ad text to see what brings in the most customers, and learn how to enhance your ads
                using features like ad extensions. If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.
            </div>
        </Stepper>
    );
};

export const CustomStepper = () => {
    const data1 = [
        { value: 'horizontal', component: 'horizontal' },
        { value: 'vertical', component: 'vertical' },
    ];
    const [orientation, setOrientation] = useState('horizontal');

    const data2 = [{ value: true, component: 'alternative labels' }];
    const [stepsBottomLabel, setStepsBottomLabel] = useState(true);

    const stepperProps = useSimpleStepper();
    const steps = [
        {
            label: 'Select campaign settings',
            optional: true,
            icon: <AddLocationIcon />,
        },
        {
            label: 'Create an ad group',
            color: 'secondary',
            icon: <SendIcon />,
        },
        'Create an ad',
    ];
    const customStyleProps = {
        fontSize: 25,
        background: '#D0DD0D',
        lineColor: '#124962',
        padding: 3,
        lineWidth: 5,
    };

    return (
        <>
            <ToggleButtonGroups sx={{ mb: 4 }}>
                <ToggleButtonGroup
                    value={orientation as 'horizontal' | 'vertical'}
                    exclusive
                    onChange={(event, value) => setOrientation(value)}
                    data={data1}
                />
                <ToggleButtonGroup
                    value={stepsBottomLabel}
                    exclusive
                    onChange={(event, value) => setStepsBottomLabel(value)}
                    data={data2}
                />
            </ToggleButtonGroups>

            <Stepper
                {...actions}
                {...stepperProps}
                steps={steps}
                stepsBottomLabel={stepsBottomLabel}
                customStyleProps={customStyleProps}
                orientation={orientation as 'horizontal' | 'vertical'}
                allCompletedCmp={
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                }
            >
                <div>
                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and
                    conversions, which networks and geographical locations you want your ads to show on, and more.
                </div>
                <div>An ad group contains one or more ads which target a shared set of keywords.</div>
                <div>
                    Try out different ad text to see what brings in the most customers, and learn how to enhance your
                    ads using features like ad extensions. If you run into any problems with your ads, find out how to
                    tell if they're running and how to resolve approval issues.
                </div>
            </Stepper>
        </>
    );
};

export const QontoStepper = () => {
    const data1 = [
        { value: 'horizontal', component: 'horizontal' },
        { value: 'vertical', component: 'vertical' },
    ];
    const [orientation, setOrientation] = useState('horizontal');

    const data2 = [{ value: true, component: 'alternative labels' }];
    const [stepsBottomLabel, setStepsBottomLabel] = useState(true);

    const stepperProps = useSimpleStepper();
    const steps = [
        {
            label: 'Select campaign settings',
            optional: true,
            icon: <AddLocationIcon />,
        },
        {
            label: 'Create an ad group',
            color: 'secondary',
            icon: <SendIcon />,
        },
        'Create an ad',
    ];

    return (
        <>
            <ToggleButtonGroups sx={{ mb: 4 }}>
                <ToggleButtonGroup
                    value={orientation}
                    exclusive
                    onChange={(event, value) => setOrientation(value)}
                    data={data1}
                />
                <ToggleButtonGroup
                    value={stepsBottomLabel}
                    exclusive
                    onChange={(event, value) => setStepsBottomLabel(value)}
                    data={data2}
                />
            </ToggleButtonGroups>

            <Stepper
                {...actions}
                {...stepperProps}
                qontoStyle
                color="secondary"
                steps={steps}
                stepsBottomLabel={stepsBottomLabel}
                orientation={orientation}
                allCompletedCmp={
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                }
            >
                <div>
                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and
                    conversions, which networks and geographical locations you want your ads to show on, and more.
                </div>
                <div>An ad group contains one or more ads which target a shared set of keywords.</div>
                <div>
                    Try out different ad text to see what brings in the most customers, and learn how to enhance your
                    ads using features like ad extensions. If you run into any problems with your ads, find out how to
                    tell if they're running and how to resolve approval issues.
                </div>
            </Stepper>
        </>
    );
};

export const QontoCustomStepper = () => {
    const data1 = [
        { value: 'horizontal', component: 'horizontal' },
        { value: 'vertical', component: 'vertical' },
    ];
    const [orientation, setOrientation] = useState('horizontal');

    const data2 = [{ value: true, component: 'alternative labels' }];
    const [stepsBottomLabel, setStepsBottomLabel] = useState(true);

    const stepperProps = useSimpleStepper();
    const steps = [
        {
            label: 'Select campaign settings',
            optional: true,
            icon: <AddLocationIcon />,
        },
        {
            label: 'Create an ad group',
            color: 'secondary',
            icon: <SendIcon />,
        },
        'Create an ad',
    ];

    const customStyleProps = {
        fontSize: 35,
        background: '#D0DD0D',
        lineColor: '#124962',
        lineWidth: 6,
        padding: 10,
        checkIcon: <SendIcon sx={{ fontSize: 35 }} />,
        dotIcon: <AddLocationIcon sx={{ fontSize: 35 }} />,
    };

    return (
        <>
            <ToggleButtonGroups sx={{ mb: 4 }}>
                <ToggleButtonGroup
                    value={orientation}
                    exclusive
                    onChange={(event, value) => setOrientation(value)}
                    data={data1}
                />
                <ToggleButtonGroup
                    value={stepsBottomLabel}
                    exclusive
                    onChange={(event, value) => setStepsBottomLabel(value)}
                    data={data2}
                />
            </ToggleButtonGroups>

            <Stepper
                {...actions}
                {...stepperProps}
                qontoStyle
                steps={steps}
                stepsBottomLabel={stepsBottomLabel}
                customStyleProps={customStyleProps}
                orientation={orientation}
                allCompletedCmp={
                    <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
                }
            >
                <div>
                    For each ad campaign that you create, you can control how much you're willing to spend on clicks and
                    conversions, which networks and geographical locations you want your ads to show on, and more.
                </div>
                <div>An ad group contains one or more ads which target a shared set of keywords.</div>
                <div>
                    Try out different ad text to see what brings in the most customers, and learn how to enhance your
                    ads using features like ad extensions. If you run into any problems with your ads, find out how to
                    tell if they're running and how to resolve approval issues.
                </div>
            </Stepper>
        </>
    );
};
