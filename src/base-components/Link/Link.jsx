import React from "react";
import PropTypes from "prop-types";
import { Link as MuiLink } from "./Link.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Link({ url, color, size, ...props }) {
  const [customColor, muiColor] = useCustomColor(color);
  return (
    <MuiLink
      href={url}
      color={muiColor}
      customColor={muiColor ? undefined : customColor}
      size={size}
      {...props}
    />
  );
}

Link.propTypes = {
  url: PropTypes.string,
  color: PropTypes.string,
  underline: PropTypes.oneOf(["always", "hover", "none"]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Link.defaultProps = {
  url: undefined,
  color: undefined,
  underline: undefined,
  size: undefined,
};
