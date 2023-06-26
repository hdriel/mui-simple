import React, { useState } from "react";
import InputEmail from "../InputEmail";
import { Stack } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

export default {
  title: "Inputs/Inputs/InputEmail",
  component: InputEmail,
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
  return <InputEmail />;
};

export const Email = () => {
  const [value, setValue] = useState("test@test.com");

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputEmail
          key={variant}
          label="Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          helperText="please enter a valid email."
        />
      ))}
    </Stack>
  );
};

export const CmpEmail = () => {
  const [value, setValue] = useState();

  return (
    <Stack spacing={4}>
      {["filled", "standard", "outlined"].map((variant) => (
        <InputEmail
          key={variant}
          label="Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          helperText="please enter a valid email."
          startCmpExternal={<AlternateEmailIcon />}
          endCmpExternal={<MarkEmailReadIcon />}
        />
      ))}
      {["filled", "standard", "outlined"].map((variant) => (
        <InputEmail
          key={variant}
          label="Email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant={variant}
          helperText="please enter a valid email."
          startCmp={<AlternateEmailIcon />}
          endCmp={<MarkEmailReadIcon />}
        />
      ))}
    </Stack>
  );
};
