import React, { useState } from "react";
import InputSearch from "../InputSearch";

export default {
  title: "Inputs/Inputs/InputSearch",
  component: InputSearch,
};

export const Default = () => {
  return <InputSearch />;
};

export const Color = () => {
  const [value, setValue] = useState("Hello World");

  return (
    <InputSearch
      label="Search"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
