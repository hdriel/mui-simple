import React, { cloneElement, isValidElement } from "react";
import PropTypes from "prop-types";
import { Box, Fade, useScrollTrigger, Slide } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import Fab from "../FloatingActionButton/FloatingActionButton";
import { isDefined } from "../../utils/helpers";

export default function OnScrollEventWrapper({
  scrollToTop,
  elevationScroll,
  hideOnScroll,
  scrollElement,
  elevation,
  defaultFabProps,
  scrollToId,
  bottom,
  right,
  left,
  top,
  children,
}) {
  const trigger = useScrollTrigger({
    target: scrollElement ?? undefined,
    threshold:
      scrollToTop && scrollToId ? 100 : elevationScroll ? 0 : undefined,
    disableHysteresis: true,
  });

  const content = cloneElement(children, {
    elevation: elevationScroll
      ? trigger
        ? elevation ?? 4
        : 0
      : elevation ?? 0,
  });

  const handleClick = (event) => {
    const anchor =
      scrollToId &&
      (event.target.ownerDocument || document).querySelector(scrollToId);

    anchor?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  bottom = [top, bottom].some(isDefined) ? bottom : 16;
  right = [left, right].some(isDefined) ? right : 16;

  const fab =
    scrollToTop && scrollToId ? (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{
            position: "fixed",
            bottom,
            right,
            left,
            top,
          }}
        >
          {isValidElement(scrollToTop) ? (
            scrollToTop
          ) : (
            <Fab size="small" {...defaultFabProps}>
              <KeyboardArrowUpIcon />
            </Fab>
          )}
        </Box>
      </Fade>
    ) : undefined;

  return (
    <>
      {hideOnScroll ? (
        <Slide appear={false} direction="down" in={!trigger}>
          {content}
        </Slide>
      ) : (
        content
      )}
      {fab}
    </>
  );
}

OnScrollEventWrapper.propTypes = {
  scrollElement: PropTypes.node,
  elevationScroll: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
  scrollToId: PropTypes.string,
  bottom: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  defaultFabProps: PropTypes.object,
  scrollToTop: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  scrollToTopProps: PropTypes.object,
};

OnScrollEventWrapper.defaultProps = {
  scrollElement: undefined,
  elevationScroll: false,
  hideOnScroll: false,
  elevation: undefined,
  scrollToId: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  top: undefined,
  defaultFabProps: undefined,
  scrollToTop: false,
  scrollToTopProps: undefined,
};
