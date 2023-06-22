import React from "react";
import { action } from "@storybook/addon-actions";
import {
  ContentCut as ContentCutIcon,
  ContentCopy as ContentCopyIcon,
  ContentPaste as ContentPasteIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";

import ContextMenu from "../ContextMenu";

export default {
  title: "Navigation/ContextMenu",
  component: ContextMenu,
};

export const Default = () => {
  return <ContextMenu />;
};

export const ContextMenuDiv = () => {
  return (
    <ContextMenu
      options={[
        {
          id: "o1",
          label: "Cut",
          onClick: action("onClickOption"),
          icon: <ContentCutIcon />,
          shortcut: "Ctrl+X",
        },
        {
          id: "o2",
          label: "Copy",
          onClick: action("onClickOption"),
          icon: <ContentCopyIcon />,
          shortcut: "Ctrl+C",
        },
        {
          id: "o3",
          label: "Logout",
          onClick: action("onClickOption"),
          icon: <ContentPasteIcon />,
          shortcut: "Ctrl+V",
        },
        {
          divider: true,
        },
        {
          id: "o4",
          label: "Paste",
          onClick: () => {
            action("onClickOption");
            return false;
          },
          icon: <CloudIcon />,
        },
      ]}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "rgba(0,0,0,0.07)",
        }}
      >
        context menu text
      </div>
    </ContextMenu>
  );
};
