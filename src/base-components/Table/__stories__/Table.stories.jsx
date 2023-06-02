import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import { action } from "@storybook/addon-actions";
import { Home as HomeIcon } from "@mui/icons-material";
import { Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import FilterListIcon from "@mui/icons-material/FilterList";

import { Table } from "../Table";
import MuiPagination from "../../Pagination/Pagination";
import { isDefined } from "../../../utils/helpers";
import Switch from "../../Switch/Switch";
import {
  FITNESS_COLUMNS,
  FITNESS_DATA,
  VariantDataColumns,
  VariantDataRows,
} from "./Table.mocks";
import { Button } from "../Table.styled";
import Checkbox from "../../Checkbox/Checkbox";
import CheckList from "../../List/CheckList";
import Menu from "../../Menu/Menu";

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
  const [stickyHeader, setStickyHeader] = useState(false);

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
        columns={VariantDataColumns}
        data={VariantDataRows}
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
        columns={VariantDataColumns}
        data={VariantDataRows.slice(0, 2)}
      />
    </Stack>
  );
}

export function SelectionMode() {
  const [selectionMode, setSelectionMode] = useState(false);

  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="Selection Table by action"
      orderBy={{ age: "asc" }}
      columns={VariantDataColumns}
      data={VariantDataRows.slice(0, 2)}
      actions={[
        {
          tooltip: "enable select mode",
          cmp: (
            <Checkbox
              checkedIcon={<LibraryAddCheckIcon />}
              icon={<CheckBoxOutlineBlankIcon />}
              checked={selectionMode}
              onClick={(event, data) => {
                action("onSelectModeClick")(event, data);
                setSelectionMode(!selectionMode);
              }}
            />
          ),
        },
      ]}
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
      selectionMode={selectionMode}
    />
  );
}

export function FilterAction() {
  const [selectionMode, setSelectionMode] = useState(false);
  const [filterColumns, setFilterColumns] = useState(
    VariantDataColumns.map((column) => column.field)
  );

  return (
    <Table
      {...actions}
      helperText="A basic table example with a caption"
      title="Selection Table by action"
      orderBy={{ age: "asc" }}
      columns={VariantDataColumns.filter((column) =>
        filterColumns.includes(column.field)
      )}
      addFilterColumnsAction
      data={VariantDataRows.slice(0, 2)}
      actions={[
        {
          tooltip: "enable select mode",
          cmp: (
            <Checkbox
              checkedIcon={<LibraryAddCheckIcon />}
              icon={<CheckBoxOutlineBlankIcon />}
              checked={selectionMode}
              onClick={(event, data) => {
                action("onSelectModeClick")(event, data);
                setSelectionMode(!selectionMode);
              }}
            />
          ),
        },
      ]}
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
      selectionMode={selectionMode}
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
      orderBy={{ s: "asc" }}
      pagination={{ total: FITNESS_DATA.length, page, rowsPerPage: rowPerPage }}
      columns={FITNESS_COLUMNS}
      data={FITNESS_DATA}
      onChange={({ pagination }) => {
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
      orderBy={{ s: "asc" }}
      pagination={{ total: FITNESS_DATA.length, page, rowsPerPage: 5 }}
      columns={FITNESS_COLUMNS}
      data={FITNESS_DATA}
      paginationAlign="center"
      PaginationComponent={MuiPagination}
      paginationProps={{
        shape: "circle",
        muiColor: "secondary",
        firstIconCmpCB: HomeIcon,
      }}
      onChange={({ pagination }) => {
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
