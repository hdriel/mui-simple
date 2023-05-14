import React from "react";
import PropTypes from "prop-types";
import { Badge as MuiBadge } from "./Badge.styled";

export default function Badge({
  variant,
  muiColor,
  color,
  content,
  hide,
  showZero,
  max,
  overlap,
  vertical,
  horizontal,
  ...props
}) {
  return (
    <MuiBadge
      color={muiColor ?? (color ? undefined : "primary")}
      customColor={color}
      badgeContent={content}
      variant={variant}
      invisible={hide}
      showZero={showZero}
      max={max}
      overlap={overlap}
      anchorOrigin={
        (vertical || horizontal) && {
          vertical: vertical ?? "top",
          horizontal: horizontal ?? "right",
        }
      }
      {...props}
    />
  );
}

Badge.propTypes = {
  muiColor: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.oneOf(["dot"]),
  hide: PropTypes.bool,
  showZero: PropTypes.bool,
  max: PropTypes.number,
  overlap: PropTypes.oneOf(["circular"]),
  vertical: PropTypes.oneOf(["top", "bottom"]),
  horizontal: PropTypes.oneOf(["right", "left"]),
};

Badge.defaultProps = {
  muiColor: undefined,
  color: undefined,
  content: 0,
  variant: undefined,
  hide: undefined,
  showZero: undefined,
  max: undefined,
  overlap: undefined,
  vertical: undefined,
  horizontal: undefined,
};
