import React, { useState } from "react";
import InputPhone from "../InputPhone";

export default {
  title: "Inputs/Inputs/InputPhone",
  component: InputPhone,
};

export const Default = () => {
  return <InputPhone />;
};

export const Phone = () => {
  const [value, setValue] = useState("050-000-0000");

  return (
    <InputPhone
      label="Phone"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
