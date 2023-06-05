import React, { useState } from "react";
import InputColor from "../InputColor";

export default {
  title: "Inputs/Inputs/InputColor",
  component: InputColor,
};

export const Default = () => {
  return <InputColor />;
};

export const Color = () => {
  const [value, setValue] = useState("#000000");

  return (
    <InputColor
      label="Color"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
