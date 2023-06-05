import React, { useState } from "react";
import InputDate from "../InputDate";

export default {
  title: "Inputs/Inputs/InputDate",
  component: InputDate,
};

export const Default = () => {
  return <InputDate />;
};

export const Color = () => {
  const [value, setValue] = useState(new Date());

  return (
    <InputDate
      label="Date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
