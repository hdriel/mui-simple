import React from "react";
import { action } from "@storybook/addon-actions";
import { Box } from "@mui/material";

import MobileStepper from "../MobileStepper";
import { Typography } from "../MobileStepper.styled";
import { useSimpleStepper } from "../../Stepper/Stepper.utils";
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
        steps={steps}
        orientation="vertical"
        allCompletedCmp={
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        }
      >
        <div>
          {`For each ad campaign that you create, you can control how much you're
          willing to spend on clicks and conversions, which networks and
          geographical locations you want your ads to show on, and more.`.repeat(
            20
          )}
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

export const AutoScrollImages = () => {
  const stepperProps = useSimpleStepper();

  const steps = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  return (
    <DirectionWrapper direction={"ltr"}>
      <MobileStepper
        {...actions}
        {...stepperProps}
        steps={steps}
        orientation="vertical"
      >
        {steps.map((step, index) => (
          <Box
            component={"img"}
            key={index}
            src={step.imgPath}
            alt={step.label}
          />
        ))}
      </MobileStepper>
    </DirectionWrapper>
  );
};
