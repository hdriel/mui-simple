import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { LabelIconTreeItemStyled } from "../TreeView.styled";
import Typography from "../../Typography/Typography";
import SVGIcon from "../../SVGIcon/SVGIcon";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const LabelIconTreeItem = forwardRef((props, ref) => {
  const {
    bgColor,
    color,
    icon: labelIcon,
    info: labelInfo,
    label: labelText,
    ...other
  } = props ?? {};

  return (
    props && (
      <LabelIconTreeItemStyled
        ref={ref}
        {...other}
        label={
          <Box sx={{ display: "flex", alignItems: "center", p: 0.5, pr: 0 }}>
            {labelIcon && (
              <Box
                color="inherit"
                sx={{ mr: 1, display: "flex", alignItems: "center" }}
              >
                <SVGIcon muiIconName={labelIcon}>{labelIcon}</SVGIcon>
              </Box>
            )}
            {labelText && (
              <Typography
                variant="body2"
                sx={{ fontWeight: "inherit", flexGrow: 1 }}
              >
                {labelText}
              </Typography>
            )}
            {labelInfo && (
              <Typography variant="caption" color="inherit">
                {labelInfo}
              </Typography>
            )}
          </Box>
        }
        style={{
          "--tree-view-color": color,
          "--tree-view-bg-color": bgColor,
        }}
      />
    )
  );
});

LabelIconTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.any,
  ]),
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

LabelIconTreeItem.defaultProps = {
  bgColor: undefined,
  color: undefined,
  labelIcon: undefined,
  labelInfo: undefined,
  labelText: undefined,
};

export default LabelIconTreeItem;

export const LabelIconTreeItemIcons = {
  collapseIcon: <ArrowDropDownIcon />,
  expandIcon: <ArrowRightIcon />,
  endIcon: <div style={{ width: 24 }} />,
};
