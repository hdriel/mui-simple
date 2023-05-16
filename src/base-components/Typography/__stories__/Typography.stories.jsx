import React from "react";
import { Stack, Box } from "@mui/material";

import Typography from "../Typography";

const Border = ({ width, ...props }) => (
  <Box sx={{ width, border: "1px solid black" }} {...props} />
);

export default {
  title: "Data-Display/Typography",
  component: Typography,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "0.5em",
          height: "300px",
          width: "300px",
          border: "1px dashed black",
          resize: "both",
          overflow: "auto",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <Typography />;
};

export const Rows = () => {
  return (
    <Stack spacing={3}>
      <Typography rows={1}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography rows={2}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of types simply
        dummy text of the printing and typesetting industry.
      </Typography>
      <Typography rows={4}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
      <Typography rows={false}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
    </Stack>
  );
};

export const Align = () => {
  return (
    <Stack spacing={3}>
      <Typography rows={1} alignCenter>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography rows={2} alignRight>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of types simply
        dummy text of the printing and typesetting industry.
      </Typography>
      <Typography rows={4} alignJustify>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Typography muiColor="primary">primary</Typography>
      <Typography muiColor="secondary">secondary</Typography>
      <Typography>Default</Typography>
    </Stack>
  );
};

export const Colored = () => {
  return <Typography color={"#D050CC"}>Colored</Typography>;
};

export const Sized = () => {
  return (
    <Stack>
      <Typography size="small">small</Typography>
      <Typography size="medium">medium</Typography>
      <Typography size="large">large</Typography>
      <Typography>>Default</Typography>
    </Stack>
  );
};
