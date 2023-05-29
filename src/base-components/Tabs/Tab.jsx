import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "./Tabs.styled";

export default function Tab({
  link,
  onClick,
  value,
  open,
  children,
  ...props
}) {
  return (
    <MuiTab
      role="tabpanel"
      hidden={!open}
      id={`simple-tabpanel-${value}`}
      aria-labelledby={`simple-tab-${value}`}
      component={link ? "a" : undefined}
      href={link}
      onClick={(event) => {
        event.preventDefault();
        onClick?.(event);
      }}
      {...props}
    >
      {open && { children }}
    </MuiTab>
  );
}

Tab.propTypes = {
  iconPosition: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  label: PropTypes.string,
  value: PropTypes.string,
  open: PropTypes.bool,
  wrapped: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

Tab.defaultProps = {
  iconPosition: undefined,
  label: undefined,
  value: undefined,
  open: undefined,
  wrapped: undefined,
  disabled: undefined,
  disableRipple: undefined,
  icon: undefined,
  link: undefined,
  onClick: undefined,
};
