import React from "react";
import PropTypes from "prop-types";
import { TabPanel } from "./Tabs.styled";

function Tab({ link, onClick, value, open, children, ...props }) {
  return (
    <TabPanel
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
    </TabPanel>
  );
}

Tab.propTypes = {
  iconPosition: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  label: PropTypes.string,
  value: PropTypes.number,
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
