import React from "react";
import Tooltip from "../Tooltip";
import { Button as MuiButton } from "@mui/material";
import { Send as SendIcon } from "@mui/icons-material";
import Button from "../../Button/Button";
import { action } from "@storybook/addon-actions";

export default {
  title: "Data-Display/Tooltip",
  component: Tooltip,
};

export const WithoutChildren = () => {
  return <Tooltip title="Hi Afek">Hello World</Tooltip>;
};

export const WithoutTitle = () => {
  return (
    <Tooltip>
      <Button onClick={action("onClick")} startIcon={<SendIcon />}>
        Start Icon
      </Button>
    </Tooltip>
  );
};

export const WithChildren = () => {
  return (
    <Tooltip title="Hi Afek">
      <Button onClick={action("onClick")} startIcon={<SendIcon />}>
        Start Icon
      </Button>
    </Tooltip>
  );
};

export const WithMuiChildren = () => {
  return (
    <Tooltip title="mui tooltip">
      <MuiButton>Mui Button</MuiButton>
    </Tooltip>
  );
};

export const Placement = () => {
  return (
    <Tooltip title="placement tooltip" placement="right">
      <MuiButton>Mui Button</MuiButton>
    </Tooltip>
  );
};

export const ByClick = () => {
  const [open, setOpen] = React.useState(false);
  const handleTooltipClose = () => setOpen(false);
  const handleTooltipOpen = () => setOpen((v) => !v);

  return (
    <Tooltip
      onClose={handleTooltipClose}
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      PopperProps={{ disablePortal: true }}
      title="placement tooltip"
      placement="right"
    >
      <MuiButton onClick={handleTooltipOpen}>Mui Button</MuiButton>
    </Tooltip>
  );
};
