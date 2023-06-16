import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack, Box } from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";

import Timeline from "../Timeline";
import Typography from "../../Typography/Typography";
import Divider from "../../Divider/Divider";

export default {
  title: "Lab/Timeline",
  component: Timeline,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Timeline {...actions} />;
};

const steps = [
  {
    title: "Eat",
  },
  {
    title: "Code",
    color: "primary",
    variant: "outlined",
  },
  {
    title: "Sleep",
    color: "secondary",
    variant: "outlined",
  },
  {
    title: "Repeat",
  },
];

export const Variant = () => {
  return (
    <Stack direction="row" spacing={5}>
      {["filled", "outlined"].map((variant) => (
        <Timeline
          key={variant}
          variant={variant}
          steps={["Eat", "Code", "Sleep", "Repeat"]}
        />
      ))}
    </Stack>
  );
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={5}>
      {["filled", "outlined"]
        .map((variant) => (
          <>
            <Stack key={variant} direction="row" spacing={5}>
              {[
                undefined,
                "primary",
                "secondary",
                "info",
                "success",
                "error",
                "#df01fd",
              ].map((color) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                    width: "max-content",
                  }}
                >
                  <Typography tooltip={false}>{color ?? "default"}</Typography>
                  <Timeline
                    key={`${variant}-${color}`}
                    variant={variant}
                    color={color}
                    steps={["Eat", "Code", "Sleep", "Repeat"]}
                  />
                </Box>
              ))}
            </Stack>
            <Divider />
          </>
        ))
        .flat()}
    </Stack>
  );
};

export const Icon = () => {
  const steps = [
    { title: "Eat", icon: <FastfoodIcon /> },
    { title: "Code", icon: <LaptopMacIcon />, color: "primary" },
    {
      title: "Sleep",
      icon: <HotelIcon />,
      color: "primary",
      variant: "outlined",
    },
    { title: "Repeat", icon: <RepeatIcon />, color: "secondary" },
  ];
  return <Timeline steps={steps} />;
};

export const ZigZag = () => {
  const steps = [
    { title: "Eat", icon: <FastfoodIcon /> },
    { title: "Code", icon: <LaptopMacIcon />, color: "primary" },
    {
      title: "Sleep",
      icon: <HotelIcon />,
      color: "primary",
      variant: "outlined",
    },
    { title: "Repeat", icon: <RepeatIcon />, color: "secondary" },
  ];
  return <Timeline steps={steps} position="alternate" />;
};

export const Subtitle = () => {
  const steps = [
    {
      title: "Eat",
      subtitle: "Because you need strength",
      icon: <FastfoodIcon />,
      secondaryTitle: "09:30 am",
    },
    {
      title: "Code",
      subtitle: "Because it's awesome!",
      icon: <LaptopMacIcon />,
      secondaryTitle: "10:00 am",
    },
    { title: "Sleep", subtitle: "Because you need rest", icon: <HotelIcon /> },
    {
      title: "Repeat",
      subtitle: "Because this is the life you love!",
      icon: <RepeatIcon />,
    },
  ];

  return (
    <Stack>
      <Timeline steps={steps.map(({ icon, subtitle, ...step }) => step)} />
      <Timeline steps={steps.map(({ icon, ...step }) => step)} />
      <Timeline steps={steps} />
      <Timeline steps={steps.map(({ subtitle, ...step }) => step)} />
      <Timeline steps={steps} useZigZagStyle />
    </Stack>
  );
};

export const OtherSideTitle = () => {
  return (
    <Stack>
      <Timeline {...actions} size="small">
        small
      </Timeline>
      <Timeline {...actions} size="medium">
        medium
      </Timeline>
      <Timeline {...actions} size="large">
        large
      </Timeline>
      <Timeline {...actions}>>Default</Timeline>
    </Stack>
  );
};
