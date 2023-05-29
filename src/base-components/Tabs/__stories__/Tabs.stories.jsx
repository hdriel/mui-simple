import React, { useState } from "react";
import { Box } from "@mui/material";

import Tabs from "../Tabs";
import Tab from "../Tab";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
};

export const Default = () => {
  return <Tabs />;
};

export const Variant = () => {
  const [value, setValue] = useState("1");

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <Tabs
        value={value}
        onChange={(...args) => {
          console.log(...args);
          debugger;
          setValue(...args);
        }}
      >
        <Tab value="1" label="Item One">
          Content One
        </Tab>
        <Tab value="2" label="Item Two">
          Content Tow
        </Tab>
        <Tab value="3" label="Item Three">
          Content Three
        </Tab>
      </Tabs>
    </Box>
  );
};
