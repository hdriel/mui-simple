import React, { useState } from "react";
import InputSelect from "../InputSelect";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/Inputs/InputSelect",
  component: InputSelect,
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
  return <InputSelect />;
};

export const Select = () => {
  const options = ["javascript", "python", "C#", "C++"];
  const [value, setValue] = useState();

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputSelect
          key={variant}
          label="Color"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          options={options}
        />
      ))}
    </Stack>
  );
};
