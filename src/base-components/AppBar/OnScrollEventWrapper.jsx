import * as React from "react";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { cloneElement, useEffect, useRef } from "react";

export default function OnScrollEventWrapper({
  elevationScroll,
  hideOnScroll,
  scrollElement,
  elevation,
  children,
}) {
  const trigger = useScrollTrigger({
    target: scrollElement ?? undefined,
    threshold: elevationScroll ? 0 : undefined,
  });

  const value = elevationScroll
    ? trigger
      ? elevation ?? 4
      : 0
    : elevation ?? 0;
  const content = cloneElement(children, { elevation: value });

  return hideOnScroll ? (
    <Slide appear={false} direction="down" in={!trigger}>
      {content}
    </Slide>
  ) : (
    content
  );
}

OnScrollEventWrapper.propTypes = {
  scrollElement: PropTypes.node,
  elevationScroll: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
};

OnScrollEventWrapper.defaultProps = {
  scrollElement: undefined,
  elevationScroll: false,
  hideOnScroll: false,
  elevation: undefined,
};
