import React, { useState } from "react";
import InputNumber from "../InputNumber";

export default {
  title: "Inputs/Inputs/InputNumber",
  component: InputNumber,
  decorators: [
    (Story) => (
      <div
        style={{ width: "450px", padding: "1em", border: "1px dashed black" }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <InputNumber />;
};

export const Number = () => {
  const [value, setValue] = useState(0);

  return (
    <InputNumber
      label="Number"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
