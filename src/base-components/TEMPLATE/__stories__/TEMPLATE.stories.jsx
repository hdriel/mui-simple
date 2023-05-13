import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import TEMPLATE from "../TEMPLATE";

export default {
  title: "TEMPLATE/TEMPLATE",
  component: TEMPLATE,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <TEMPLATE {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <TEMPLATE {...actions} variant="text">
        text
      </TEMPLATE>
      <TEMPLATE {...actions} variant="outlined">
        outlined
      </TEMPLATE>
      <TEMPLATE {...actions} variant="contained">
        contained
      </TEMPLATE>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <TEMPLATE {...actions} muiColor="primary">
        primary
      </TEMPLATE>
      <TEMPLATE {...actions} muiColor="secondary">
        secondary
      </TEMPLATE>
      <TEMPLATE {...actions}>Default</TEMPLATE>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <TEMPLATE {...actions} color={"#D050CC"}>
      Colored
    </TEMPLATE>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <TEMPLATE {...actions} size="small">
        small
      </TEMPLATE>
      <TEMPLATE {...actions} size="medium">
        medium
      </TEMPLATE>
      <TEMPLATE {...actions} size="large">
        large
      </TEMPLATE>
      <TEMPLATE {...actions}>>Default</TEMPLATE>
    </Stack>
  );
};
