import React from "react";
import PropTypes from "prop-types";
import { TabPanel as MuiTabPanel } from "./Tabs.styled";

export default function TabPanel({ link, open, children, ...props }) {
  return <MuiTabPanel {...props}>{open && { children }}</MuiTabPanel>;
}

TabPanel.propTypes = {
  open: PropTypes.bool,
};

TabPanel.defaultProps = {
  open: undefined,
};
