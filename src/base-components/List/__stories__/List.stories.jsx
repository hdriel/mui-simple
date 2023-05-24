import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Send as SendIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  StarBorder as StarBorderIcon,
  Image as ImageIcon,
  Work as WorkIcon,
  BeachAccess as BeachAccessIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import List from "../List";

export default {
  title: "Data-Display/List",
  component: List,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "400px",
          height: "500px",
          padding: "0.5em",
          border: "1px dashed black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <List />;
};

export const BasicList = () => {
  const items = [
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
  ];

  return <List items={items} />;
};

export const NestedList = () => {
  const items = [
    {
      startIcon: <SendIcon />,
      title: "Sent mail",
    },
    {
      startIcon: <DraftsIcon />,
      title: "Drafts",
    },
    {
      startIcon: <InboxIcon />,
      title: "Inbox",
      items: [
        {
          startIcon: <StarBorderIcon />,
          title: "Starred",
        },
      ],
    },
  ];

  return <List title="Nested List Items" items={items} />;
};

export const FolderList = () => {
  const items = [
    {
      title: "Photos",
      subtitle: "Jan 9, 2014",
      avatar: { icon: <ImageIcon /> },
    },
    {
      title: "Work",
      subtitle: "Jan 7, 2014",
      avatar: { icon: <WorkIcon /> },
    },
    {
      title: "Vacation",
      subtitle: "July 20, 2014",
      avatar: { icon: <BeachAccessIcon /> },
    },
  ];

  return <List items={items} />;
};

export const Themed = () => {
  return (
    <Stack>
      <List muiColor="primary">primary</List>
      <List muiColor="secondary">secondary</List>
      <List>Default</List>
    </Stack>
  );
};

export const Colored = () => {
  return <List color={"#D050CC"}>Colored</List>;
};

export const Sized = () => {
  return (
    <Stack>
      <List size="small">small</List>
      <List size="medium">medium</List>
      <List size="large">large</List>
      <List>>Default</List>
    </Stack>
  );
};
