import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import ButtonGroup from "../ButtonGroup";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

export default {
  title: "Inputs/ButtonGroup",
  component: ButtonGroup,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <ButtonGroup {...actions} />;
};

export const Variant = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" muiColor="secondary">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />} muiColor="error">
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" muiColor="secondary">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />} muiColor="error">
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" muiColor="secondary">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" color={"#0a3e99"}>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />} color={"#ca00ca"}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" color={"#0a3e99"}>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />} color={"#ca00ca"}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color={"#0a3e99"}>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const FullWidth = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" fullWidth>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const Orientation = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" orientation={"horizontal"}>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="text" orientation={"vertical"}>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const DisableRipple = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" disableRipple>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const Disable = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" disabled>
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
      <ButtonGroup variant="text">
        <Button {...actions} startIcon={<SendIcon />}>
          Start Icon
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />} disabled>
          End Icon
        </Button>
        <Button {...actions}>Test</Button>
      </ButtonGroup>
    </Stack>
  );
};

export const Sizes = () => {
  return (
    <Stack spacing={3}>
      <ButtonGroup variant="text" size="small">
        <Button {...actions} startIcon={<SendIcon />}>
          small
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          small
        </Button>
        <Button {...actions}>small</Button>
      </ButtonGroup>
      <ButtonGroup variant="contained" size="medium">
        <Button {...actions} startIcon={<SendIcon />}>
          medium
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          medium
        </Button>
        <Button {...actions}>medium</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" size="large">
        <Button {...actions} startIcon={<SendIcon />}>
          large
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          large
        </Button>
        <Button {...actions}>large</Button>
      </ButtonGroup>
      <ButtonGroup variant="outlined">
        <Button {...actions} startIcon={<SendIcon />}>
          default
        </Button>
        <Button {...actions} endIcon={<DeleteIcon />}>
          default
        </Button>
        <Button {...actions}>default</Button>
      </ButtonGroup>
    </Stack>
  );
};
