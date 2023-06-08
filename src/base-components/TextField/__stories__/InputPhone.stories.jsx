import React, { useState } from "react";
import InputPhone from "../InputPhone";

export default {
  title: "Inputs/Inputs/InputPhone",
  component: InputPhone,
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
  return <InputPhone />;
};

export const Phone = () => {
  const [value, setValue] = useState("");

  console.log("Phone value", value);
  return (
    <InputPhone
      label="Phone"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
