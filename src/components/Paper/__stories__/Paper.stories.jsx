import React from "react";
import { Box } from "@mui/material";

import Paper from "../Paper";

export default {
  title: "Surfaces/Paper",
  component: Paper,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#CCC",
          width: "auto",
          height: "auto",
          padding: "0.5em",
          border: "1px dashed black",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Default = () => {
  return <Paper />;
};

export const Elevation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      {Array.from({ length: 25 }, (_, i) => i).map((elevation) => (
        <Paper key={elevation} height={60} width={125} elevation={elevation}>
          {`elevation=${elevation}`}
        </Paper>
      ))}
    </Box>
  );
};

export const Variant = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      <Paper width={125} height={125} variant="outlined">
        outlined
      </Paper>
      <Paper width={125} height={125} variant="elevation">
        elevation
      </Paper>
      <Paper width={125} height={125}>
        default = elevation
      </Paper>
    </Box>
  );
};

export const Square = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      <Paper width={125} height={125} square>
        square
      </Paper>
      <Paper width={125} height={125}>
        rounded
      </Paper>
    </Box>
  );
};

export const ThemedAndColored = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      <Paper
        width={125}
        height={125}
        variant="outlined"
        elevation={20}
        color={"primary"}
        textColor={"#8800ff"}
      >
        primary
      </Paper>
      <Paper
        width={125}
        height={125}
        variant="elevation"
        elevation={20}
        color={"secondary"}
      >
        secondary
      </Paper>
      <Paper width={125} height={125} elevation={20}>
        default
      </Paper>
      <Paper
        width={125}
        height={125}
        elevation={20}
        color={"#1d01cd"}
        textColor={"#00ff0d"}
      >
        custom #1d01cd
      </Paper>
    </Box>
  );
};

export const Image = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
      }}
    >
      <Paper
        width={250}
        height={250}
        elevation={20}
        textColor={"#FFFFFF"}
        imageSrc={"/1.jpg"}
        imageOpacity={0.3}
      >
        Image
      </Paper>
      <Paper
        width={250}
        height={250}
        elevation={20}
        textColor={"#FFFFFF"}
        imageSrc={"/1.jpg"}
        imageOpacity={0.8}
        imageLayout="auto auto"
      />
      <Paper
        width={250}
        height={250}
        elevation={20}
        textColor={"#FFFFFF"}
        imageSrc={"/1.jpg"}
        imageOpacity={0.8}
        imageLayout="50px 60px"
      />
    </Box>
  );
};
