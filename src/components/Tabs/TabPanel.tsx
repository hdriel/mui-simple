import React from "react";
import PropTypes from "prop-types";
import { TabPanel as MuiTabPanel } from "./Tabs.styled";

export default function TabPanel({ link, open, children, ...props }) {
  return open ? <MuiTabPanel {...props}>{children}</MuiTabPanel> : undefined;
}

TabPanel.propTypes = {
  open: PropTypes.bool,
};

TabPanel.defaultProps = {
  open: undefined,
};
