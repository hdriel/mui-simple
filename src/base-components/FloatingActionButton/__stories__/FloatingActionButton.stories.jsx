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

export const Themed = () => {
  return (
    <Stack spacing={4}>
      <Fab {...actions} muiColor="primary">
        <FavoriteIcon />
      </Fab>
      <Fab {...actions} muiColor="secondary">
        <EditIcon />
      </Fab>
      <Fab {...actions}>
        <NavigationIcon />
      </Fab>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Fab {...actions} customColor={"#50bdd0"}>
      #D050CC
    </Fab>
  );
};

export const Link = () => {
  return (
    <Fab {...actions} customColor={"#924700"} link="https://chat.openai.com/">
      <SendIcon />
    </Fab>
  );
};

export const DisableRipple = () => {
  return (
    <Stack spacing={4}>
      <Fab {...actions} muiColor="info" disableRipple>
        <AddIcon />
      </Fab>
      <Fab {...actions} muiColor="info" disableRipple={false}>
        <AddIcon />
      </Fab>
    </Stack>
  );
};

export const Disable = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      <Fab {...actions} muiColor="warn" disabled>
        <AddIcon />
      </Fab>
      <Fab {...actions} muiColor="warn">
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
