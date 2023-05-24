import React, { useState } from "react";
import PropTypes from "prop-types";

import List from "./List";
import Checkbox from "../Checkbox/Checkbox";

export default function CheckList({ align, items, ...props }) {
  const checklistItems = items?.map((item) => {
    const checkbox = (
      <Checkbox
        edge={align}
        checked={item.checked}
        tabIndex={-1}
        disableRipple
      />
    );

    switch (align) {
      case "start":
        item.icon = checkbox;
        break;
      case "end":
        item.actions = [].concat(item.actions).push(checkbox);
        break;
    }
    return { ...item };
  });

  return <List {...props} items={checklistItems} />;
}

CheckList.propTypes = {
  switch: PropTypes.bool,
  align: PropTypes.oneOf(["start", "end"]),
};

CheckList.defaultProps = {
  switch: false,
  align: "start",
};
