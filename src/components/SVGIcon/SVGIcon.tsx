import React, { isValidElement } from "react";
import PropTypes from "prop-types";
import MuiIconName from "./MuiIconName";
import { SVG } from "./SVGIcon.styled";

export default function SVGIcon({
  muiIconName,
  iconSrc,
  color,
  width,
  height,
  size,
  children,
  ...props
}) {
  muiIconName ||= typeof children === "string" ? children : undefined;

  return children && isValidElement(children) ? (
    children
  ) : (
    <MuiIconName
      name={muiIconName}
      color={color}
      width={size ?? width}
      height={size ?? height}
      {...props}
    >
      {iconSrc && (
        <SVG
          src={iconSrc}
          fill={color}
          width={size ?? width}
          height={size ?? height}
          {...props}
        />
      )}
    </MuiIconName>
  );
}

SVGIcon.propTypes = {
  muiIconName: PropTypes.string,
  iconSrc: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SVGIcon.defaultProps = {
  muiIconName: undefined,
  iconSrc: undefined,
  color: undefined,
  width: undefined,
  height: undefined,
  size: undefined,
};
