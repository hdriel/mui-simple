import React, { useEffect, useRef, useState } from "react";
import { Stack, Box, Container } from "@mui/material";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Delete as DeleteIcon,
  Fingerprint as FingerprintIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Image as ImageIcon,
  Comment as CommentIcon,
  Work as WorkIcon,
  BeachAccess as BeachAccessIcon,
} from "@mui/icons-material";

import AppBar from "../AppBar";
import Button from "../../Button/Button";
import Avatar from "../../Avatar/Avatar";
import Typography from "../../Typography/Typography";
import Menu from "../../Menu/Menu";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "../../../themes";
import List from "../../List/List";
import Divider from "../../Divider/Divider";
import ToggleButtonGroup from "../../ToggleButtonGroup/ToggleButtonGroup";

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

const list = ({} = {}) => (
  <>
    <List
      items={[
        {
          startIcon: <InboxIcon />,
          title: "Inbox",
        },
        {
          startIcon: <DraftsIcon />,
          title: "Drafts",
        },
        {
          divider: true,
        },
        { title: "Trash" },
        "Spam",
      ]}
    />
    <Divider variant="fullWidth" />
    <List
      items={[
        {
          title: "Photos",
          subtitle: "Jan 9, 2014",
          avatar: { icon: <ImageIcon /> },
          actions: [<Button icon={<CommentIcon />} />],
        },
        {
          title: "Work",
          subtitle: "Jan 7, 2014",
          avatar: { icon: <WorkIcon /> },
          actions: [<Button icon={<SendIcon />} />],
        },
        {
          title: "Vacation",
          subtitle: "July 20, 2014",
          avatar: { icon: <BeachAccessIcon /> },
          actions: [<Button icon={<SendIcon />} />],
        },
      ]}
    />
  </>
);

export const Default = (props) => {
  return <AppBar {...props} />;
};

export const OpenDirection = () => {
  const [anchor, setAnchor] = useState("left");
  const data = [
    { value: "left", component: "LEFT" },
    { value: "right", component: "RIGHT" },
    { value: "bottom", component: "BOTTOM" },
    { value: "top", component: "TOP" },
  ];

  return (
    <Stack spacing={3}>
      <AppBar
        {...(anchor && {
          menu: anchor ? true : undefined,
          drawerProps: { openDirection: anchor },
        })}
        position="fixed"
        title={`${anchor} direction`}
        actions={
          <ToggleButtonGroup
            value={anchor}
            exclusive
            onChange={(value) => setAnchor(value)}
            data={data}
          />
        }
      >
        {list()}
      </AppBar>
    </Stack>
  );
};

export const Variant = () => {
  const data = [
    { value: "permanent", component: "permanent" },
    { value: "mini-persistent", component: "mini-persistent" },
    { value: "persistent", component: "persistent" },
    { value: "temporary", component: "temporary" },
  ];
  const [variant, setVariant] = useState(data[0].value);

  return (
    <Stack spacing={3}>
      <AppBar
        {...(variant && {
          menu: variant ? true : undefined,
          drawerProps: { openDirection: "left", variant },
        })}
        position="fixed"
        title={`${variant} direction`}
        actions={
          <ToggleButtonGroup
            value={variant}
            exclusive
            onChange={(value) => setVariant(value)}
            data={data}
          />
        }
      >
        {list()}
      </AppBar>
    </Stack>
  );
};
