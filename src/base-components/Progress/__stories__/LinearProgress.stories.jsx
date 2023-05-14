import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import LinearProgress from "../LinearProgress";

export default {
  title: "Feedback/LinearProgress",
  component: LinearProgress,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <LinearProgress {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <LinearProgress {...actions} variant="text">
        text
      </LinearProgress>
      <LinearProgress {...actions} variant="outlined">
        outlined
      </LinearProgress>
      <LinearProgress {...actions} variant="contained">
        contained
      </LinearProgress>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <LinearProgress {...actions} muiColor="primary">
        primary
      </LinearProgress>
      <LinearProgress {...actions} muiColor="secondary">
        secondary
      </LinearProgress>
      <LinearProgress {...actions}>Default</LinearProgress>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <LinearProgress {...actions} color={"#D050CC"}>
      Colored
    </LinearProgress>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <LinearProgress {...actions} size="small">
        small
      </LinearProgress>
      <LinearProgress {...actions} size="medium">
        medium
      </LinearProgress>
      <LinearProgress {...actions} size="large">
        large
      </LinearProgress>
      <LinearProgress {...actions}>>Default</LinearProgress>
    </Stack>
  );
};
