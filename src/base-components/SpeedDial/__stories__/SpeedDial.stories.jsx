import React, { useState } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

import SpeedDial from "../SpeedDial";
import Button from "../../Button/Button";

export default {
  title: "Navigation/SpeedDial",
  component: SpeedDial,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          height: "500px",
          position: "relative",
          border: "1px solid black",
          borderRadius: "8px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <SpeedDial />;
};

export const Basic = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <SpeedDial actions={actions} muiColor="primary" bottom={16} right={16} />
  );
};

export const Direction = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
      <SpeedDial
        actions={actions}
        direction="left"
        bottom={16}
        right={16}
        open
      />
      <SpeedDial actions={actions} direction="up" bottom={80} right={16} open />
      <SpeedDial actions={actions} direction="down" top={16} left={16} open />
      <SpeedDial actions={actions} direction="right" top={16} left={80} open />
    </>
  );
};

export const Hidden = () => {
  const [hidden, setHidden] = useState(false);
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
      <Button onClick={() => setHidden(!hidden)}>
        {hidden ? "Show" : "Hidden"}
      </Button>
      <SpeedDial
        hidden={hidden}
        actions={actions}
        direction="left"
        bottom={16}
        right={16}
      />
    </>
  );
};

export const ThemedAndColored = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
      <SpeedDial
        actions={actions}
        direction="left"
        bottom={15}
        right={16}
        muiColor="primary"
      />
      <SpeedDial
        actions={actions}
        direction="left"
        bottom={80}
        right={16}
        muiColor="secondary"
      />
      <SpeedDial
        actions={actions}
        direction="left"
        bottom={150}
        right={16}
        muiColor="error"
      />
      <SpeedDial
        actions={actions}
        direction="left"
        bottom={220}
        right={16}
        customColor={"#058460"}
      />
    </>
  );
};

export const CloseIcon = () => {
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
      <SpeedDial
        icon={<SaveIcon />}
        openIcon={<EditIcon />}
        actions={actions}
        direction="left"
        bottom={16}
        right={16}
      />
    </>
  );
};

export const Backdrop = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <>
      <SpeedDial
        showOnBackdrop
        icon={<SaveIcon />}
        openIcon={<EditIcon />}
        actions={actions}
        direction="up"
        bottom={16}
        right={16}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
      />
    </>
  );
};
