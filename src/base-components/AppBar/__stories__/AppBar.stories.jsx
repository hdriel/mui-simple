import React, { useState } from "react";
import { Stack } from "@mui/material";
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

export const MenuToolbar = () => {
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
      <AppBar title="My Mui Component" />
      <AppBar
        menu={true}
        title={
          <>
            <Avatar image={"/1.jpg"} />
            <Typography wrap={false}>Hello world</Typography>
          </>
        }
      />
      <AppBar />
    </Stack>
  );
};

export const Actions = () => {
  return (
    <Stack spacing={3}>
      <AppBar
        menu={true}
        title={
          <>
            <Avatar image={"/1.jpg"} />
            <Typography wrap={false}>Hello world</Typography>
          </>
        }
      >
        <Button>Label only</Button>
        <Button startIcon={<SendIcon />}>Start Icon</Button>
        <Button muiColor="error" endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button customColor={"#D05010"} icon={<FingerprintIcon />} />
        <Button color="inherit">Login</Button>
      </AppBar>
      <AppBar menu={true}>
        <Button>Label only</Button>
        <Button startIcon={<SendIcon />}>Start Icon</Button>
        <Button muiColor="error" endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button customColor={"#D05010"} icon={<FingerprintIcon />} />
        <Button color="inherit">Login</Button>
      </AppBar>
      <AppBar>
        <Button>Label only</Button>
        <Button startIcon={<SendIcon />}>Start Icon</Button>
        <Button muiColor="error" endIcon={<DeleteIcon />}>
          End Icon
        </Button>
        <Button customColor={"#D05010"} icon={<FingerprintIcon />} />
        <Button color="inherit">Login</Button>
      </AppBar>
    </Stack>
  );
};

export const ActionMenu = () => {
  const [open, setOpen] = useState(false);

  const options = [
    { id: "o1", label: "Profile", onClick: action("onClickOption") },
    { id: "o2", label: "My account", onClick: action("onClickOption") },
    {
      id: "o3",
      label: "Logout",
      onClick: action("onClickOption"),
    },
    {
      id: "o3",
      label: "return false",
      onClick: (event) => {
        action("onClickOption")(event);
        return false;
      },
    },
  ];

  return (
    <AppBar menu={true} title="Hello World">
      <Menu options={options} open={open} onClose={() => setOpen(false)}>
        <Avatar image={"/1.jpg"} onClick={() => setOpen(true)} />
      </Menu>
    </AppBar>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={3}>
      <ThemeProvider theme={"light"}>
        <AppBar menu title="light primary" muiColor="primary" />
      </ThemeProvider>
      <ThemeProvider theme={"dark"}>
        <AppBar menu title="dark primary" muiColor="primary" />
        <AppBar
          menu
          title="dark primary with enableColorOnDark"
          muiColor="primary"
          enableColorOnDark
        />
      </ThemeProvider>
      <AppBar menu title="#86950d" customColor={"#86950d"} />
      <AppBar menu title="default" />
      <AppBar />
    </Stack>
  );
};
