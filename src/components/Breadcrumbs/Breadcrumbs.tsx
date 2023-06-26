import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs } from "./Breadcrumbs.styled";
import Link from "../Link/Link";
import Chip from "../Chip/Chip";
import Typography from "../Typography/Typography";

export default function Breadcrumbs({
  maxItems,
  size,
  separator,
  color,
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
            color={color}
            tooltip={false}
            size={size}
          >
            {link}
          </Typography>
        ) : (
          <Link
            {...link}
            key={`${link?.label}-${index}`}
            color={link?.color ?? color ?? "inherit"}
            customColor={link?.customColor ?? color}
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
            color={color}
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
            color={
              chipBreadCrumbsStyle ? undefined : chip?.customColor ?? color
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
  color: PropTypes.string,
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
        color: PropTypes.string,
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
        color: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ])
  ),
  chipBreadCrumbsStyle: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  color: undefined,
  maxItems: undefined,
  separator: undefined,
  size: undefined,
  links: undefined,
  chips: undefined,
  chipBreadCrumbsStyle: true,
};
