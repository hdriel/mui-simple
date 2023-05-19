import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Menu from "../Menu";

export default {
  title: "Navigation/Menu",
  component: Menu,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Menu {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <Menu {...actions} variant="text">
        text
      </Menu>
      <Menu {...actions} variant="outlined">
        outlined
      </Menu>
      <Menu {...actions} variant="contained">
        contained
      </Menu>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Menu {...actions} muiColor="primary">
        primary
      </Menu>
      <Menu {...actions} muiColor="secondary">
        secondary
      </Menu>
      <Menu {...actions}>Default</Menu>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Menu {...actions} color={"#D050CC"}>
      Colored
    </Menu>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Menu {...actions} size="small">
        small
      </Menu>
      <Menu {...actions} size="medium">
        medium
      </Menu>
      <Menu {...actions} size="large">
        large
      </Menu>
      <Menu {...actions}>>Default</Menu>
    </Stack>
  );
};
