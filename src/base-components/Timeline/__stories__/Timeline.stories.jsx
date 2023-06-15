import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Timeline from "../Timeline";

export default {
  title: "Lab/TEMPLATE",
  component: Timeline,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Timeline {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <Timeline {...actions} variant="text">
        text
      </Timeline>
      <Timeline {...actions} variant="outlined">
        outlined
      </Timeline>
      <Timeline {...actions} variant="contained">
        contained
      </Timeline>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Timeline {...actions} muiColor="primary">
        primary
      </Timeline>
      <Timeline {...actions} muiColor="secondary">
        secondary
      </Timeline>
      <Timeline {...actions}>Default</Timeline>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Timeline {...actions} color={"#D050CC"}>
      Colored
    </Timeline>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Timeline {...actions} size="small">
        small
      </Timeline>
      <Timeline {...actions} size="medium">
        medium
      </Timeline>
      <Timeline {...actions} size="large">
        large
      </Timeline>
      <Timeline {...actions}>>Default</Timeline>
    </Stack>
  );
};
