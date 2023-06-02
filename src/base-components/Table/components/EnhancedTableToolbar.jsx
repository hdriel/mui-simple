import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material";
import { Toolbar, Tooltip, Typography } from "../Table.styled";

export function EnhancedTableToolbar({
  selectedLabel,
  selected,
  data,
  title,
  filterAction,
  selectionModeAction,
  selectedActions,
  actions,
}) {
  const numSelected = selected?.length ?? 0;
  const filteredActions = (numSelected > 0 ? selectedActions : actions) || [];

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {selectedLabel?.includes("{n}")
            ? selectedLabel?.replace("{n}", numSelected)
            : `${numSelected} ${selectedLabel}`}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      )}

      {filteredActions
        .filter((action) => isValidElement(action.cmp))
        .map(({ cmp, tooltip }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Tooltip key={index} title={tooltip}>
            {cloneElement(cmp, {
              onClick: (event) => {
                cmp?.props?.onClick?.(
                  event,
                  data?.filter((row, index) =>
                    selected.includes(row.id ?? index)
                  )
                );
              },
            })}
          </Tooltip>
        ))}
      {!numSelected && selectionModeAction}
      {!numSelected && filterAction}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  selectedLabel: PropTypes.string,
  numSelected: PropTypes.number,
  title: PropTypes.string,
  selectedActions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      Cmp: PropTypes.node,
    })
  ),
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      Cmp: PropTypes.node,
    })
  ),
};

EnhancedTableToolbar.defaultProps = {
  selectedLabel: "{n} selected",
  numSelected: 0,
  title: "",
  selectedActions: [],
  actions: [],
};
