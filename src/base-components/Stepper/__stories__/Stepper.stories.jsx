import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
// import { Stack } from "@mui/material";

import Stepper from "../Stepper";

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
  { label: "Create an ad group", muiColor: "secondary" },
  "Create an ad",
];

export const Default = () => {
  return <Stepper {...actions} />;
};

export const HorizontalStepper = () => {
  return <Stepper {...actions} steps={steps} />;
};
