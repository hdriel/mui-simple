import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "./Tabs.styled";

export default function TabItem({
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
      onClick={
        link
          ? (event, value) => {
              event.preventDefault();
              onClick?.(event, value);
            }
          : undefined
      }
      {...props}
    >
      {open && { children }}
    </MuiTab>
  );
}

TabItem.propTypes = {
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

TabItem.defaultProps = {
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
