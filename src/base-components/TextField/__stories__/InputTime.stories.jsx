import React, { useState } from "react";
import InputTime from "../InputTime";

export default {
  title: "Inputs/Inputs/InputTime",
  component: InputTime,
};

export const Default = () => {
  return <InputTime />;
};

export const Color = () => {
  const [value, setValue] = useState(new Date());

  return (
    <InputTime
      label="Time"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
