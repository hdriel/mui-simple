import React, { useRef, useState } from "react";
import { action } from "@storybook/addon-actions";
import {
  ContentCut as ContentCutIcon,
  ContentCopy as ContentCopyIcon,
  ContentPaste as ContentPasteIcon,
  Cloud as CloudIcon,
} from "@mui/icons-material";

import Menu from "../Menu";
import Button from "../../Button/Button";

export default {
  title: "Navigation/Menu",
  component: Menu,
};

const actions = {
  onClose: action("onClose"),
  onClick: action("onClick"),
};

export const Default = () => {
  return <Menu {...actions} />;
};

export const ButtonChildren = () => {
  const [open, setOpen] = useState(false);

  const onClickHandler = () => setOpen(true);

  return (
    <Menu
      {...actions}
      onClose={(event) => {
        actions.onClose(event);
        setOpen(false);
      }}
      options={[
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
          onClick: () => {
            action("onClickOption");
            return false;
          },
        },
      ]}
      open={open}
    >
      <Button onClick={onClickHandler}>Dashboard</Button>
    </Menu>
  );
};

export const IconMenu = () => {
  console.warn(
    "Failed prop type: MUI: The `anchorEl` prop provided to the component is invalid."
  );

  return (
    <Menu
      {...actions}
      width={320}
      open
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
    />
  );
};
