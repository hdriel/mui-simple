import React from "react";
import PropTypes from "prop-types";
import { Link as MuiLink } from "./Link.styled";

export default function Link({ url, muiColor, customColor, size, ...props }) {
  return (
    <MuiLink
      href={url}
      color={muiColor}
      customColor={customColor}
      size={size}
      {...props}
    />
  );
}

Link.propTypes = {
  url: PropTypes.string,
  muiColor: PropTypes.string,
  customColor: PropTypes.string,
  underline: PropTypes.oneOf(["always", "hover", "none"]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.defaultProps = {
  url: undefined,
  muiColor: undefined,
  customColor: undefined,
  underline: undefined,
  size: undefined,
};
