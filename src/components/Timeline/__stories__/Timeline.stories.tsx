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
        .map((variant, index) => (
          <Box
            key={index}
            sx={{ display: "flex", flexDirection: "column", gap: "2em" }}
          >
            <Stack key={`${variant}-${index}`} direction="row" spacing={5}>
              {[
                undefined,
                "primary",
                "secondary",
                "info",
                "success",
                "error",
                "#df01fd",
              ].map((color, cIndex) => (
                <Box
                  key={`${variant}-${color}-${cIndex}`}
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
            <Divider key={`d-${index}`} color="#000000" />
          </Box>
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

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Timeline steps={steps.map(({ icon, ...step }) => step)} />
      <Timeline steps={steps} />
    </Box>
  );
};

export const Connector = () => {
  const steps = [
    { title: "Eat", icon: <FastfoodIcon /> },
    { title: "Code", icon: <LaptopMacIcon />, color: "primary" },
    {
      title: "Sleep",
      icon: <HotelIcon />,
      color: "primary",
      variant: "outlined",
      connectorColor: "info",
      connectorHeight: 50,
      connectorWidth: 8,
    },
    { title: "Repeat", icon: <RepeatIcon />, color: "secondary" },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      <Timeline
        steps={steps.map(({ icon, ...step }) => step)}
        connectorColor="error"
        connectorHeight={150}
      />
      <Timeline steps={steps} connectorHeight={150} />
    </Box>
  );
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

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
      {["left", "zigzag", "right"].map((position) => (
        <Box
          key={position}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
            width: "max-content",
          }}
        >
          <Typography tooltip={false}>{position ?? "default"}</Typography>
          <Timeline
            steps={steps}
            left={position === "left"}
            right={position === "right"}
            zigzag={position === "zigzag"}
          />
        </Box>
      ))}
    </Box>
  );
};

export const Subtitle = () => {
  const steps = [
    {
      title: "Eat",
      subtitle: "Because you need strength",
      icon: <FastfoodIcon />,
      time: "09:30 am",
    },
    {
      title: "Code",
      subtitle: "Because it's awesome!",
      icon: <LaptopMacIcon />,
      time: "10:00 am",
    },
    { title: "Sleep", subtitle: "Because you need rest", icon: <HotelIcon /> },
    {
      title: "Repeat",
      subtitle: "Because this is the life you love!",
      icon: <RepeatIcon />,
    },
  ];

  return (
    <Stack direction="row" spacing={5}>
      <Timeline steps={steps.map(({ icon, subtitle, ...step }) => step)} />
      <Timeline steps={steps.map(({ icon, ...step }) => step)} />
      <Timeline steps={steps} />
      <Timeline steps={steps.map(({ subtitle, ...step }) => step)} />
      <Timeline steps={steps} zigzag />
    </Stack>
  );
};

export const Aligned = () => {
  const steps = [
    {
      title: "Eat",
      subtitle: "Because you need strength",
      icon: <FastfoodIcon />,
      time: "09:30 am",
    },
    {
      title: "Code",
      subtitle: "Because it's awesome!",
      icon: <LaptopMacIcon />,
      time: "10:00 am",
    },
    { title: "Sleep", subtitle: "Because you need rest", icon: <HotelIcon /> },
    {
      title: "Repeat",
      subtitle: "Because this is the life you love!",
      icon: <RepeatIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Timeline steps={steps} align="left" />
      <Timeline steps={steps} />
      <Timeline steps={steps} align="right" />
    </Box>
  );
};
