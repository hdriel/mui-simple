import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import Rating from "../Rating";

export default {
  title: "base-components/Rating",
  component: Rating,
};

const actions = {
  onChange: action("onChange"),
};

export const Default = () => {
  return <Rating {...actions} />;
};

export const Dynamic = () => {
  const [value, setValue] = useState(2);
  return (
    <Rating
      {...actions}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        action("onChange")(newValue);
      }}
    />
  );
};

export const Empty = () => {
  return <Rating {...actions} value={0} />;
};

export const HideLabel = () => {
  return <Rating {...actions} value={3.5} showLabel={false} />;
};

export const Full = () => {
  return <Rating {...actions} value={5} />;
};

export const Disabled = () => {
  return <Rating disabled value={4.5} />;
};
