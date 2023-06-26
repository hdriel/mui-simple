import React, { useState } from "react";
import {
  Send as SendIcon,
  Inbox as InboxIcon,
  Drafts as DraftsIcon,
  Image as ImageIcon,
  Comment as CommentIcon,
  Work as WorkIcon,
  BeachAccess as BeachAccessIcon,
} from "@mui/icons-material";

import Drawer from "../Drawer";
import Button from "../../Button/Button";
import List from "../../List/List";
import Divider from "../../Divider/Divider";

export default {
  title: "Navigation/Drawer",
  component: Drawer,
};

export const Default = (props) => {
  return <Drawer {...props} />;
};

const list = () => (
  <div>
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
  </div>
);

export const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left", "right", "top", "bottom"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            openDirection={anchor}
            variant="temporary"
            open={state[anchor]}
            toggleDrawer={toggleDrawer(anchor, false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Variant = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [state, setState] = React.useState({
    permanent: false,
    "mini-persistent": false,
    persistent: false,
    temporary: false,
  });

  const toggleDrawer = (variant, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(open);
    setState({ ...state, [variant]: open });
  };

  return (
    <div>
      {["permanent", "mini-persistent", "persistent", "temporary"].map(
        (variant) => (
          <React.Fragment key={variant}>
            <Button onClick={toggleDrawer(variant, true)}>{variant}</Button>
            <Drawer
              openDirection={"right"}
              variant={variant}
              open={menuOpen}
              toggleDrawer={toggleDrawer(variant, false)}
            >
              {list()}
            </Drawer>
          </React.Fragment>
        )
      )}
    </div>
  );
};
