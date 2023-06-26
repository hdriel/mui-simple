import React, { useState } from "react";
import { Stack } from "@mui/material";
import {
  Send as SendIcon,
  Whatshot as WhatshotIcon,
  Home as HomeIcon,
  BackpackOutlined as BackpackOutlinedIcon,
} from "@mui/icons-material";
import Pagination from "../Pagination";

export default {
  title: "Navigation/Pagination",
  component: Pagination,
};

export const Default = () => {
  return <Pagination />;
};

export const ThemedAndColored = () => {
  return (
    <Stack spacing={5}>
      <Pagination color="primary" totalPages={10} label="primary" />
      <Pagination color="secondary" totalPages={10} label="secondary" />
      <Pagination color="info" totalPages={10} label="info" />
      <Pagination color="warning" totalPages={10} label="warning" />
      <Pagination color="error" totalPages={10} label="error" />
      <Pagination color={"#D050CC"} totalPages={10} label="#D050CC" />;
      <Pagination totalPages={10} label="default" />
    </Stack>
  );
};

export const Disabled = () => {
  return (
    <Stack spacing={5}>
      <Pagination totalPages={10} disabled label="disabled all" />
      <Pagination
        totalPages={10}
        disabledPages={[2, 3]}
        label="disabled pages 2, 3"
      />
      <Pagination totalPages={10} label="default" />
    </Stack>
  );
};

export const Sized = () => {
  return (
    <Stack spacing={5}>
      <Pagination size="small" totalPages={10} label="small" />
      <Pagination size="medium" totalPages={10} label="medium" />
      <Pagination size="large" totalPages={10} label="large" />
      <Pagination totalPages={10} label="default" />
    </Stack>
  );
};

export const VariantAndShape = () => {
  return (
    <Stack spacing={5}>
      <Pagination
        variant="outlined"
        shape="circular"
        totalPages={10}
        label="outlined-circular"
      />
      <Pagination
        variant="outlined"
        shape="rounded"
        totalPages={10}
        label="outlined-rounded"
      />
      <Pagination
        variant="text"
        shape="circular"
        totalPages={10}
        label="text-circular"
      />
      <Pagination
        variant="text"
        shape="rounded"
        totalPages={10}
        label="text-rounded"
      />
      <Pagination totalPages={10} label="default" />
    </Stack>
  );
};

export const Orientation = () => {
  return (
    <Stack spacing={5}>
      <Pagination orientation="horizontal" totalPages={10} label="horizontal" />
      <Pagination orientation="vertical" totalPages={10} label="vertical" />
      <Pagination totalPages={10} label="default" />
    </Stack>
  );
};

export const CustomIcons = () => {
  return (
    <Stack spacing={5}>
      <Pagination
        firstIconCmpCB={HomeIcon}
        lastIconCmpCB={SendIcon}
        prevIconCmpCB={BackpackOutlinedIcon}
        nextIconCmpCB={WhatshotIcon}
        totalPages={10}
        size="large"
        label="Custom icons"
        showFirstButton
        showLastButton
      />
    </Stack>
  );
};

export const FirstAndLastIcons = () => {
  return (
    <Stack spacing={5}>
      <Pagination
        totalPages={10}
        size="medium"
        label="show first button"
        page={5}
        showFirstButton
        showLastButton={false}
      />
      <Pagination
        totalPages={10}
        size="medium"
        label="show last button"
        page={5}
        showFirstButton={false}
        showLastButton
      />
      <Pagination
        totalPages={10}
        size="medium"
        label="show both buttons"
        page={5}
        showFirstButton
        showLastButton
      />
      <Pagination
        totalPages={10}
        size="medium"
        label="default when page is first page"
        page={5}
      />
      <Pagination
        totalPages={10}
        size="medium"
        label="default when page is middle page"
        page={1}
      />
      <Pagination
        totalPages={10}
        size="medium"
        label="default when page is last page"
        page={10}
      />
    </Stack>
  );
};

export const MaxPagesVisible = () => {
  return (
    <Stack spacing={5}>
      {Array.from({ length: 10 }, (_, i) => i).map((p) => (
        <Pagination
          key={p}
          totalPages={20}
          size="medium"
          label={`maxPagesVisible ${p}`}
          maxPagesVisible={p}
        />
      ))}
    </Stack>
  );
};

export const MaxBoundaryPagesVisible = () => {
  return (
    <Stack spacing={5}>
      {Array.from({ length: 10 }, (_, i) => i).map((p) => (
        <Pagination
          key={p}
          totalPages={20}
          size="medium"
          label={`maxBoundaryPagesVisible ${p}`}
          maxBoundaryPagesVisible={p}
        />
      ))}
    </Stack>
  );
};

export const PageToLink = () => {
  return (
    <Stack spacing={5}>
      {Array.from({ length: 3 }, (_, i) => i).map((p) => (
        <Pagination
          key={p}
          totalPages={20}
          size="medium"
          label={`Page To Link  replace 'string-to-path...{page}...' ${p}`}
          pageToLink="/pagination/{page}"
        />
      ))}
    </Stack>
  );
};

export const Controlled = () => {
  const [page, setPage] = useState(0);
  return (
    <Pagination
      totalPages={10}
      label="controlled, page: {page}"
      page={page}
      onChange={setPage}
    />
  );
};
