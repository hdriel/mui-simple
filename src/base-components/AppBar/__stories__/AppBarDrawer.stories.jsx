import React, { useEffect, useRef, useState } from "react";
import { Stack, Box, Container } from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  Fingerprint as FingerprintIcon,
} from "@mui/icons-material";

import AppBar from "../AppBar";
import Button from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography";
import Menu from "../../Menu/Menu";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "../../../themes";

export default {
  title: "Surfaces/AppBarDrawer",
  component: AppBar,
  decorators: [
    (Story) => (
      <div
        id="story"
        style={{
          height: "800px",
          backgroundColor: "#f5f2f2",
          overflow: "auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = (props) => {
  return <AppBar {...props} />;
};

export const OpenFromDirection = () => {
  return (
    <Stack spacing={3}>
      <AppBar
        menu
        position="static"
        title="left direction"
        drawerProps={{ openFromDirection: "left" }}
      />
    </Stack>
  );
};
