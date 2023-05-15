import React from "react";
import { action } from "@storybook/addon-actions";
import { Stack } from "@mui/material";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";
import Button from "../../Button/Button";

import Snackbar from "../Snackbar";

export default {
  title: "Feedback/Snackbar",
  component: Snackbar,
};

const actions = {
  onClick: action("onClick"),
  onClose: action("onClose"),
  onClickAway: action("onClickAway"),
};

export const Simple = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
    actions.onClose(event, reason);
  };

  const handleClickAway = (event, reason) => {
    setOpen(false);
    actions.onClickAway(event, reason);
  };

  return (
    <Stack>
      <Button onClick={handleClick} muiColor={"secondary"}>
        Open Simple Snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onClickAway={handleClickAway}
        variant="success"
      >
        This is a success message!
      </Snackbar>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onClickAway={handleClickAway}
        variant="info"
      >
        This is a info message!
      </Snackbar>
    </Stack>
  );
};

export const Variant = () => {
  return (
    <Stack>
      <Snackbar {...actions} variant="text">
        text
      </Snackbar>
      <Snackbar {...actions} variant="outlined">
        outlined
      </Snackbar>
      <Snackbar {...actions} variant="contained">
        contained
      </Snackbar>
    </Stack>
  );
};

export const AnchorPosition = () => {
  return (
    <Stack>
      {[
        { vertical: "bottom", horizontal: "left" },
        { vertical: "bottom", horizontal: "center" },
        { vertical: "bottom", horizontal: "right" },
        { vertical: "top", horizontal: "left" },
        { vertical: "top", horizontal: "center" },
        { vertical: "top", horizontal: "right" },
      ].map(({ vertical, horizontal }) => (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open
          message={`${vertical} - ${horizontal}`}
          messageId={`${vertical} - ${horizontal}`}
        />
      ))}
    </Stack>
  );
};

export const Actions = () => {
  return (
    <Stack>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open
        message={"alert with actions"}
        messageId={"1"}
        onClose={actions.onClose}
        actions={[
          "undo",
          <Button muiColor="inherit" size="small" icon={<SendIcon />} />,
        ]}
      />
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Snackbar {...actions} size="small">
        small
      </Snackbar>
      <Snackbar {...actions} size="medium">
        medium
      </Snackbar>
      <Snackbar {...actions} size="large">
        large
      </Snackbar>
      <Snackbar {...actions}>>Default</Snackbar>
    </Stack>
  );
};
