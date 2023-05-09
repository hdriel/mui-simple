import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";

export default {
  title: "base-components/Button",
  component: Button,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Button {...actions} />;
};

export const StartIcon = () => {
  return (
    <Button {...actions} startIcon={<SendIcon />}>
      Start Icon
    </Button>
  );
};

export const EndIcon = () => {
  return (
    <Button {...actions} endIcon={<DeleteIcon />}>
      End Icon
    </Button>
  );
};

export const Outlined = () => {
  return (
    <Button {...actions} variant="outlined">
      {" "}
      outlined{" "}
    </Button>
  );
};

export const Label = () => {
  return <Button {...actions}>Label only</Button>;
};

export const ExtraProps = () => {
  return (
    <Button {...actions} disableRipple color="secondary">
      Extra Props
    </Button>
  );
};
