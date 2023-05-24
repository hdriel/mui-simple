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

import CheckList from "../CheckList";

export default {
  title: "Data-Display/CheckList",
  component: CheckList,
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
  return <CheckList />;
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

  return <CheckList items={items} />;
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

  return <CheckList title="Nested List Items" items={items} />;
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

  return <CheckList items={items} />;
};
