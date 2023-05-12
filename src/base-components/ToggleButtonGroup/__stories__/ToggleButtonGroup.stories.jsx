import React, { useState } from "react";
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
  return <ToggleButtonGroup onChange={onChangeAction} />;
};

export const Icon = () => {
  const [value, setValue] = useState(null);

  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const Text = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const Menu = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const Orientation = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const MultipleSelection = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const ExclusiveSelection = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};

export const Separate = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
    />
  );
};
