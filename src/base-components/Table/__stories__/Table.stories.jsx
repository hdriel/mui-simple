import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import { action } from "@storybook/addon-actions";
import { Stack } from "@mui/material";

import { Home as HomeIcon, Delete as DeleteIcon } from "@mui/icons-material";

import { Table } from "../Table";
import MuiPagination from "../../Pagination/Pagination";
import { isDefined } from "../../../utils/helpers";
import Switch from "../../Switch/Switch";
import {
  FITNESS_COLUMNS,
  FITNESS_DATA,
  PERSON_COLUMNS,
  PERSON_DATA,
} from "./Table.mocks";
import { Button } from "../Table.styled";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Data-Display/Table",
  component: Table,
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "1000px",
          border: "1px solid black",
          padding: "1em",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const dummyProps = {
  title: "My Story",
  orderBy: { calories: "asc" },
  pagination: { total: 53, page: 2, rowsPerPage: 5 },
  onChange: action("onChange"),
  onClickRow: action("onClickRow"),
  rows: FITNESS_DATA,
  columns: FITNESS_COLUMNS,
};

const actions = {
  onChange: action("onChange"),
  onClickRow: action("onClickRow"),
};

export function Default() {
  return <Table />;
}

export function ColoredTable() {
  const [dense, setDense] = useState(false);

  return (
    <Stack spacing={2}>
      <Switch label="Dense" checked={dense} onChange={(e, v) => setDense(v)} />
      <Table
        {...actions}
        dense={dense}
        title="Full Data"
        orderBy={{ s: "asc" }}
        columns={FITNESS_COLUMNS}
        data={FITNESS_DATA}
        tableColor={"info"}
        headerColor={"primary"}
        evenRowsColor={{ color: "black", background: "error" }}
        oddRowsColor={{ color: "white", background: "success" }}
      />
    </Stack>
  );
}

export function FullData() {
  const [dense, setDense] = useState(false);

  return (
    <Stack spacing={2}>
      <Switch label="Dense" checked={dense} onChange={(e, v) => setDense(v)} />
      <Table
        {...actions}
        dense={dense}
        title="Full Data"
        orderBy={{ s: "asc" }}
        columns={FITNESS_COLUMNS}
        data={FITNESS_DATA}
      />
    </Stack>
  );
}

export function StickyHeader() {
  const [stickyHeader, setStickyHeader] = useState(true);

  return (
    <Stack spacing={2}>
      <Switch
        label="Sticky Header"
        checked={stickyHeader}
        onChange={(e, v) => setStickyHeader(v)}
      />
      <Table
        {...actions}
        stickyHeader={stickyHeader}
        maxHeight={400}
        title="Full Data"
        orderBy={{ s: "asc" }}
        columns={FITNESS_COLUMNS}
        data={FITNESS_DATA}
        headerColor="secondary.light"
      />
    </Stack>
  );
}

export function VariantData() {
  const [dense, setDense] = useState(false);

  return (
    <Stack spacing={2}>
      <Switch label="Dense" checked={dense} onChange={(e, v) => setDense(v)} />
      <Table
        {...actions}
        dense={dense}
        title="Variant Data"
        orderBy={{ age: "asc" }}
        columns={PERSON_COLUMNS}
        data={PERSON_DATA}
      />
    </Stack>
  );
}

export function HelperText() {
  const [dense, setDense] = useState(false);

  return (
    <Stack spacing={2}>
      <Switch label="Dense" checked={dense} onChange={(e, v) => setDense(v)} />
      <Table
        {...actions}
        helperText="A basic table example with a caption"
        dense={dense}
        title="Variant Data"
        orderBy={{ age: "asc" }}
        columns={PERSON_COLUMNS}
        data={PERSON_DATA.slice(0, 2)}
      />
    </Stack>
  );
}

export function SelectionMode() {
  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="Selection Table by action"
      orderBy={{ age: "asc" }}
      columns={PERSON_COLUMNS}
      data={PERSON_DATA.slice(0, 2)}
      addSelectionModeAction
      selectionMode
      selectedActions={[
        {
          tooltip: "delete",
          cmp: (
            <Button
              icon={<DeleteIcon />}
              onClick={(event, data) => {
                action("onDelete")(event, data);
              }}
            />
          ),
        },
      ]}
    />
  );
}

export function FilterAction() {
  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="Selection Table by action"
      orderBy={{ age: "asc" }}
      columns={PERSON_COLUMNS}
      addFilterColumnsAction
      addSelectionModeAction
      data={PERSON_DATA.slice(0, 2)}
      selectedActions={[
        {
          tooltip: "delete",
          cmp: (
            <Button
              icon={<DeleteIcon />}
              onClick={(event, data) => {
                action("onDelete")(event, data);
              }}
            />
          ),
        },
      ]}
    />
  );
}

export function generateColumnStrList() {
  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="generate column from string list"
      columns={PERSON_COLUMNS.map((c) => c.field)}
      orderBy={{ age: "asc" }}
      addFilterColumnsAction
      data={PERSON_DATA.slice(0, 3)}
    />
  );
}

export function generateAutoColumns() {
  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="Generate Auto Columns from json data"
      orderBy={{ age: "asc" }}
      addFilterColumnsAction
      data={PERSON_DATA.slice(0, 3)}
    />
  );
}

export function Pagination() {
  const [page, setPage] = useState(2);
  const [rowPerPage, setRowPerPage] = useState(5);

  return (
    <Table
      {...actions}
      title="Table Pagination"
      pagination={{ total: FITNESS_DATA.length, page, rowsPerPage: rowPerPage }}
      columns={FITNESS_COLUMNS}
      data={FITNESS_DATA}
      onChangePagination={({ pagination }) => {
        debugger;
        if (isDefined(pagination.page)) {
          setPage(pagination.page);
        }
        if (isDefined(pagination.rowPerPage)) {
          setRowPerPage(pagination.rowPerPage);
        }
      }}
    />
  );
}

export function CustomPagination() {
  const [page, setPage] = useState(2);

  return (
    <Table
      {...actions}
      title="Table Pagination"
      orderBy={{ [FITNESS_COLUMNS[1].field]: "desc" }}
      pagination={{ total: FITNESS_DATA.length, page, rowsPerPage: 5 }}
      columns={FITNESS_COLUMNS}
      data={FITNESS_DATA}
      paginationAlign="center"
      PaginationComponent={MuiPagination}
      paginationProps={{
        shape: "circular",
        muiColor: "secondary",
        firstIconCmpCB: HomeIcon,
      }}
      onChangePagination={({ pagination }) => {
        if (isDefined(pagination.page)) setPage(pagination.page);
      }}
    />
  );
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Table {...args} />;
}

export const Custom = Template.bind({});
Custom.args = { ...dummyProps };
