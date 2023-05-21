import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import SpeedDial from "../SpeedDial";

export default {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <SpeedDial {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <SpeedDial {...actions} variant="text">
        text
      </SpeedDial>
      <SpeedDial {...actions} variant="outlined">
        outlined
      </SpeedDial>
      <SpeedDial {...actions} variant="contained">
        contained
      </SpeedDial>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <SpeedDial {...actions} muiColor="primary">
        primary
      </SpeedDial>
      <SpeedDial {...actions} muiColor="secondary">
        secondary
      </SpeedDial>
      <SpeedDial {...actions}>Default</SpeedDial>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <SpeedDial {...actions} color={"#D050CC"}>
      Colored
    </SpeedDial>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <SpeedDial {...actions} size="small">
        small
      </SpeedDial>
      <SpeedDial {...actions} size="medium">
        medium
      </SpeedDial>
      <SpeedDial {...actions} size="large">
        large
      </SpeedDial>
      <SpeedDial {...actions}>>Default</SpeedDial>
    </Stack>
  );
};
