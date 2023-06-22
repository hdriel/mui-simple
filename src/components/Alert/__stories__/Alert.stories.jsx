import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import Alert from "../Alert";
import Divider from "../../Divider/Divider";
import Button from "../../Button/Button";

export default {
  title: "Feedback/Alert",
  component: Alert,
  decorators: [
    (Story) => (
      <div
        style={{ width: "450px", padding: "1em", border: "1px dashed black" }}
      >
        <Story />
      </div>
    ),
  ],
};

const onCloseHandler = action("onClose");

export const Default = () => {
  return <Alert />;
};

export const SeverityVariant = () => {
  // "outlined", "standard"
  return (
    <Stack spacing={3}>
      {[
        <Divider>filled</Divider>,
        [
          { variant: "filled", severity: "error" },
          { variant: "filled", severity: "info" },
          { variant: "filled", severity: "success" },
          { variant: "filled", severity: "warning" },
        ],
        <Divider>outlined</Divider>,
        [
          { variant: "outlined", severity: "error" },
          { variant: "outlined", severity: "info" },
          { variant: "outlined", severity: "success" },
          { variant: "outlined", severity: "warning" },
        ],
        <Divider>standard</Divider>,
        [
          { variant: "standard", severity: "error" },
          { variant: "standard", severity: "info" },
          { variant: "standard", severity: "success" },
          { variant: "standard", severity: "warning" },
        ],
      ]
        .map((alerts, index) => {
          return React.isValidElement(alerts)
            ? React.cloneElement(alerts, { key: index })
            : alerts.map(({ variant, severity }, index) => (
                <Alert
                  key={`${variant}-${severity}`}
                  onClose={onCloseHandler}
                  variant={variant}
                  severity={severity}
                >
                  This is an {severity} alert — check it out!
                </Alert>
              ));
        })
        .flat()}
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={3}>
      <Alert>Default</Alert>
      <Alert color="primary">primary</Alert>
      <Alert color="secondary">secondary</Alert>
      <Alert color={"#8b8800"}>Colored</Alert>;
    </Stack>
  );
};

export const Icon = () => {
  return (
    <Stack spacing={3}>
      <Alert icon={<SendIcon />}>include custom icon</Alert>
      <Alert icon={false}>remove icon</Alert>
      <Alert>default alert icon</Alert>
    </Stack>
  );
};

export const Action = () => {
  return (
    <Stack spacing={3}>
      <Alert>default alert without onClose handler</Alert>
      <Alert onClose={onCloseHandler}>onClose action handler only</Alert>
      <Alert actions={"nothing"}>action label prop</Alert>
      <Alert
        onClose={onCloseHandler}
        actions={[
          "OK",
          { label: "undo", onClick: action("undo") },
          <Button icon={<MailIcon />} onClick={action("MailIcon")} />,
        ]}
      >
        action label prop
      </Alert>
      <Alert
        action={[
          <Button icon={<SendIcon />} />,
          <Button icon={<DeleteIcon />} />,
        ]}
      >
        actions
      </Alert>
    </Stack>
  );
};

export const Title = () => {
  // "outlined", "standard"
  return (
    <Stack spacing={3}>
      {[
        <Divider>filled</Divider>,
        [
          { variant: "filled", severity: "error" },
          { variant: "filled", severity: "info" },
          { variant: "filled", severity: "success" },
          { variant: "filled", severity: "warning" },
        ],
        <Divider>outlined</Divider>,
        [
          { variant: "outlined", severity: "error" },
          { variant: "outlined", severity: "info" },
          { variant: "outlined", severity: "success" },
          { variant: "outlined", severity: "warning" },
        ],
        <Divider>standard</Divider>,
        [
          { variant: "standard", severity: "error" },
          { variant: "standard", severity: "info" },
          { variant: "standard", severity: "success" },
          { variant: "standard", severity: "warning" },
        ],
      ]
        .map((alerts, index) => {
          return React.isValidElement(alerts)
            ? React.cloneElement(alerts, { key: index })
            : alerts.map(({ variant, severity }, index) => (
                <Alert
                  key={`${variant}-${severity}`}
                  onClose={onCloseHandler}
                  variant={variant}
                  severity={severity}
                  title={severity}
                >
                  This is an {severity} alert — <strong>check it out!</strong>
                </Alert>
              ));
        })
        .flat()}
    </Stack>
  );
};
