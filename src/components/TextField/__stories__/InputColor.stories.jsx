import React, { useState } from "react";
import InputColor from "../InputColor";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/Inputs/InputColor",
  component: InputColor,
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
  return <InputColor />;
};

export const Color = () => {
  const [value, setValue] = useState("#000000");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputColor
          key={variant}
          label="Color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
        />
      ))}
    </Stack>
  );
};