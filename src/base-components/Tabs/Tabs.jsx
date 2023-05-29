import React, { cloneElement, isValidElement } from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

import { Tab, Tabs as MuiTabs, Box } from "./Tabs.styled";

export default function Tabs({
  centered,
  muiColor,
  muiTextColor,
  onChange,
  orientation,
  variant,
  value,
  visibleScrollbar,
  visibleScrollButtons,
  swipeable,
  autoNavigateByArrowKeyboard,
  children,
  ...props
}) {
  const content = []
    .concat(children)
    .filter((child) => isValidElement(child) && child.name === "Tab")
    .map((child) =>
      cloneElement(child, { ...child.props, open: child.props.value === value })
    );

  const tabs = content
    .map((child) => child.props)
    .map((props) => ({
      iconPosition: props.iconPosition,
      label: props.label,
      value: props.value,
      open: props.value === value,
      wrapped: props.wrapped,
      disabled: props.disabled,
      disableRipple: props.disableRipple,
      icon: props.icon,
    }))
    .map((tabProps) => <Tab {...tabProps} />);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <MuiTabs
          indicatorColor={muiColor}
          centered={centered}
          muiColor={muiColor}
          muiTextColor={muiTextColor}
          onChange={onChange}
          orientation={orientation}
          variant={
            visibleScrollButtons ?? visibleScrollbar ? "scrollable" : variant
          }
          value={value}
          selectionFollowsFocus={autoNavigateByArrowKeyboard}
          visibleScrollbar={visibleScrollbar}
          allowScrollButtonsMobile
          scrollButtons={visibleScrollButtons}
          sx={{
            ...(orientation === "vertical" && {
              borderRight: 1,
              borderColor: "divider",
            }),
          }}
          {...props}
        >
          {tabs}
        </MuiTabs>
      </Box>
      {swipeable ? (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          {children}
        </SwipeableViews>
      ) : (
        children
      )}
    </Box>
  );
}

Tabs.propTypes = {
  centered: PropTypes.bool,
  muiColor: PropTypes.string,
  muiTextColor: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  variant: PropTypes.oneOf(["fullWidth", "scrollable", "standard"]),
  value: PropTypes.number,
  visibleScrollbar: PropTypes.bool,
  visibleScrollButtons: PropTypes.oneOf(["auto", false, true]),
  swipeable: PropTypes.bool,
  autoNavigateByArrowKeyboard: PropTypes.bool,
};

Tabs.defaultProps = {
  centered: undefined,
  muiColor: undefined,
  muiTextColor: undefined,
  onChange: undefined,
  orientation: undefined,
  variant: undefined,
  value: undefined,
  visibleScrollbar: undefined,
  visibleScrollButtons: undefined,
  swipeable: undefined,
  autoNavigateByArrowKeyboard: undefined,
};
