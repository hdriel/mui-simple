import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
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

export const Themed = () => {
  return (
    <Stack>
      <Slider {...actions} muiColor="primary">
        primary
      </Slider>
      <Slider {...actions} muiColor="secondary">
        secondary
      </Slider>
      <Slider {...actions} muiColor="info">
        secondary
      </Slider>
      <Slider {...actions} muiColor="error">
        secondary
      </Slider>
      <Slider {...actions}>Default</Slider>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Slider {...actions} color={"#D050CC"}>
      Colored
    </Slider>
  );
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
