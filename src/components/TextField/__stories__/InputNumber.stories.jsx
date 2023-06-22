import React, { useState } from "react";
import InputNumber from "../InputNumber";
import { Stack } from "@mui/material";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
export default {
  title: "Inputs/Inputs/InputNumber",
  component: InputNumber,
  decorators: [
    (Story) => (
      <div
        style={{ width: "450px", padding: "1em", border: "1px dashed black" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <InputNumber />;
};

export const Number = () => {
  const [value, setValue] = useState(0);

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputNumber
          key={variant}
          label="Number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
        />
      ))}
    </Stack>
  );
};

export const RangeNumber = () => {
  const [value, setValue] = useState(0);

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputNumber
          key={variant}
          label="Number Range"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          min={10}
          max={20}
          step={0.25}
          thousandSeparator
        />
      ))}
    </Stack>
  );
};

export const CmpNumber = () => {
  const [value, setValue] = useState();

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputNumber
          key={variant}
          label="Number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          helperText="please enter a valid email."
          startCmpExternal={<HourglassEmptyIcon />}
          endCmpExternal={<HourglassFullIcon />}
        />
      ))}
      {["filled", "standard", "outlined"].map((variant) => (
        <InputNumber
          key={variant}
          label="Number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          helperText="please enter a valid email."
          startCmp={<HourglassEmptyIcon />}
          endCmp={<HourglassFullIcon />}
        />
      ))}
    </Stack>
  );
};
