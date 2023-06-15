import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import filledIcons from "./filled-icons.json";
import outlinedIcons from "./outlined-icons.json";
import roundedIcons from "./rounded-icons.json";
import sharpIcons from "./sharp-icons.json";
import twoToneIcons from "./twoTone-icons.json";
import { Stack, Grid, Box } from "@mui/material";

import SVGIcon from "../SVGIcon";
import ToggleButtonGroup from "../../ToggleButtonGroup/ToggleButtonGroup";
import Typography from "../../Typography/Typography";
import ToggleButtonGroups from "../../ToggleButtonGroup/ToggleButtonGroups";
import InputColor from "../../TextField/InputColor";
import Slider from "../../Slider/Slider";

export default {
  title: "TEMPLATE/SVGIcon",
  component: SVGIcon,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <SVGIcon {...actions} />;
};

export const MuiIconNames = () => {
  const [iconType, setIconType] = useState("filled");
  const [columns, setColumns] = useState(2);
  const [color, setColor] = useState("black");

  const dataType = [
    { value: "filled", component: "FILLED" },
    { value: "outlined", component: "OUTLINED" },
    { value: "rounded", component: "ROUNDED" },
    { value: "sharp", component: "SHARP" },
    { value: "twoTone", component: "TWO-TONE" },
  ];

  const dataColumns = [
    { value: 12 / 1, component: "1" },
    { value: 12 / 2, component: "2" },
    { value: 12 / 3, component: "3" },
    { value: 12 / 4, component: "4" },
    { value: 12 / 5, component: "5" },
    { value: 12 / 6, component: "6" },
    { value: 12 / 7, component: "7" },
    { value: 12 / 8, component: "8" },
    { value: 12 / 9, component: "9" },
    { value: 12 / 10, component: "10" },
  ];

  return (
    <Stack spacing={3}>
      <ToggleButtonGroups fullWidth justifyContent="space-around">
        <ToggleButtonGroup
          value={iconType}
          exclusive
          onChange={(value) => setIconType(value)}
          data={dataType}
        />

        <ToggleButtonGroup
          value={columns}
          exclusive
          onChange={(value) => setColumns(value)}
          data={dataColumns}
        />
      </ToggleButtonGroups>
      <InputColor
        value={color}
        onChange={(e) => {
          console.log("onChange color", e.target.value);
          setColor(e.target.value);
        }}
        debounceDelay={500}
      />
      <Grid container spacing={4}>
        {{
          filled: filledIcons,
          outlined: outlinedIcons,
          rounded: roundedIcons,
          sharp: sharpIcons,
          twoTone: twoToneIcons,
        }[iconType]?.map((muiIconName) => (
          <Grid key={muiIconName} item xs={columns} flex>
            <Stack alignItems="center" spacing={2}>
              <SVGIcon muiIconName={muiIconName} size={40} color={color} />
              <Typography tooltip={false}>{muiIconName}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export const Size = () => {
  const [width, setWidth] = useState(50);
  const [height, setHeight] = useState(50);

  return (
    <Grid container spacing={3} sx={{ width: 500 }}>
      <Grid item xs flex>
        <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: 500,
            }}
          >
            <SVGIcon
              muiIconName="Home"
              color={"red"}
              width={width * 10}
              height={height * 10}
            />
          </Box>
          <Slider
            orientation="vertical"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            min={10}
            max={100}
            sx={{ height: 500 }}
          />
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Slider
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          min={10}
          max={100}
        />
      </Grid>
    </Grid>
  );
};

export const Colored = () => {
  return (
    <SVGIcon {...actions} color={"#D050CC"}>
      Colored
    </SVGIcon>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <SVGIcon {...actions} size="small">
        small
      </SVGIcon>
      <SVGIcon {...actions} size="medium">
        medium
      </SVGIcon>
      <SVGIcon {...actions} size="large">
        large
      </SVGIcon>
      <SVGIcon {...actions}>>Default</SVGIcon>
    </Stack>
  );
};
