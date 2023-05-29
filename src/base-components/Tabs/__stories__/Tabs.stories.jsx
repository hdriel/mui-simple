import React, { useState } from "react";
import { Box, Stack } from "@mui/material";

import Tabs from "../Tabs";
import Tab from "../Tab";
import { tab } from "@testing-library/user-event/dist/tab";
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
            height: "400px",
            width: "600px",
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
        maxHeightPX={325}
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
          >
            Content {index + 1}
          </Tab>
        ))}
      </Tabs>
    </Box>
  );
};
