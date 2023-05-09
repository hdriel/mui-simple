import React, { useState } from "react";
import PasswordInput from "../PasswordInput";

export default {
  title: "base-components/PasswordInput",
  component: PasswordInput,
};

export const Default = () => {
  return <PasswordInput />;
};

export const Password = () => {
  const [value, setValue] = useState("Hello world");

  return (
    <PasswordInput
      label="Password"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
