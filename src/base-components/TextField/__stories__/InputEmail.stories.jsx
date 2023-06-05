import React, { useState } from "react";
import InputEmail from "../InputEmail";

export default {
  title: "Inputs/Inputs/InputEmail",
  component: InputEmail,
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
