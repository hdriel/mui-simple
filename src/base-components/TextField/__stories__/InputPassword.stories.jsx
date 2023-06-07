import React, { useState } from "react";
import InputPassword from "../InputPassword";

export default {
  title: "Inputs/Inputs/InputPassword",
  component: InputPassword,
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
  return <InputPassword />;
};

export const Password = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <InputPassword
      label="Password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      hideStartActionsOnEmpty={false}
    />
  );
};
