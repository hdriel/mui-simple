import React from "react";
import { action } from "@storybook/addon-actions";
import {
  Send as SendIcon,
  VolumeDown as VolumeDownIcon,
  VolumeUp as VolumeUpIcon,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

import Slider from "../Slider";

export default {
  title: "Inputs/Slider",
  component: Slider,
  decorators: [
    (Story) => (
      <div
        style={{
          width: "500px",
          height: "450px",
          border: "1px dashed black",
          padding: "1em",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Slider {...actions} />;
};

export const VolumeExample = () => {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Stack spacing={3}>
      <Slider
        label={"Volume"}
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={value}
        onChange={handleChange}
        {...actions}
      />
      <Slider
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={value}
        onChange={handleChange}
        {...actions}
      />
      <Slider
        label={"Volume"}
        startIcon={<VolumeDownIcon />}
        endIcon={<VolumeUpIcon />}
        value={45}
        onChange={handleChange}
        disabled
        {...actions}
      />
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Slider {...actions} muiColor="primary" label="primary" />
      <Slider {...actions} muiColor="secondary" label="secondary" />
      <Slider {...actions} muiColor="info" label="info" />
      <Slider {...actions} muiColor="error" label="error" />
      <Slider {...actions} label="Default" />
    </Stack>
  );
};

export const Colored = () => {
  return <Slider {...actions} color={"#D050CC"} />;
};

export const Sized = () => {
  return (
    <Stack>
      <Slider {...actions} size="small">
        small
      </Slider>
      <Slider {...actions} size="medium">
        medium
      </Slider>
      <Slider {...actions}>>Default</Slider>
    </Stack>
  );
};
