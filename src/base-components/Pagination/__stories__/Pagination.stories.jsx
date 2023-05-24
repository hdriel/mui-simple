import React from "react";
import { Stack } from "@mui/material";

import Pagination from "../Pagination";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
};

export const Default = () => {
  return <Pagination />;
};

export const Variant = () => {
  return (
    <Stack spacing={3}>
      <Pagination variant="text" />
      <Pagination variant="outlined" />
      <Pagination variant="contained" />
    </Stack>
  );
};

export const Themed = () => {
  return (
    <Stack spacing={3}>
      <Pagination muiColor="primary" totalPages={10} />
      <Pagination muiColor="secondary" totalPages={10} />
      <Pagination muiColor="info" totalPages={10} />
      <Pagination muiColor="warning" totalPages={10} />
      <Pagination muiColor="error" totalPages={10} />
      <Pagination totalPages={10} />
    </Stack>
  );
};

export const Colored = () => {
  return <Pagination customColor={"#D050CC"} totalPages={10} />;
};

export const Sized = () => {
  return (
    <Stack spacing={3}>
      <Pagination size="small" />
      <Pagination size="medium" />
      <Pagination size="large" />
      <Pagination />
    </Stack>
  );
};
