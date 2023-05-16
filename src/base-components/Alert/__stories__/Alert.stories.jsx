import React from "react";
import { action } from "@storybook/addon-actions";
import { Send as SendIcon, Delete as DeleteIcon } from "@mui/icons-material";
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

const onCloseHandler = action("onClick");

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
            ? alerts
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

export const Themed = () => {
  return (
    <Stack spacing={3}>
      <Alert muiColor="primary">primary</Alert>
      <Alert muiColor="secondary">secondary</Alert>
      <Alert>Default</Alert>
    </Stack>
  );
};

export const Colored = () => {
  return <Alert customColor={"#8b8800"}>Colored</Alert>;
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
      <Alert actionLabel="test">action label prop</Alert>
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
            ? alerts
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
