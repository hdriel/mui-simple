import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies,no-unused-vars
import { action } from "@storybook/addon-actions";
import { Home as HomeIcon } from "@mui/icons-material";

import { Table } from "../Table";
import MuiPagination from "../../Pagination/Pagination";
import { isDefined } from "../../../utils/helpers";
import Typography from "../../Typography/Typography";
import { Stack } from "@mui/material";
import Switch from "../../Switch/Switch";

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
        columns={HEAD_CELLS}
        data={ROWS}
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
        columns={HEAD_CELLS}
        data={ROWS}
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
        columns={HEAD_CELLS}
        data={ROWS}
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
        columns={[
          {
            field: "avatar",
            align: "center",
            label: "Avatar",
            image: { avatar: true },
            props: (row) => ({ username: row.name, showTooltip: true }),
          },
          {
            field: "age",
            align: "center",
            label: "Age",
            numeric: true,
            tooltip: "great age!",
          },
          {
            field: "birthday",
            align: "center",
            label: "birthday",
            dateFormat: "YYYY/MM/DD hh:mm a",
          },
          {
            field: "description",
            align: "left",
            label: "Description",
            Cmp: Typography,
            props: (row) => ({ rows: 2 }),
          },
        ]}
        data={[
          {
            avatar: "/1.jpg",
            age: 18,
            birthday: new Date(1990, 9, 29, 20, 30).getTime(),
            name: "Hadriel Benjo",
            description:
              "Hoping to reinvent yourself or just planning to be a bit more casual? It's hard to choose the perfect nickname. We'll find you a range of options including diminutives, alliteration, descriptive names, rhyming nicknames and even some computer generated words, which may or may not be helpful!",
          },
          {
            avatar: "/2.jpg",
            age: 15,
            birthday: new Date(1982, 9, 29, 20, 30).getTime(),
            name: "Kennedy Palmer",
            description:
              "Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ultricies mi eget mauris pharetra. Id semper risus in hendrerit gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Velit scelerisque in dictum non consectetur a erat nam. Quam nulla porttitor massa id. Pulvinar neque laoreet suspendisse interdum consectetur libero. Lorem sed risus ultricies tristique nulla aliquet. In pellentesque massa placerat duis ultricies lacus sed.",
          },
          {
            avatar: "/3.jpg",
            age: 20,
            birthday: new Date(2003, 9, 29, 20, 30).getTime(),
            name: "Gray Richards",
            description:
              "Aliquet nec ullamcorper sit amet risus nullam. Senectus et netus et malesuada fames ac turpis egestas integer. Arcu ac tortor dignissim convallis aenean et tortor at risus. In est ante in nibh. Est placerat in egestas erat imperdiet sed euismod nisi porta. Tellus elementum sagittis vitae et. Viverra orci sagittis eu volutpat odio facilisis. Nec feugiat in fermentum posuere",
          },
          {
            avatar: "/4.jpg",
            age: 28,
            birthday: new Date(1990, 9, 29, 20, 30).getTime(),
            name: "Ramos Bradley",
            description: "Sollicitudin tempor id eu nisl nunc mi ipsum",
          },
          {
            avatar: "/5.jpg",
            age: 10,
            birthday: new Date(1975, 9, 29, 20, 30).getTime(),
            name: "Duncan Mcdonald",
            description:
              "egestas pretium aenean. Bibendum enim facilisis gravida neque. Porta non pulvinar neque laoreet. Nullam vehicula ipsum a arcu cursus. Tortor condimentum lacinia quis vel. Ultricies mi eget mauris pharetra et. Sit amet nisl suscipit adipiscing bibendum est ultricies integer. ",
          },
          {
            avatar: "/6.jpg",
            age: 18,
            birthday: new Date(1999, 9, 29, 20, 30).getTime(),
            name: "Jordan Rose",
            description:
              "Accumsan sit amet nulla facilisi morbi. Amet dictum sit amet justo donec enim diam vulputate ut. Pellentesque habitant morbi tristique senectus. Velit aliquet sagittis id consectetur purus ut. Consequat id porta nibh venenatis cras sed felis eget. Viverra orci sagittis eu volutpat odio facilisis mauris. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Ornare aenean euismod elementum nisi quis. Aenean pharetra magna ac placerat vestibulum lectus. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.",
          },
        ]}
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
        columns={[
          {
            field: "avatar",
            align: "center",
            label: "Avatar",
            image: { avatar: true },
            props: (row) => ({ username: row.name, showTooltip: true }),
          },
          {
            field: "age",
            align: "center",
            label: "Age",
            numeric: true,
            tooltip: "great age!",
          },
          {
            field: "birthday",
            align: "center",
            label: "birthday",
            dateFormat: "YYYY/MM/DD hh:mm a",
          },
          {
            field: "description",
            align: "left",
            label: "Description",
            Cmp: Typography,
            props: (row) => ({ rows: 2 }),
          },
        ]}
        data={[
          {
            avatar: "/1.jpg",
            age: 18,
            birthday: new Date(1990, 9, 29, 20, 30).getTime(),
            name: "Hadriel Benjo",
            description:
              "Hoping to reinvent yourself or just planning to be a bit more casual? It's hard to choose the perfect nickname. We'll find you a range of options including diminutives, alliteration, descriptive names, rhyming nicknames and even some computer generated words, which may or may not be helpful!",
          },
          {
            avatar: "/2.jpg",
            age: 15,
            birthday: new Date(1982, 9, 29, 20, 30).getTime(),
            name: "Kennedy Palmer",
            description:
              "Faucibus scelerisque eleifend donec pretium vulputate sapien nec. Ultricies mi eget mauris pharetra. Id semper risus in hendrerit gravida. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Velit scelerisque in dictum non consectetur a erat nam. Quam nulla porttitor massa id. Pulvinar neque laoreet suspendisse interdum consectetur libero. Lorem sed risus ultricies tristique nulla aliquet. In pellentesque massa placerat duis ultricies lacus sed.",
          },
        ]}
      />
    </Stack>
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
      pagination={{ total: ROWS.length, page, rowsPerPage: rowPerPage }}
      columns={HEAD_CELLS}
      data={ROWS}
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
      pagination={{ total: ROWS.length, page, rowsPerPage: 5 }}
      columns={HEAD_CELLS}
      data={ROWS}
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
