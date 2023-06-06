import React, { useState } from "react";
import InputText from "../InputText";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/Inputs/InputText",
  component: InputText,
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
  return <InputText />;
};

export const Limit = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={3}>
      <InputText
        label="Time"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputText
        label="Time"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        limit={50}
      />
      <InputText
        label="Time"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        limitFrom={5}
        limit={50}
      />
    </Stack>
  );
};
