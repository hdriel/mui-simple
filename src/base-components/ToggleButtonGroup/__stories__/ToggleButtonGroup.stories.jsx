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
  const [value1, setValue1] = useState([]);
  const [value2, setValue2] = useState([]);

  return (
    <Stack direction={"row"} spacing={2}>
      <ToggleButtonGroup
        value={value1}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue1(newValue);
        }}
        data={data1}
        enforceValueSet
      />
      <ToggleButtonGroup
        value={value2}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue2(newValue);
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
      data={data2}
    />
  );
};

export const Colored = () => {
  const [value, setValue] = useState([data3[0].value]);

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      color={"#10da00"}
      data={data3}
    />
  );
};

export const Themed = () => {
  const [value, setValue] = useState([data3[0].value]);

  return (
    <ToggleButtonGroup
      value={value}
      onChange={(newValue) => {
        onChangeAction(newValue);
        setValue(newValue);
      }}
      muiColor="secondary"
      data={data3}
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

export const Size = () => {
  const [value, setValue] = useState(null);

  return (
    <Stack direction="column" spacing={1}>
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        disableRipple
        size={"small"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        disableRipple
        size={"medium"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        disableRipple
        size={"large"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue(newValue);
        }}
        disableRipple
        data={data1}
      />
    </Stack>
  );
};

export const MultiValue = () => {
  const [value11, setValue11] = useState(null);
  const [value12, setValue12] = useState(null);
  const [value21, setValue21] = useState([]);
  const [value22, setValue22] = useState([]);

  return (
    <Stack direction="column" spacing={1}>
      <ToggleButtonGroup
        value={value11}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue11(newValue);
        }}
        size={"small"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value12}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue12(newValue);
        }}
        exclusive
        size={"small"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value21}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue21(newValue);
        }}
        size={"small"}
        data={data1}
      />
      <ToggleButtonGroup
        value={value22}
        onChange={(newValue) => {
          onChangeAction(newValue);
          setValue22(newValue);
        }}
        exclusive
        size={"small"}
        data={data1}
      />
    </Stack>
  );
};
