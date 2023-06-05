import React, { useState } from "react";
import InputEmail from "../InputEmail";

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
    <InputEmail
      label="Email"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
