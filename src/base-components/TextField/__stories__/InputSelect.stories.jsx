import React, { useState } from "react";
import InputSelect from "../InputSelect";

export default {
  title: "Inputs/Inputs/InputSelect",
  component: InputSelect,
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
  return <InputSelect />;
};

export const Select = () => {
  const [value, setValue] = useState();

  return (
    <InputSelect
      label="Select"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
