import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Card from "../Card";

export default {
  title: "Surfaces/Card",
  component: Card,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Card {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <Card {...actions} variant="text">
        text
      </Card>
      <Card {...actions} variant="outlined">
        outlined
      </Card>
      <Card {...actions} variant="contained">
        contained
      </Card>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Card {...actions} muiColor="primary">
        primary
      </Card>
      <Card {...actions} muiColor="secondary">
        secondary
      </Card>
      <Card {...actions}>Default</Card>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Card {...actions} color={"#D050CC"}>
      Colored
    </Card>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Card {...actions} size="small">
        small
      </Card>
      <Card {...actions} size="medium">
        medium
      </Card>
      <Card {...actions} size="large">
        large
      </Card>
      <Card {...actions}>>Default</Card>
    </Stack>
  );
};
