import React, { useState } from "react";
import InputDateTime from "../InputDateTime";

export default {
  title: "Inputs/Inputs/InputDateTime",
  component: InputDateTime,
};

export const Default = () => {
  return <InputDateTime />;
};

export const Color = () => {
  const [value, setValue] = useState(new Date());

  return (
    <InputDateTime
      label="Date time"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
