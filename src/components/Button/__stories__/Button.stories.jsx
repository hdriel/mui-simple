import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import {
  Delete as DeleteIcon,
  Send as SendIcon,
  Fingerprint as FingerprintIcon,
} from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export default {
  title: "Inputs/Button",
  component: Button,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Button {...actions} />;
};

export const FullWidth = () => {
  return (
    <Stack spacing={3}>
      <Button {...actions} fullWidth variant="contained">
        Full Width
      </Button>
      <Button {...actions} variant="contained">
        Not Full Width
      </Button>
    </Stack>
  );
};

export const Icons = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Button {...actions}>Label only</Button>
      <Button {...actions} startIcon={<SendIcon />}>
        Start Icon
      </Button>
      <Button {...actions} color="error" endIcon={<DeleteIcon />}>
        End Icon
      </Button>
      <Button {...actions} color={"#D05010"} icon={<FingerprintIcon />} />
    </Stack>
  );
};

export const Variants = () => {
  return (
    <Stack direction="row" spacing={3}>
      <Button {...actions} variant="text">
        text
      </Button>
      <Button {...actions} variant="outlined">
        outlined
      </Button>
      <Button {...actions} variant="contained">
        contained
      </Button>
      <Button {...actions}>default</Button>
    </Stack>
  );
};

export const DisableRipple = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction="row" spacing={3}>
        <Button {...actions} disableRipple color="primary">
          Disable Ripple
        </Button>
        <Button
          {...actions}
          color={"#D05010"}
          disableRipple
          icon={<FingerprintIcon />}
        />
      </Stack>
      <Stack direction="row" spacing={3}>
        <Button {...actions} color="secondary">
          Ripple
        </Button>
        <Button {...actions} color={"#D05010"} icon={<FingerprintIcon />} />
      </Stack>
    </Stack>
  );
};

export const ButtonLink = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <Button
          {...actions}
          disableRipple
          disableElevation
          variant="text"
          link="https://chat.openai.com/"
        >
          Chat GTP
        </Button>
        <Button
          {...actions}
          color={"#D05010"}
          icon={<SendIcon />}
          link="https://chat.openai.com/"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Button {...actions} variant="text">
          normal button
        </Button>
        <Button {...actions} color={"#D05010"} icon={<FingerprintIcon />} />
      </Stack>
    </Stack>
  );
};

export const Elevation = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Button {...actions} disableElevation link="https://chat.openai.com/">
        Disable Elevation
      </Button>
      <Button {...actions} link="https://chat.openai.com/">
        Elevation
      </Button>
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack direction="column" spacing={2}>
      {[
        undefined,
        "primary",
        "secondary",
        "info",
        "success",
        "error",
        "#df01fd",
      ].map((color, index) => (
        <Stack key={index} direction="row" spacing={2}>
          {["contained", "outlined", "text"].map((variant) => (
            <Button
              {...actions}
              key={variant}
              variant={variant}
              color={color}
              sx={{ minWidth: 200 }}
            >
              {color ?? "Default"}
            </Button>
          ))}
          <Button {...actions} icon={<SendIcon />} color={color} />
        </Stack>
      ))}
    </Stack>
  );
};

export const Loading = () => {
  return (
    <Stack direction={"column"} spacing={2}>
      <Stack direction={"row"} spacing={2}>
        <Typography>Loading</Typography>
        <Button
          {...actions}
          isLoading
          disableElevation
          startIcon={<SendIcon />}
          loadingIconPosition="start"
        >
          Start Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          endIcon={<SendIcon />}
          loadingIconPosition="end"
        >
          End Send Data
        </Button>
        <Button {...actions} isLoading disableElevation>
          Send Data
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Typography>Loading Label</Typography>
        <Button
          {...actions}
          isLoading
          disableElevation
          startIcon={<SendIcon />}
          loadingIconPosition="start"
          loadingLabel="Loading..."
        >
          Start Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          endIcon={<SendIcon />}
          loadingIconPosition="end"
          loadingLabel="Loading..."
        >
          End Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          loadingLabel="Loading..."
        >
          Send Data
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Typography>Size Small</Typography>
        <Button
          {...actions}
          isLoading
          disableElevation
          startIcon={<SendIcon />}
          loadingIconPosition="start"
          loadingLabel="Loading..."
          size="small"
        >
          Start Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          endIcon={<SendIcon />}
          loadingIconPosition="end"
          loadingLabel="Loading..."
          size="small"
        >
          End Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          loadingLabel="Loading..."
          size="small"
        >
          Send Data
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Typography>Size Medium</Typography>
        <Button
          {...actions}
          isLoading
          disableElevation
          startIcon={<SendIcon />}
          loadingIconPosition="start"
          loadingLabel="Loading..."
          size="medium"
        >
          Start Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          endIcon={<SendIcon />}
          loadingIconPosition="end"
          loadingLabel="Loading..."
          size="medium"
        >
          End Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          loadingLabel="Loading..."
          size="medium"
        >
          Send Data
        </Button>
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <Typography>Size Large</Typography>
        <Button
          {...actions}
          isLoading
          disableElevation
          startIcon={<SendIcon />}
          loadingIconPosition="start"
          loadingLabel="Loading..."
          size="large"
        >
          Start Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          endIcon={<SendIcon />}
          loadingIconPosition="end"
          loadingLabel="Loading..."
          size="large"
        >
          End Send Data
        </Button>
        <Button
          {...actions}
          isLoading
          disableElevation
          loadingLabel="Loading..."
          size="large"
        >
          Send Data
        </Button>
      </Stack>
    </Stack>
  );
};