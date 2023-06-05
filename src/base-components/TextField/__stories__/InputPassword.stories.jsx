import React, { useState } from "react";
import InputPassword from "../InputPassword";

export default {
  title: "Inputs/Inputs/InputPassword",
  component: InputPassword,
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
    />
  );
};
