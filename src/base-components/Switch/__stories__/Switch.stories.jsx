import React, { useState } from "react";
import { action } from "@storybook/addon-actions";

import Switch from "../Switch";

export default {
  title: "base-components/Switch",
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
          height: "300px",
          width: "300px",
          border: "1px solid black",
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Switch,
};

export const Default = () => <Switch />;

const Template = (args) => <Switch {...args} />;
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

export const Labeled = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
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
    <Switch
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
    <Switch
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="disabled checkbox"
        disabled
      />
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        disabled
      />
    </div>
  );
};

export const Required = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      required
      label="required checkbox test"
      error
      helperText="is required checkbox!"
    />
  );
};

export const Colored = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      label="some colored checkbox"
      textColor={"#1062dc"}
      color={"#dc10c8"}
      defaultChecked
      fontSize={"40px"}
    />
  );
};

export const ThemeColor = () => {
  const [checked, setChecked] = useState(true);

  return (
    <Switch
      checked={checked}
      onChange={(event) => {
        setChecked(event.target.checked);
        action(event);
      }}
      muiColor="secondary"
      label="some colored checkbox"
      defaultChecked
    />
  );
};

export const LabelPlacement = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="top"
        label="top label checkbox"
      />

      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="start"
        label="start label checkbox"
      />

      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        labelPlacement="bottom"
        label="bottom label checkbox"
      />

      <Switch
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
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="medium checkbox"
        size={"medium"}
      />
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="small checkbox"
        size={"small"}
      />
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          action(event);
        }}
        label="custom size checkbox"
        fontSize={"40px"}
        scale={2}
      />
    </>
  );
};
