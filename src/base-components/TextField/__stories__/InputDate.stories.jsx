import React, { useState } from "react";
import InputDate from "../InputDate";

export default {
  title: "Inputs/Inputs/InputDate",
  component: InputDate,
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
  return <InputDate />;
};

export const Date = () => {
  const [value, setValue] = useState(new Date());

  return (
    <InputDate
      label="Date"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
