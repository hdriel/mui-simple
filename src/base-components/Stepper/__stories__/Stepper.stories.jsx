import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Stepper from "../Stepper";

export default {
  title: "Navigation/Stepper",
  component: Stepper,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Stepper {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <Stepper {...actions} variant="text">
        text
      </Stepper>
      <Stepper {...actions} variant="outlined">
        outlined
      </Stepper>
      <Stepper {...actions} variant="contained">
        contained
      </Stepper>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Stepper {...actions} muiColor="primary">
        primary
      </Stepper>
      <Stepper {...actions} muiColor="secondary">
        secondary
      </Stepper>
      <Stepper {...actions}>Default</Stepper>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Stepper {...actions} color={"#D050CC"}>
      Colored
    </Stepper>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Stepper {...actions} size="small">
        small
      </Stepper>
      <Stepper {...actions} size="medium">
        medium
      </Stepper>
      <Stepper {...actions} size="large">
        large
      </Stepper>
      <Stepper {...actions}>>Default</Stepper>
    </Stack>
  );
};
