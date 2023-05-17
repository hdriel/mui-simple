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
      <Typography rows={1} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography rows={2} width={"90%"} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of types simply
        dummy text of the printing and typesetting industry.
      </Typography>
      <Typography rows={4} width={"90%"} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
      <Typography rows={false} width={"80%"} border>
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
      <Typography alignCenter wrap={false} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Typography width={"90%"} alignRight wrap={false} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of types simply
        dummy text of the printing and typesetting industry.
      </Typography>
      <Typography width={"90%"} alignJustify wrap={false} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
      <Typography width={"80%"} wrap={false} border>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electr
      </Typography>
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={3}>
      <Typography muiColor="primary">primary</Typography>
      <Typography muiColor="secondary">secondary</Typography>
      <Typography>Default</Typography>
      <Typography customColor={"#D050CC"}>Colored: "#D050CC"</Typography>
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={3}>
      <Typography fontSize="30px" border>
        fontSize="20px"
      </Typography>
      <Typography fontSize={30} border>
        fontSize={20}
      </Typography>
      <Typography border>Default</Typography>
    </Stack>
  );
};

export const GutterBottom = () => {
  return (
    <Stack spacing={3}>
      <Typography gutterBottom border>
        gutterBottom=small padding from bottom
      </Typography>
      <Typography border>Default</Typography>
      <Typography paragraph border>
        paragraph=large padding from bottom
      </Typography>
    </Stack>
  );
};

export const Component = () => {
  return (
    <Stack spacing={3}>
      <Typography border component={"p"}>
        component={"p"}
      </Typography>
      <Typography border component={"span"}>
        component={"span"}
      </Typography>
      <Typography border component={"a"} href={"#"}>
        component={"a"}
      </Typography>
    </Stack>
  );
};

export const Variant = () => {
  return (
    <Stack spacing={3}>
      {[
        "body1",
        "body2",
        "button",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "inherit",
        "overline",
        "subtitle1",
        "subtitle2",
      ].map((variant) => (
        <Typography border variant={variant}>
          {variant}
        </Typography>
      ))}
    </Stack>
  );
};

export const NestedAndBeside = () => {
  return (
    <Box>
      <Typography border width={"auto"}>
        Lorem Ipsum is simply dummy{" "}
        <Typography border noWrap bold>
          text of the
        </Typography>
        printing and typesetting
      </Typography>
      <Typography border>
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </Typography>
    </Box>
  );
};

export const TextStyles = () => {
  return (
    <Stack spacing={3}>
      {[
        { size: "22px" },
        { bold: true },
        { italic: true },
        { underline: true },
        { strike: true },
        { charsCase: "upper" },
        { charsCase: "lower" },
        { charsCase: "capital" },
        { sup: true, size: "5px" },
        { sub: true, size: "5px" },
        { monospace: true },
      ].map((styleProps) => (
        <Typography border autoWidth {...styleProps}>
          {JSON.stringify(styleProps).slice(1, -1)}
        </Typography>
      ))}
    </Stack>
  );
};
