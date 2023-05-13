import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Checkbox from "../Checkbox";

export default {
  title: "Inputs/Checkbox",
  parameters: {
    controls: {
      exclude: /^(onChange)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1em",
          height: "98vh",
          width: "98vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Checkbox,
};

export const Default = () => <Checkbox />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        padding: "1em",
        width: "200px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <Checkbox {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: "text" }, defaultValue: "check" },
  size: {
    control: "inline-radio",
    options: ["small", "medium"],
    defaultValue: "small",
  },
  color: {
    control: { type: "color" },
    defaultValue: "red",
  },
  checked: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  defaultChecked: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  required: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  disabled: {
    control: { type: "boolean" },
    defaultValue: false,
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        padding: "1em",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];

export const Labeled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="include condition"
    />
  );
};
export const NoLabeled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
    />
  );
};
export const Checked = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="test"
    />
  );
};
export const Disabled = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="disabled checkbox"
      disabled
    />
  );
};

export const Required = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      required
      label="required checkbox test"
      helperText="is required checkbox!"
    />
  );
};

export const Colored = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="some colored checkbox"
      color={"#10dc50"}
    />
  );
};

export const ThemeColor = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      muiColor="secondary"
      label="some colored checkbox"
    />
  );
};

export const LabelPlacement = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="top"
        label="top label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="start"
        label="start label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="bottom"
        label="bottom label checkbox"
      />

      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="end"
        label="end label checkbox"
      />
    </div>
  );
};

export const Sizes = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="medium checkbox"
        size={"medium"}
      />
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="small checkbox"
        size={"small"}
      />
      <Checkbox
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="custom size checkbox"
        fontSize={26}
      />
    </>
  );
};
