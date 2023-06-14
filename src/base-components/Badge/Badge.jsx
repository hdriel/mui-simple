import React from "react";
import PropTypes from "prop-types";
import { Badge as MuiBadge } from "./Badge.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Badge({
  variant,
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
  const [customColor, muiColor] = useCustomColor(color);
  return (
    <MuiBadge
      color={muiColor}
      customColor={muiColor ? undefined : customColor}
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
