import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Stack } from "@mui/material";
import Button from "../../Button/Button";

import Backdrop from "../Backdrop";
import CircularProgress from "../../Progress/CircularProgress/CircularProgress";

export default {
  title: "Feedback/Backdrop",
  component: Backdrop,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Backdrop {...actions} />;
};

export const Open = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Show backdrop</Button>
      <Backdrop
        open={open}
        onClick={() => {
          debugger;
          setOpen(false);
        }}
        {...actions}
      >
        <CircularProgress muiColor="inherit" />
      </Backdrop>
    </>
  );
};

export const Colored = () => {
  return (
    <Backdrop open {...actions} color={"#D050CC"}>
      Colored
    </Backdrop>
  );
};
