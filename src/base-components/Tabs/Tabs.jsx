import React, { isValidElement, Children } from "react";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";

import { Tabs as MuiTabs, Box } from "./Tabs.styled";
import TabItem from "./TabItem";
import TabPanel from "./TabPanel";

export default function Tabs({
  centered,
  muiColor,
  customColor,
  onChange,
  orientation,
  variant,
  value,
  visibleScrollbar,
  visibleScrollButtons,
  swipeable,
  autoNavigateByArrowKeyboard,
  verticalMaxFixedHeight,
  verticalTabWidth,
  reverse,
  children,
  ...props
}) {
  const theme = useTheme();

  const filteredChildren = []
    .concat(children)
    .filter((child) => isValidElement(child) && child.type?.name === "Tab");

  const tabPanels = filteredChildren.map(({ props }, index) => (
    <TabPanel
      key={index}
      index={index}
      dir={theme.direction}
      {...props}
      open={props.value === value}
    />
  ));

  const tabs = filteredChildren.map(({ props }, index) => {
    return (
      <TabItem
        children={undefined}
        key={index}
        iconPosition={props.iconPosition}
        label={props.label}
        value={String(props.value ?? index).toString()}
        open={props.value === value}
        wrapped={props.wrapped}
        disabled={props.disabled}
        disableRipple={props.disableRipple}
        icon={props.icon}
        tooltipProps={props.tooltipProps}
        orientation={orientation}
      />
    );
  });

  const activeTabIndex = filteredChildren
    .map((child) => child.props.value)
    .indexOf(value);

  const handleChange = (event, tabId) => onChange?.(tabId);
  const isScrollableVariant =
    orientation === "vertical" || visibleScrollbar || variant === "scrollable";

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: reverse ? "column-reverse" : "column",
        ...(orientation === "vertical" && {
          flexDirection: reverse ? "row-reverse" : "row",
          maxHeight: verticalMaxFixedHeight ?? "inherit",
        }),
      }}
    >
      <MuiTabs
        centered={isScrollableVariant ? undefined : centered}
        customColor={muiColor ?? customColor}
        onChange={handleChange}
        orientation={orientation}
        variant={isScrollableVariant ? "scrollable" : variant}
        value={value}
        selectionFollowsFocus={autoNavigateByArrowKeyboard}
        visibleScrollbar={visibleScrollbar}
        allowScrollButtonsMobile
        scrollButtons={visibleScrollButtons}
        sx={{
          ...(orientation === "vertical" && {
            borderRight: 1,
            borderColor: "divider",
            minWidth: "fit-content",
            width: verticalTabWidth,
          }),
          ...((orientation === undefined || orientation === "horizontal") && {
            borderBottom: 1,
            borderColor: "divider",
          }),
        }}
        {...props}
      >
        {tabs}
      </MuiTabs>

      {swipeable ? (
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeTabIndex}
          onChangeIndex={(event, tabIndex) => {
            const tabId = filteredChildren[tabIndex]?.props.value;
            onChange(tabId);
          }}
          style={{ width: "100%", height: "100%" }}
        >
          {tabPanels}
        </SwipeableViews>
      ) : (
        tabPanels
      )}
    </Box>
  );
}

Tabs.propTypes = {
  centered: PropTypes.bool,
  customColor: PropTypes.string,
  muiColor: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  variant: PropTypes.oneOf(["fullWidth", "scrollable", "standard"]),
  value: PropTypes.string,
  visibleScrollbar: PropTypes.bool,
  visibleScrollButtons: PropTypes.oneOf(["auto", false, true]),
  swipeable: PropTypes.bool,
  autoNavigateByArrowKeyboard: PropTypes.bool,
  verticalMaxFixedHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  verticalTabWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  reverse: PropTypes.bool,
};

Tabs.defaultProps = {
  centered: undefined,
  customColor: undefined,
  muiColor: undefined,
  onChange: undefined,
  orientation: undefined,
  variant: undefined,
  value: undefined,
  visibleScrollbar: undefined,
  visibleScrollButtons: true,
  swipeable: undefined,
  autoNavigateByArrowKeyboard: undefined,
  verticalMaxFixedHeight: undefined,
  verticalTabWidth: undefined,
  reverse: undefined,
};
