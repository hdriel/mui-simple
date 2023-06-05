import React, { useState } from "react";
import InputNumber from "../InputNumber";

export default {
  title: "Inputs/Inputs/InputNumber",
  component: InputNumber,
};

export const Default = () => {
  return <InputNumber />;
};

export const Color = () => {
  const [value, setValue] = useState(0);

  return (
    <InputNumber
      label="Number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
