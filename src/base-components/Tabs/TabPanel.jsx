import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "./Tabs.styled";

export default function Tab({
  iconPosition,
  label,
  value,
  wrapped,
  disabled,
  disableRipple,
  icon,
  ...props
}) {
  return (
    <MuiTab
      iconPosition={iconPosition}
      label={label}
      value={value}
      wrapped={wrapped}
      disabled={disabled}
      disableRipple={disableRipple}
      icon={icon}
      {...props}
    />
  );
}

Tab.propTypes = {
  iconPosition: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  label: PropTypes.string,
  value: PropTypes.number,
  wrapped: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
};

Tab.defaultProps = {
  iconPosition: undefined,
  label: undefined,
  value: undefined,
  wrapped: undefined,
  disabled: undefined,
  disableRipple: undefined,
  icon: undefined,
};
