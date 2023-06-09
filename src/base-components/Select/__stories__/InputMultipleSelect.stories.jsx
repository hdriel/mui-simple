import React, { useState } from "react";
import { Stack } from "@mui/material";

import InputMultipleSelect from "../InputMultipleSelect";
import Button from "../../Button/Button";

export default {
  title: "Inputs/Inputs/InputMultipleSelect",
  component: InputMultipleSelect,
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
  return <InputMultipleSelect />;
};

export const MultipleSelect = () => {
  const options = ["javascript", "python", "C#", "C++"];
  const [value, setValue] = useState([]);

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant, index) => (
        <InputMultipleSelect
          key={variant}
          label="Favorite language"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          options={options}
          nullable={index === 1 ? "None Selection" : !!index}
        />
      ))}
    </Stack>
  );
};
