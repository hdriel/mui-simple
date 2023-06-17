import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { LabelIconTreeItemStyled } from "./TreeView.styled";
import Typography from "../Typography/Typography";
import SVGIcon from "../SVGIcon/SVGIcon";

export default function StyledTreeItem(props) {
  const { bgColor, color, labelIcon, labelInfo, labelText, ...other } = props;

  return (
    <LabelIconTreeItemStyled
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
  );
}

StyledTreeItem.propTypes = {
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

StyledTreeItem.defaultProps = {
  bgColor: undefined,
  color: undefined,
  labelIcon: undefined,
  labelInfo: undefined,
  labelText: undefined,
};
