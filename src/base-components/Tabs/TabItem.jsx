import React from "react";
import PropTypes from "prop-types";
import { Tab as MuiTab } from "./Tabs.styled";
import Tooltip from "../Tooltip/Tooltip";
import { TOOLTIP_PLACEMENTS } from "../Tooltip/Tooltip.consts";

export default function TabItem({
  link,
  onClick,
  value,
  open,
  tooltipProps,
  orientation,
  children,
  ...props
}) {
  return (
    <Tooltip
      {...tooltipProps}
      placement={
        tooltipProps?.placement !== undefined
          ? tooltipProps?.placement
          : orientation === "vertical"
          ? "right"
          : "bottom"
      }
    >
      <MuiTab
        value={value}
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
      />
    </Tooltip>
  );
}

TabItem.propTypes = {
  iconPosition: PropTypes.oneOf(["bottom", "end", "start", "top"]),
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  label: PropTypes.string,
  value: PropTypes.string,
  open: PropTypes.bool,
  wrapped: PropTypes.bool,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  icon: PropTypes.node,
  link: PropTypes.string,
  onClick: PropTypes.func,
  tooltipProps: PropTypes.shape({
    title: PropTypes.string,
    placement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
    followCursor: PropTypes.bool,
    bgcolor: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
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
  tooltipProps: undefined,
};
