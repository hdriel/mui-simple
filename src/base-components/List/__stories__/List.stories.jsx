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
  Comment as CommentIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import List from "../List";
import Button from "../../Button/Button";

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
          backgroundColor: "#E7EBF0",
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
  ];

  return <List items={items} />;
};

export const AlignAvatarListItems = () => {
  const items = [
    {
      title: "Brunch this weekend?",
      subtitle: "Ali Connors — I'll be in your neighborhood doing errands this",
      avatar: { username: "Ali Connors", image: "/1.jpg" },
      actions: [
        <Button icon={<PhoneIcon />} />,
        <Button icon={<CommentIcon />} />,
      ],
      divider: { variant: "inset" },
    },
    {
      title: "Summer BBQ",
      subtitle:
        "to Scott, Alex, Jennifer — Wish I could come, but I'm out of town this",
      avatar: { image: "/2.jpg" },
      actions: [<Button icon={<SendIcon />} />],
      divider: true,
    },
    {
      title: "Oui Oui",
      subtitle:
        "Sandra Adams — Do you have Paris recommendations? Have you ever seen something like this?",
      avatar: { username: "Sandra Adams", image: "/3.jpg" },
      actions: [<Button icon={<SendIcon />} />],
      divider: {},
    },
  ];

  return (
    <List
      buttonItems={false}
      alignItems="flex-start"
      items={items}
      disablePaddingItems={false}
    />
  );
};
