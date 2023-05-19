import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs } from "./Breadcrumbs.styled";
import Link from "../Link/Link";
import Chip from "../Chip/Chip";
import Typography from "../Typography/Typography";
import { useTheme, emphasize } from "@mui/material/styles";

export default function Breadcrumbs({
  maxItems,
  size,
  separator,
  customColor,
  muiColor,
  links,
  chips,
  chipBreadCrumbsStyle,
  children,
  ...props
}) {
  return (
    <MuiBreadcrumbs
      size={size}
      maxItems={maxItems}
      separator={separator}
      {...props}
    >
      {links?.map((link, index) => {
        return typeof link === "string" ? (
          <Typography
            key={`${link}-${index}`}
            muiColor={muiColor ?? "inherit"}
            customColor={customColor}
            tooltip={false}
            size={size}
          >
            {link}
          </Typography>
        ) : (
          <Link
            {...link}
            key={`${link?.label}-${index}`}
            muiColor={link?.muiColor ?? muiColor ?? "inherit"}
            customColor={link?.customColor ?? customColor}
            underline={link?.underline ?? "hover"}
            size={link?.size ?? size}
          >
            {link?.icon}
            {link?.label}
          </Link>
        );
      })}
      {chips?.map((chip, index) => {
        return typeof chip === "string" ? (
          <Typography
            key={`${chip}-${index}`}
            muiColor={muiColor ?? "inherit"}
            customColor={customColor}
            tooltip={false}
            size={size}
            wrap={false}
          >
            {chip}
          </Typography>
        ) : (
          <Chip
            {...chip}
            key={`${chip?.label}-${index}`}
            muiColor={
              chipBreadCrumbsStyle ? undefined : chip?.muiColor ?? muiColor
            }
            customColor={
              chipBreadCrumbsStyle
                ? undefined
                : chip?.customColor ?? customColor
            }
            size={chip?.size ?? size}
            label={chip?.label}
            startIcon={chip?.startIcon}
            endIcon={chip?.endIcon}
            onClick={chip?.onClick}
            onDelete={chip?.onDelete ?? (chip?.endIcon && (() => {}))}
            breadCrumbsStyle={chipBreadCrumbsStyle}
          />
        );
      })}
      {children}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  maxItems: PropTypes.number,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string,
        icon: PropTypes.node,
        underline: PropTypes.oneOf(["always", "hover", "none"]),
        muiColor: PropTypes.string,
        customColor: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ])
  ),
  chips: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string,
        startIcon: PropTypes.node,
        endIcon: PropTypes.node,
        muiColor: PropTypes.string,
        customColor: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ])
  ),
  chipBreadCrumbsStyle: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  maxItems: undefined,
  separator: undefined,
  size: undefined,
  links: undefined,
  chips: undefined,
  chipBreadCrumbsStyle: true,
};
