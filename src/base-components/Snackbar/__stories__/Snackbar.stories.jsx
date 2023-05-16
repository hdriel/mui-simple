import React, { useEffect, useState } from "react";
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
      {[
        { vertical: "bottom", horizontal: "left", variant: undefined },
        { vertical: "bottom", horizontal: "center", variant: "success" },
        { vertical: "bottom", horizontal: "right", variant: "error" },
        { vertical: "top", horizontal: "left", variant: "warning" },
        { vertical: "top", horizontal: "center", variant: "info" },
        { vertical: "top", horizontal: "right", variant: null },
      ].map(({ vertical, horizontal, variant }) => (
        <Snackbar
          key={`${vertical} - ${horizontal}`}
          anchorOrigin={{ vertical, horizontal }}
          open
          variant={variant}
          message={`${variant ?? "default"}`}
          messageId={`${vertical} - ${horizontal}`}
        />
      ))}
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
          key={`${vertical} - ${horizontal}`}
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open
        message={"alert with actions"}
        variant="success"
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

export const Animation = () => {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const intervalId = setInterval(() => setOpen((o) => !o), 1000 * 1.5);
  //
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "300px",
        border: "1px dashed black",
      }}
      onClick={() => setOpen((o) => !o)}
    >
      <p>CLICK ANYWHERE</p>
      {[
        {
          vertical: "bottom",
          horizontal: "left",
          animation: "slide",
          // animationDuration: 1000,
        },
        {
          vertical: "bottom",
          horizontal: "center",
          animation: "grow",
          // animationDuration: 1000,
        },
        {
          vertical: "bottom",
          horizontal: "right",
          animation: "fade",
          // animationDuration: 1000,
        },
        { vertical: "top", horizontal: "left", slideDirection: "down" },
        { vertical: "top", horizontal: "center", slideDirection: "left" },
        { vertical: "top", horizontal: "right", slideDirection: "right" },
      ].map(
        ({
          vertical,
          horizontal,
          animation,
          slideDirection,
          animationDuration,
        }) => (
          <Snackbar
            key={`${vertical} - ${horizontal}`}
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            message={`${vertical} - ${horizontal}`}
            messageId={`${vertical} - ${horizontal}`}
            animation={animation}
            animationDuration={animationDuration}
            slideDirection={slideDirection}
          />
        )
      )}
    </div>
  );
};
