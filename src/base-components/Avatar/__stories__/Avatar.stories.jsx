import React from "react";
import { action } from "@storybook/addon-actions";
import { Send as SendIcon } from "@mui/icons-material";

import Avatar from "../Avatar";

export default {
  title: "base-components/Avatar",
  component: Avatar,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Avatar {...actions} />;
};

export const Colored = () => {
  return <Avatar {...actions} color={"#174c05"} />;
};

export const Name = () => {
  return <Avatar {...actions} username="Hadriel  Benjo" />;
};

export const LongName = () => {
  return <Avatar {...actions} username="Hadriel Benjo And Afek " />;
};

export const NameWithoutTooltip = () => {
  return <Avatar {...actions} username="Hadriel  Benjo" showTooltip={false} />;
};

export const Tooltip = () => {
  return (
    <Avatar {...actions} username="Hadriel  Benjo" tooltipPlacement="right" />
  );
};

export const Image = () => {
  return <Avatar {...actions} image="/1.jpg" />;
};

export const BrokenImage = () => {
  return (
    <Avatar {...actions} image="/broken-image.jpg" fallbackImage="/cat.jpg" />
  );
};

export const BrokenBrokenImage = () => {
  return (
    <Avatar
      {...actions}
      image="/broken-image.jpg"
      fallbackImage="/undefined.jpg"
    />
  );
};

export const Icon = () => {
  return <Avatar {...actions} icon={<SendIcon />} />;
};

export const Square = () => {
  return <Avatar {...actions} variant="square" icon={<SendIcon />} />;
};
