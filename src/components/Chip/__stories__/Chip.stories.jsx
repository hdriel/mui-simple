import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Send as SendIcon,
  Mail as MainIcon,
  Adb as AbsIcon,
  Done as DoneIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";
import Avatar from "../../Avatar/Avatar";
import Chip from "../Chip";

export default {
  title: "Data-Display/Chip",
  component: Chip,
};

const actions = {
  onClick: action("onClick"),
};
const onDeleteHandler = action("onDelete");

export const Default = () => {
  return <Chip {...actions} />;
};

export const Label = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip {...actions} variant="outlined" label={"label"} />
      <Chip {...actions} variant="outlined">
        children
      </Chip>
    </Stack>
  );
};

export const MultiLine = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip
        {...actions}
        variant="outlined"
        multiLine
        width={"100px"}
        label="This is a chip that has multiple lines."
      />
      <Chip {...actions} variant="outlined" multiLine width={"min-content"}>
        This is a chip that has multiple lines.
      </Chip>
    </Stack>
  );
};

export const Variant = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip {...actions} variant="text">
        text
      </Chip>
      <Chip {...actions} variant="outlined">
        outlined
      </Chip>
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack direction="column" spacing={3}>
      {[
        undefined,
        "primary",
        "secondary",
        "info",
        "success",
        "error",
        "#df01fd",
      ]
        .map((color, index) => (
          <Stack direction="row" spacing={3} key={`${color}`}>
            {["outlined", "text"].map((variant) => (
              <Chip
                key={`${color}-${variant}`}
                {...actions}
                color={color}
                textColor={color ? "#FFFFFF" : undefined}
                variant={variant}
                minWidth={150}
              >
                {variant + " " + color}
              </Chip>
            ))}
          </Stack>
        ))
        .flat()}
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Chip {...actions} size="small">
        small
      </Chip>
      <Chip {...actions} size="medium">
        medium
      </Chip>
      <Chip {...actions}>>Default</Chip>
    </Stack>
  );
};

export const Icon = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip {...actions} variant="text" startIcon={<SendIcon />}>
        text
      </Chip>
      <Chip {...actions} muiColor={"secondary"} startIcon={<MainIcon />}>
        outlined
      </Chip>
      <Chip {...actions} color={"#0f729a"} startIcon={<AbsIcon />}>
        outlined
      </Chip>
    </Stack>
  );
};

export const AvatarIcon = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip
        {...actions}
        variant="text"
        avatar={<Avatar username={"Hadriel Benjo"} />}
      >
        Avatar username
      </Chip>
      <Chip
        {...actions}
        muiColor={"secondary"}
        avatar={<Avatar image="/1.jpg" />}
      >
        Avatar image
      </Chip>
      <Chip {...actions} color={"#0f729a"} avatar={<Avatar color={"none"} />}>
        Avatar default
      </Chip>
    </Stack>
  );
};

export const EndIcon = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Chip {...actions} variant="text" onDelete={onDeleteHandler}>
        Avatar username
      </Chip>
      <Chip
        {...actions}
        muiColor={"secondary"}
        avatar={<Avatar image="/1.jpg" />}
        onDelete={onDeleteHandler}
        endIcon={<DeleteIcon />}
      >
        Avatar image
      </Chip>
      <Chip
        {...actions}
        color={"#0f729a"}
        avatar={<Avatar color={"none"} />}
        onDelete={onDeleteHandler}
        deleteIcon={<DoneIcon />}
      >
        Avatar default
      </Chip>
    </Stack>
  );
};