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
  muiTextColor,
  onChange,
  orientation,
  variant,
  value,
  visibleScrollbar,
  visibleScrollButtons,
  swipeable,
  autoNavigateByArrowKeyboard,
  maxHeightPX,
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
      />
    );
  });

  const activeTabIndex = filteredChildren
    .map((child) => child.props.value)
    .indexOf(value);

  const handleChange = (event, tabId) => onChange?.(tabId);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        ...(orientation === "vertical" && {
          flexDirection: "row",
          maxHeight: maxHeightPX ?? "inherit",
        }),
      }}
    >
      <MuiTabs
        indicatorColor={muiColor}
        centered={centered}
        color={muiColor}
        muiTextColor={muiTextColor}
        onChange={handleChange}
        orientation={orientation}
        variant={
          orientation === "vertical" || visibleScrollbar
            ? "scrollable"
            : variant
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
            minWidth: "fit-content;",
          }),
          ...(orientation === "horizontal" && {
            borderBottom: 5,
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
  muiColor: PropTypes.string,
  muiTextColor: PropTypes.string,
  onChange: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  variant: PropTypes.oneOf(["fullWidth", "scrollable", "standard"]),
  value: PropTypes.string,
  visibleScrollbar: PropTypes.bool,
  visibleScrollButtons: PropTypes.oneOf(["auto", false, true]),
  swipeable: PropTypes.bool,
  autoNavigateByArrowKeyboard: PropTypes.bool,
  maxHeightPX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  visibleScrollButtons: true,
  swipeable: undefined,
  autoNavigateByArrowKeyboard: undefined,
  maxHeightPX: undefined,
};
