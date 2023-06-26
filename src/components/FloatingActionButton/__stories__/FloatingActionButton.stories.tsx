import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Navigation as NavigationIcon,
  Edit as EditIcon,
  Add as AddIcon,
  Send as SendIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import Fab from "../FloatingActionButton";

export default {
  title: "Inputs/FloatingActionButton (Fab)",
  component: Fab,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Fab {...actions} />;
};

export const Variant = () => {
  return (
    <Stack spacing={4}>
      <Fab {...actions} variant="circular">
        <FavoriteIcon />
      </Fab>
      <Fab {...actions} variant="round">
        <EditIcon />
      </Fab>
      <Fab {...actions} variant="extended">
        <NavigationIcon />
        Navigate
      </Fab>
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={4}>
      {[
        undefined,
        "primary",
        "secondary",
        "info",
        "success",
        "error",
        "#df01fd",
      ].map((color, index) => (
        <Fab key={`${index}-${color}`} {...actions} color={color}>
          <FavoriteIcon />
        </Fab>
      ))}
    </Stack>
  );
};

export const Link = () => {
  return (
    <Fab {...actions} color={"#924700"} link="https://chat.openai.com/">
      <SendIcon />
    </Fab>
  );
};

export const DisableRipple = () => {
  return (
    <Stack spacing={4}>
      <Fab {...actions} color="info" disableRipple>
        <AddIcon />
      </Fab>
      <Fab {...actions} color="info" disableRipple={false}>
        <AddIcon />
      </Fab>
    </Stack>
  );
};

export const Disable = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Fab {...actions} color="warn" disabled>
        <AddIcon />
      </Fab>
      <Fab {...actions} color="warn">
        <AddIcon />
      </Fab>
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={4}>
      <Fab {...actions} size="small">
        SM
      </Fab>
      <Fab {...actions} size="medium">
        MD
      </Fab>
      <Fab {...actions} size="large">
        LG
      </Fab>
      <Fab {...actions}>Def</Fab>
    </Stack>
  );
};
