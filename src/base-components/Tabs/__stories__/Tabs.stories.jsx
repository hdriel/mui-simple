import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Tabs from "../TEMPLATE";

export default {
  title: "TEMPLATE/TEMPLATE",
  component: Tabs,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Tabs {...actions} />;
};

export const Variant = () => {
  return (
    <Stack>
      <Tabs {...actions} variant="text">
        text
      </Tabs>
      <Tabs {...actions} variant="outlined">
        outlined
      </Tabs>
      <Tabs {...actions} variant="contained">
        contained
      </Tabs>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Tabs {...actions} muiColor="primary">
        primary
      </Tabs>
      <Tabs {...actions} muiColor="secondary">
        secondary
      </Tabs>
      <Tabs {...actions}>Default</Tabs>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Tabs {...actions} color={"#D050CC"}>
      Colored
    </Tabs>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Tabs {...actions} size="small">
        small
      </Tabs>
      <Tabs {...actions} size="medium">
        medium
      </Tabs>
      <Tabs {...actions} size="large">
        large
      </Tabs>
      <Tabs {...actions}>>Default</Tabs>
    </Stack>
  );
};
