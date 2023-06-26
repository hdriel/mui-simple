import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import CircleIcon from "@mui/icons-material/Circle";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";

import RadioButtonsGroup from "../RadioButtonsGroup";

export default {
  title: "Inputs/RadioButtonsGroup",
  parameters: {
    controls: { exclude: /^(onChange)$/g },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "0.5em",
          height: "300px",
          width: "300px",
          border: "1px solid black",
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: RadioButtonsGroup,
};

const onChangeAction = action("onChange");
const data = [
  { label: "Female", value: "0" },
  { label: "Male", value: "1" },
  { label: "Other", value: "2" },
  { label: "Other", value: "3", disabled: true },
];

export const Default = () => <RadioButtonsGroup />;

export const IgnoreLabelColor = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      ignoreLabelColor
      data={data}
      name="gender"
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};

export const CustomIcons = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      ignoreLabelColor
      data={data}
      name="gender"
      icon={<CircleTwoToneIcon />}
      checkedIcon={<CircleIcon />}
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};

export const GroupInRow = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      direction="row"
      data={data}
      name="gender"
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};

export const GroupInColumn = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      direction="column"
      data={data}
      name="gender"
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};

export const Colored = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      data={data}
      name="gender"
      color={"#105010"}
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};

export const Themed = () => {
  const [value, setValue] = useState(null);

  return (
    <RadioButtonsGroup
      data={data}
      name="gender"
      color={"secondary"}
      value={value}
      onChange={(event) => {
        onChangeAction(event.target.value);
        setValue(event.target.value);
      }}
      defaultValue={data[1]?.value}
      size={"medium"}
    />
  );
};
