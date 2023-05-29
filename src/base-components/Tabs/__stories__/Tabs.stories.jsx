import React, { useState } from "react";
import { Box } from "@mui/material";

import Tabs from "../Tabs";
import Tab from "../Tab";
import { tab } from "@testing-library/user-event/dist/tab";

export default {
  title: "Navigation/Tabs",
  component: Tabs,
};

export const Default = () => {
  return <Tabs />;
};

export const Variant = () => {
  const [value, setValue] = useState("one");
  const onChangeHandler = (tabId) => setValue(tabId);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
      <Tabs value={value} onChange={(newValue) => onChangeHandler(newValue)}>
        <Tab value="one" label="Item One">
          Content One
        </Tab>
        <Tab value="two" label="Item Two">
          Content Tow
        </Tab>
        <Tab value="three" label="Item Three">
          Content Three
        </Tab>
      </Tabs>
    </Box>
  );
};
