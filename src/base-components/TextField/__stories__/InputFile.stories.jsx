import React, { useState } from "react";
import InputFile from "../InputFile";

export default {
  title: "Inputs/Inputs/InputFile",
  component: InputFile,
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
  return <InputFile />;
};

export const File = () => {
  const [value, setValue] = useState(undefined);

  return (
    <InputFile
      label="File"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
