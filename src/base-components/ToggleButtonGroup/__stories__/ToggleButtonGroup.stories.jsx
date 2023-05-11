import React from "react";
import { action } from "@storybook/addon-actions";

import ToggleButtonGroup from "../ToggleButtonGroup";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";

export default {
  title: "base-components/ToggleButtonGroup",
  component: ToggleButtonGroup,
};

const onChangeAction = action("onChange");
const data = [
  { label: "Female", value: "0" },
  { label: "Male", value: "1" },
  { label: "Other", value: "2" },
  { label: "Other", value: "3", disabled: true },
];

export const Default = () => {
  return <ToggleButtonGroup {...actions} />;
};

export const Icon = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const Text = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const Menu = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const Disabled = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const Orientation = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const MultipleSelection = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const ExclusiveSelection = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};

export const Separate = () => {
  return <ToggleButtonGroup {...actions}>Start Icon</ToggleButtonGroup>;
};
