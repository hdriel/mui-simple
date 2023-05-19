import React from "react";
import PropTypes from "prop-types";
import { Breadcrumbs as MuiBreadcrumbs } from "./Breadcrumbs.styled";
import Link from "../Link/Link";

export default function Breadcrumbs({ maxItems, separator, links, ...props }) {
  return (
    <MuiBreadcrumbs maxItems={maxItems} separator={separator}>
      {links?.map((link) =>
        typeof link === "string" ? (
          <Link muiColor={"inherit"} underline={"none"}>
            {link}
          </Link>
        ) : (
          <Link
            {...link}
            muiColor={link?.muiColor ?? "inherit"}
            underline={link?.underline ?? "hover"}
          >
            {link?.icon}
            {link?.label}
          </Link>
        )
      )}
    </MuiBreadcrumbs>
  );
}

Breadcrumbs.propTypes = {
  maxItems: PropTypes.number,
  separator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  links: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string,
        icon: PropTypes.node,
        underline: PropTypes.oneOf(["always", "hover", "none"]),
        muiColor: PropTypes.string,
        link: PropTypes.string,
        onClick: PropTypes.func,
      }),
    ])
  ),
};

Breadcrumbs.defaultProps = {
  maxItems: undefined,
  separator: undefined,
  links: undefined,
};
