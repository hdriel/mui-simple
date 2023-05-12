import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import {
  FormatAlignLeft as FormatAlignLeftIcon,
  FormatAlignCenter as FormatAlignCenterIcon,
  FormatAlignRight as FormatAlignRightIcon,
  FormatAlignJustify as FormatAlignJustifyIcon,
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,
  FormatUnderlined as FormatUnderlinedIcon,
  FormatColorFill as FormatColorFillIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import ToggleButtonGroup from "../ToggleButtonGroup";
import ToggleButtonGroups from "../ToggleButtonGroups";

export default {
  title: "base-components/ToggleButtonGroup",
  component: ToggleButtonGroup,
};

const onChangeAction = action("onChange");
const data1 = [
  { value: "left", component: <FormatAlignLeftIcon /> },
  { value: "center", component: <FormatAlignCenterIcon /> },
  { value: "right", component: <FormatAlignRightIcon /> },
  { value: "justify", component: <FormatAlignJustifyIcon /> },
];

const data2 = [
  { value: "bold", component: <FormatBoldIcon /> },
  { value: "italic", component: <FormatItalicIcon /> },
  { value: "underlined", component: <FormatUnderlinedIcon /> },
  {
    value: "color",
    component: (
      <>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </>
    ),
    disabled: true,
  },
];

const data3 = [
  { value: "web", component: "Web" },
  { value: "android", component: "Android" },
  { value: "ios", component: "iOS" },
];

export const Default = () => {
  return <ToggleButtonGroup onChange={onChangeAction} />;
};

export const Icon = () => {
  const [value, setValue] = useState([]);
  console.log("value", value);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(value) => {
        onChangeAction(value);
        setValue(value);
      }}
      data={[data2[0]]}
    />
  );
};

export const Text = () => {
  const [value, setValue] = useState([]);

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      data={data3}
    />
  );
};

export const EnforceValueSet = () => {
  const [value, setValue] = useState([]);

  return (
    <Stack direction={"row"} spacing={2}>
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data1}
        enforceValueSet
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data3}
        exclusive
        enforceValueSet
      />
    </Stack>
  );
};

export const Menu = () => {
  const [value, setValue] = useState([]);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
    />
  );
};

export const Disabled = () => {
  const [value, setValue] = useState([]);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      data={data2}
    />
  );
};

export const Orientation = () => {
  const [value, setValue] = useState([]);

  return (
    <Stack direction="row" spacing={3}>
      <ToggleButtonGroup
        orientation={"horizontal"}
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data1}
      />
      <ToggleButtonGroup
        orientation={"vertical"}
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data1}
      />
    </Stack>
  );
};

export const MultipleSelection = () => {
  const [value, setValue] = useState([]);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      data={data2}
    />
  );
};

export const ExclusiveSelection = () => {
  const [value, setValue] = useState(null);
  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      data={data2}
      exclusive={true}
    />
  );
};

export const Separate = () => {
  const [value, setValue] = useState([]);
  return (
    <ToggleButtonGroups>
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data1}
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={data2}
      />
    </ToggleButtonGroups>
  );
};

export const Ripple = () => {
  const [value, setValue] = useState(null);
  return (
    <Stack direction="row" spacing={1}>
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        disableRipple
        data={[data2[0]]}
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        data={[data2[0]]}
      />
    </Stack>
  );
};
