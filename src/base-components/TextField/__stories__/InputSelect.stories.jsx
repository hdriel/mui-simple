import React, { useState } from "react";
import InputSelect from "../InputSelect";

export default {
  title: "Inputs/Inputs/InputSelect",
  component: InputSelect,
};

export const Default = () => {
  return <InputSelect />;
};

export const Color = () => {
  const [value, setValue] = useState();

  return (
    <InputSelect
      label="Select"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
