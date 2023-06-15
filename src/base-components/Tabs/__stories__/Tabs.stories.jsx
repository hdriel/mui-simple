import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import {
  Send as SendIcon,
  Phone as PhoneIcon,
  Favorite as FavoriteIcon,
  PersonPin as PersonPinIcon,
} from "@mui/icons-material";

import Tabs from "../Tabs";
import Tab from "../Tab";
import ToggleButtonGroup from "../../ToggleButtonGroup/ToggleButtonGroup";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "black",
          padding: "1em",
        }}
      >
        <div
          style={{
            height: "500px",
            width: "800px",
            backgroundColor: "white",
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
};

export const Default = () => {
  return <Tabs />;
};

export const Variant = () => {
  const data0 = [{ value: "reverse", component: "reverse" }];
  const [reverse, setReverse] = useState();

  const data1 = [
    { value: "horizontal", component: "horizontal" },
    { value: "vertical", component: "vertical" },
  ];
  const [orientation, setOrientation] = useState("horizontal");

  const data2 = [
    { value: "fullWidth", component: "fullWidth" },
    { value: "scrollable", component: "scrollable" },
    { value: "standard", component: "standard" },
  ];
  const [variant, setVariant] = useState("standard");

  const [value, setValue] = useState("one");
  const onChangeHandler = (tabId) => setValue(tabId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Stack direction="row" spacing={3}>
        <ToggleButtonGroup
          value={reverse}
          exclusive
          onChange={(value) => setReverse(value)}
          data={data0}
        />

        <ToggleButtonGroup
          value={orientation}
          exclusive
          onChange={(value) => setOrientation(value)}
          data={data1}
        />
        <ToggleButtonGroup
          value={variant}
          exclusive
          onChange={(value) => setVariant(value)}
          data={data2}
        />
      </Stack>
      <Tabs
        reverse={reverse}
        verticalMaxFixedHeight={400}
        variant={variant}
        orientation={orientation}
        value={value}
        onChange={(newValue) => onChangeHandler(newValue)}
      >
        {[
          { value: "one", label: "Item " },
          { value: "two", label: "Item " },
          { value: "three", label: "Item " },
          { value: "four", label: "Item " },
          { value: "five", label: "Item " },
          { value: "six", label: "Item " },
          { value: "seven", label: "Item " },
          { value: "eight", label: "Item " },
          { value: "nine", label: "Item " },
          { value: "ten", label: "Item " },
          { value: "eleven", label: "Item " },
          { value: "twelve", label: "Item " },
        ].map((tabProps, index) => (
          <Tab
            key={index}
            value={tabProps.value}
            label={tabProps.label + tabProps.value}
            sx={{ backgroundColor: "red" }}
          >
            Content {index + 1}
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
};

export const Centered = () => {
  const data1 = [{ value: "centered", component: "centered" }];
  const [centered, setCentered] = useState("centered");

  const data2 = [
    { value: "fullWidth", component: "fullWidth" },
    { value: "scrollable", component: "scrollable" },
    { value: "standard", component: "standard" },
  ];
  const [variant, setVariant] = useState("standard");

  const [value, setValue] = useState("one");
  const onChangeHandler = (tabId) => setValue(tabId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      <Stack direction="row" spacing={3}>
        <ToggleButtonGroup
          value={centered}
          exclusive
          onChange={(value) => setCentered(value)}
          data={data1}
        />
        <ToggleButtonGroup
          value={variant}
          exclusive
          onChange={(value) => setVariant(value)}
          data={data2}
        />
      </Stack>
      <Tabs
        verticalMaxFixedHeight={400}
        variant={variant}
        centered={centered}
        value={value}
        onChange={(newValue) => onChangeHandler(newValue)}
      >
        {[
          { value: "one", label: "Item " },
          { value: "two", label: "Item " },
          { value: "three", label: "Item " },
          { value: "four", label: "Item " },
        ].map((tabProps, index) => (
          <Tab
            key={index}
            value={tabProps.value}
            label={tabProps.label + tabProps.value}
          >
            Content {index + 1}
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
};

export const ThemedAndColored = () => {
  const [value, setValue] = useState("one");
  const onChangeHandler = (tabId) => setValue(tabId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
      }}
    >
      {[
        "#0a7b6f",
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
      ].map((color, index) => (
        <Tabs
          color={color}
          verticalMaxFixedHeight={400}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
        >
          {[
            { value: "one", label: "Item " },
            { value: "two", label: "Item " },
            { value: "three", label: "Item " },
            { value: "four", label: "Item " },
          ].map((tabProps, index) => (
            <Tab
              key={index}
              value={tabProps.value}
              label={tabProps.label + tabProps.value}
            />
          ))}
        </Tabs>
      ))}
    </Box>
  );
};

export const Icons = () => {
  const data1 = [
    { value: "horizontal", component: "horizontal" },
    { value: "vertical", component: "vertical" },
  ];
  const [orientation, setOrientation] = useState("horizontal");

  const [value, setValue] = useState("0");
  const onChangeHandler = (tabId) => setValue(tabId);
  const tabs = [
    {
      label: "Messages ",
      icon: <SendIcon />,
      iconPosition: "top",
      tooltip: "messages tab",
    },
    {
      label: "Recents",
      icon: <PhoneIcon />,
      iconPosition: "start",
      tooltip: "calls tab",
    },
    {
      label: "Favorites",
      icon: <FavoriteIcon />,
      iconPosition: "end",
    },
    {
      label: "Nearby",
      icon: <PersonPinIcon />,
      iconPosition: "bottom",
    },
  ];

  return (
    <>
      <ToggleButtonGroup
        value={orientation}
        exclusive
        onChange={(value) => setOrientation(value)}
        data={data1}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: orientation === "vertical" ? "row" : "column",
          gap: "2em",
        }}
      >
        <Tabs
          verticalTabWidth={250}
          orientation={orientation}
          centered
          customColor={"#0a7b6f"}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
        >
          {tabs.map(({ icon, iconPosition, label, tooltip }, index) => (
            <Tab key={index} label={label} tooltipProps={{ title: tooltip }} />
          ))}
        </Tabs>

        <Tabs
          orientation={orientation}
          centered
          muiColor={"secondary"}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
        >
          {tabs.map(({ icon, iconPosition, label, tooltip }, index) => (
            <Tab key={index} icon={icon} tooltipProps={{ title: tooltip }} />
          ))}
        </Tabs>

        <Tabs
          orientation={orientation}
          centered
          muiColor={"info"}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
        >
          {tabs.map(({ icon, iconPosition, label, tooltip }, index) => (
            <Tab
              key={index}
              icon={icon}
              label={label}
              tooltipProps={{ title: tooltip }}
            />
          ))}
        </Tabs>

        <Tabs
          orientation={orientation}
          centered
          muiColor={"success"}
          value={value}
          onChange={(newValue) => onChangeHandler(newValue)}
        >
          {tabs.map(({ icon, iconPosition, label, tooltip }, index) => (
            <Tab
              key={index}
              icon={icon}
              label={label}
              iconPosition={iconPosition}
              tooltipProps={{ title: tooltip }}
            />
          ))}
        </Tabs>
      </Box>
    </>
  );
};
