import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import { action } from "@storybook/addon-actions";

import { Table } from "../Table";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Data-Display/Table",
  component: Table,
  argTypes: {},
  decorators: [(Story) => <Story />],
};

const HEAD_CELLS = [
  {
    field: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    field: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
    align: "right",
  },
  {
    field: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
    align: "right",
  },
  {
    field: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
    align: "right",
  },
  {
    field: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
    align: "right",
  },
];

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const ROWS = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

const dummyProps = {
  title: "My Story",
  orderBy: { s: "asc" },
  pagination: { total: 53, page: 2, rowsPerPage: 5 },
  onChange: action("onChange"),
  onClickRow: action("onClickRow"),
  rows: ROWS,
  columns: HEAD_CELLS,
};

const actions = {
  onChange: action("onChange"),
  onClickRow: action("onClickRow"),
};

export function Default() {
  return <Table />;
}

export function FullData() {
  return (
    <Table
      {...actions}
      title="Full Data"
      orderBy={{ s: "asc" }}
      columns={HEAD_CELLS}
      data={ROWS}
    />
  );
}

export function Pagination() {
  return (
    <Table
      {...actions}
      title="Table Pagination"
      orderBy={{ s: "asc" }}
      pagination={{ total: ROWS.length, page: 1, rowsPerPage: 13 }}
      columns={HEAD_CELLS}
      data={ROWS}
    />
  );
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Table {...args} />;
}

export const Custom = Template.bind({});
Custom.args = { ...dummyProps };
