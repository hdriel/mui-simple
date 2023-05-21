import React from "react";
import { action } from "@storybook/addon-actions";
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
