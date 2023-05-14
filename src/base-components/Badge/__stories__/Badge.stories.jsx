import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Mail as MainIcon } from "@mui/icons-material";
import { Stack, Button, Box } from "@mui/material";

import Badge from "../Badge";

export default {
  title: "Data-Display/Badge",
  component: Badge,
};

const actions = {};

export const Default = () => {
  return (
    <Badge {...actions}>
      <MainIcon />
    </Badge>
  );
};

export const Themed = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Badge {...actions} content={1} muiColor="primary">
        <MainIcon />
      </Badge>
      <Badge {...actions} content={2} muiColor="secondary">
        <MainIcon />
      </Badge>
      <Badge {...actions} content={"default"}>
        <MainIcon />
      </Badge>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Badge {...actions} content={"color"} color={"#d05e00"}>
      <MainIcon />
    </Badge>
  );
};

export const Variant = () => {
  return (
    <Stack direction="row" spacing={3} alignItems={"center"}>
      <Badge {...actions} content={"b"} muiColor="secondary">
        <MainIcon />
      </Badge>
      <Badge {...actions} content={"b"} muiColor="secondary" variant="dot">
        <MainIcon />
      </Badge>
    </Stack>
  );
};

export const Hide = () => {
  const [hide, setHide] = useState(false);

  return (
    <Stack direction="row" spacing={3} alignItems={"center"}>
      <Button color="secondary" onClick={() => setHide((h) => !h)}>
        {hide ? "show" : "hide"}
      </Button>
      <Badge {...actions} content={"b"} muiColor="secondary" hide={hide}>
        <MainIcon />
      </Badge>
      <Badge {...actions} muiColor="secondary" hide={hide}>
        <MainIcon />
      </Badge>
    </Stack>
  );
};

export const ShowZero = () => {
  return (
    <Stack direction="row" spacing={3} alignItems={"center"}>
      <Badge {...actions} content={0} muiColor="secondary" showZero={false}>
        <MainIcon />
      </Badge>
      <Badge {...actions} content={0} muiColor="secondary" showZero={true}>
        <MainIcon />
      </Badge>
      <Badge {...actions} content={0} muiColor="secondary">
        <MainIcon />
      </Badge>
    </Stack>
  );
};

export const Max99 = () => {
  return (
    <Stack direction="row" spacing={3} alignItems={"center"}>
      <Badge {...actions} content={9}>
        <MainIcon />
      </Badge>
      <Badge {...actions} content={99}>
        <MainIcon />
      </Badge>
      <Badge {...actions} content={999}>
        <MainIcon />
      </Badge>
    </Stack>
  );
};

const shapeStyles = { bgcolor: "secondary.main", width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);
export const Overlap = () => {
  return (
    <Stack direction="row" spacing={3} alignItems={"center"}>
      <Badge {...actions} content={" "}>
        {rectangle}
      </Badge>
      <Badge {...actions} content={" "} variant="dot">
        {rectangle}
      </Badge>
      <Badge {...actions} content={" "} overlap={"circular"}>
        {circle}
      </Badge>
      <Badge {...actions} content={" "} overlap={"circular"} variant="dot">
        {circle}
      </Badge>
    </Stack>
  );
};

export const AnchorPosition = () => {
  return (
    <Stack direction="column" spacing={3} alignItems={"center"}>
      <Stack direction="row" spacing={5} alignItems={"center"}>
        <Badge {...actions} content={"T"} vertical="top">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"B"} vertical="bottom">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"R"} horizontal="right">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"L"} horizontal="left">
          <MainIcon />
        </Badge>
      </Stack>
      <Stack direction="row" spacing={5} alignItems={"center"}>
        <Badge {...actions} content={"TR"} vertical="top" horizontal="right">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"TL"} vertical="top" horizontal="left">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"BR"} vertical="bottom" horizontal="right">
          <MainIcon />
        </Badge>
        <Badge {...actions} content={"BL"} vertical="bottom" horizontal="left">
          <MainIcon />
        </Badge>
      </Stack>
    </Stack>
  );
};
