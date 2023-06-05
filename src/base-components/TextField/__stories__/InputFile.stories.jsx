import React, { useState } from "react";
import InputFile from "../InputFile";

export default {
  title: "Inputs/Inputs/InputFile",
  component: InputFile,
};

export const Default = () => {
  return <InputFile />;
};

export const Color = () => {
  const [value, setValue] = useState(undefined);

  return (
    <InputFile
      label="File"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
