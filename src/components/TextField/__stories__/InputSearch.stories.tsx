import React, { useState } from "react";
import InputSearch from "../InputSearch";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/Inputs/InputSearch",
  component: InputSearch,
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
  return <InputSearch />;
};

export const Search = () => {
  const [value, setValue] = useState("Hello World");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputSearch
          key={variant}
          label="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
        />
      ))}
    </Stack>
  );
};
