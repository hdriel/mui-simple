import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";

import AppBar from "../AppBar";
import Button from "../../Button/Button";

export default {
  title: "Surfaces/AppBar",
  component: AppBar,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "500px",
          width: "800px",
          backgroundColor: "#e2e2e2",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <AppBar />;
};

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = (
    <Button
      muiColor="inherit"
      icon={menuOpen ? <CloseIcon /> : <MenuIcon />}
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  return (
    <Stack spacing={3}>
      <AppBar menu={menu} />
      <AppBar menu={true} />
      <AppBar />
    </Stack>
  );
};

export const Title = () => {
  return (
    <Stack spacing={3}>
      <AppBar title="My Mui Component" />;
    </Stack>
  );
};
