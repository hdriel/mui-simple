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
  customColor,
  muiColor,
  links,
  chip,
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
        const Cmp = chip ? Chip : Link;

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
          <Cmp
            {...link}
            key={`${link?.label}-${index}`}
            muiColor={link?.muiColor ?? muiColor ?? "inherit"}
            customColor={link?.customColor ?? customColor}
            underline={link?.underline ?? "hover"}
            size={link?.size ?? size}
          >
            {link?.icon}
            {link?.label}
          </Cmp>
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
  chip: PropTypes.bool,
};

Breadcrumbs.defaultProps = {
  maxItems: undefined,
  separator: undefined,
  size: undefined,
  links: undefined,
  chip: undefined,
};
