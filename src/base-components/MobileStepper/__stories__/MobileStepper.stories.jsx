import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  AddLocation as AddLocationIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import MobileStepper from "../MobileStepper";
import { Typography } from "../MobileStepper.styled";
import { useSimpleStepper } from "../../Stepper/Stepper.utils";
import { ThemeProvider } from "../../../themes";
import { DirectionWrapper } from "../../../wrappers/direction.wrapper";

export default {
  title: "Navigation/MobileStepper",
  component: MobileStepper,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "450px",
          backgroundColor: "rgb(127,127,127)",
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
  return <MobileStepper {...actions} />;
};

export const DirectionLTR = () => {
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
    <DirectionWrapper direction={"ltr"}>
      <MobileStepper
        {...actions}
        {...stepperProps}
        direction={"ltr"}
        steps={steps}
        orientation="vertical"
        allCompletedCmp={
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        }
      >
        <div>
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.
        </div>
        <div>
          An ad group contains one or more ads which target a shared set of
          keywords.
        </div>
        <div>
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </div>
      </MobileStepper>
    </DirectionWrapper>
  );
};
export const DirectionRLT = () => {
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
    <DirectionWrapper direction={"rtl"}>
      <MobileStepper
        {...actions}
        {...stepperProps}
        direction={"rtl"}
        steps={steps}
        orientation="vertical"
        allCompletedCmp={
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        }
      >
        <div>
          For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.
        </div>
        <div>
          An ad group contains one or more ads which target a shared set of
          keywords.
        </div>
        <div>
          Try out different ad text to see what brings in the most customers,
          and learn how to enhance your ads using features like ad extensions.
          If you run into any problems with your ads, find out how to tell if
          they're running and how to resolve approval issues.
        </div>
      </MobileStepper>
    </DirectionWrapper>
  );
};
