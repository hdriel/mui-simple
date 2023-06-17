import React from "react";
import { action } from "@storybook/addon-actions";

import TreeView from "../TreeView";
import { Box } from "@mui/material";
import Button from "../../Button/Button";

export default {
  title: "Lab/TreeView",
  component: TreeView,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <TreeView {...actions} />;
};

export const BasicTreeView = () => {
  const nodes = [
    {
      id: "1",
      label: "Applications",
      children: [{ id: "2", label: "Calendar" }],
    },
    {
      id: "5",
      label: "Documents",
      children: [
        { id: "10", label: "OSS" },
        { id: "6", label: "MUI", children: [{ id: "8", label: "index.js" }] },
      ],
    },
  ];
  return <TreeView nodes={nodes} />;
};

export const MultiSelection = () => {
  const nodes = [
    {
      id: "1",
      label: "Applications",
      children: [
        { id: "2", label: "Calendar" },
        { id: "3", label: "Chrome" },
        { id: "4", label: "Webstorm" },
      ],
    },
    {
      id: "5",
      label: "Documents",
      children: [
        {
          id: "6",
          label: "MUI",
          children: [
            {
              id: "7",
              label: "src",
              children: [
                { id: "8", label: "index.js" },
                { id: "9", label: "tree-view.js" },
              ],
            },
          ],
        },
      ],
    },
  ];

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ["1", "5", "6", "7"] : []
    );
  };

  const handleSelectClick = () => {
    setSelected((oldSelected) =>
      oldSelected.length === 0
        ? ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
        : []
    );
  };

  return (
    <Box sx={{ height: 270, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? "Expand all" : "Collapse all"}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? "Select all" : "Unselect all"}
        </Button>
      </Box>

      <TreeView
        nodes={nodes}
        expandedIds={expanded}
        selectedIds={selected}
        onExpended={setExpanded}
        onSelected={setSelected}
      />
    </Box>
  );
};

export const GmailClone = () => {
  let nodes = [
    {
      id: "1",
      label: "All Mail",
      icon: "Mail",
    },
    {
      id: "2",
      label: "Trash",
      icon: "Delete",
    },
    {
      id: "3",
      label: "Trash",
      icon: "Label",
      children: [
        {
          id: "5",
          label: "Social",
          icon: "SupervisorAccount",
          info: "90",
          color: "#1a73e8",
          bgColor: "#e8f0fe",
        },
        {
          id: "6",
          label: "Updates",
          icon: "Info",
          info: "2,294",
          color: "#e3742f",
          bgColor: "#fcefe3",
        },
        {
          id: "7",
          label: "Forums",
          icon: "Forum",
          info: "3,566",
          color: "#a250f5",
          bgColor: "#f3e8fd",
        },
        {
          id: "8",
          label: "Promotions",
          icon: "LocalOffer",
          info: "733",
          color: "#3c8039",
          bgColor: "#e6f4ea",
        },
      ],
    },
    {
      id: "4",
      label: "History",
      icon: "Label",
    },
  ];

  const [expanded, setExpanded] = React.useState(["3"]);
  const [selected, setSelected] = React.useState([]);

  return (
    <TreeView
      nodes={nodes}
      expandedIds={expanded}
      selectedIds={selected}
      onExpended={setExpanded}
      onSelected={setSelected}
    />
  );
};
