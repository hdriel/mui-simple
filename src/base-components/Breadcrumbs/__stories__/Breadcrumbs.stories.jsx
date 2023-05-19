import React from "react";
import { action } from "@storybook/addon-actions";
// import { Send as SendIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";

import Breadcrumbs from "../Breadcrumbs";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <Breadcrumbs {...actions} />;
};

const linksStrList = [
  "Home",
  "Catalog",
  "Accessories",
  "New Collection",
  "Belts",
];

export const Links = () => {
  return (
    <Stack>
      <Breadcrumbs links={linksStrList} />
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack>
      <Breadcrumbs {...actions} muiColor="primary">
        primary
      </Breadcrumbs>
      <Breadcrumbs {...actions} muiColor="secondary">
        secondary
      </Breadcrumbs>
      <Breadcrumbs {...actions}>Default</Breadcrumbs>
    </Stack>
  );
};

export const Colored = () => {
  return (
    <Breadcrumbs {...actions} color={"#D050CC"}>
      Colored
    </Breadcrumbs>
  );
};

export const Sized = () => {
  return (
    <Stack>
      <Breadcrumbs {...actions} size="small">
        small
      </Breadcrumbs>
      <Breadcrumbs {...actions} size="medium">
        medium
      </Breadcrumbs>
      <Breadcrumbs {...actions} size="large">
        large
      </Breadcrumbs>
      <Breadcrumbs {...actions}>>Default</Breadcrumbs>
    </Stack>
  );
};
