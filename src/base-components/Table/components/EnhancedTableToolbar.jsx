import React from "react";
import PropTypes from "prop-types";

import { IconButton, Toolbar, Tooltip, Typography } from "../Table.styled";

export function EnhancedTableToolbar({ title, actions }) {
  return (
    <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>

      {actions.map((action, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Tooltip key={index} title={action.tooltip}>
          <IconButton onClick={action.onClick}>{action.icon}</IconButton>
        </Tooltip>
      ))}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
};

EnhancedTableToolbar.defaultProps = {
  title: "",
  actions: [],
};
