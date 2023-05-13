import React from "react";
import { action } from "@storybook/addon-actions";
import { Send as SendIcon } from "@mui/icons-material";

import Badge from "../Badge";

export default {
  title: "Data-Display/Badge",
  component: Badge,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Badge {...actions} />;
};
