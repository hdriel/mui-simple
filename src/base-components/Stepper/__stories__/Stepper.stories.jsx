import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  AddLocation as AddLocationIcon,
  Send as SendIcon,
} from "@mui/icons-material";
// import { Stack } from "@mui/material";

import Stepper from "../Stepper";
import { Typography } from "../Stepper.styled";
import { useSimpleStepper } from "../Stepper.utils";

export default {
  title: "Navigation/Stepper",
  component: Stepper,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "450px",
          width: "550px",
          backgroundColor: "rgba(255,255,255,0.8)",
          border: "1px solid black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const actions = {
  onClick: action("onClick"),
};

const steps = [
  { label: "Select campaign settings", optional: true, error: true },
  {
    label: "Create an ad group",
    muiColor: "secondary",
  },
  "Create an ad",
];

export const Default = () => {
  return <Stepper {...actions} />;
};

export const SimpleStepper = () => {
  const stepperProps = useSimpleStepper();
  const steps = [
    { label: "Select campaign settings", optional: true },
    {
      label: "Create an ad group",
      muiColor: "secondary",
    },
    "Create an ad",
  ];

  return (
    <Stepper
      {...actions}
      {...stepperProps}
      steps={steps}
      allCompletedCmp={
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      }
    >
      <div>Step A</div>
      <div>Step B</div>
      <div>Step C</div>
    </Stepper>
  );
};

export const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipSteps, setSkipSteps] = useState([]);

  return (
    <Stepper
      {...actions}
      steps={steps}
      stepIndex={activeStep}
      onReset={(index) => {
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
      stepsIndexSkipped={skipSteps}
      stepsBottomLabel
      allCompletedCmp={
        <Typography sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography>
      }
    >
      <div>Step A</div>
      <div>Step B</div>
      <div>Step C</div>
    </Stepper>
  );
};
