import React from "react";
import PropTypes from "prop-types";

import { useScrollTrigger, Box, Fade } from "@mui/material";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@mui/icons-material";
import { isDefined } from "../../utils/helpers";
import Fab from "../FloatingActionButton/FloatingActionButton";

export function ScrollTop({
  defaultFabProps,
  scrollToId,
  bottom,
  right,
  left,
  top,
  children,
  window,
  target,
  ...props
}) {
  bottom = ![left, right, top, bottom].some((pos) => isDefined(pos))
    ? bottom
    : 16;
  right = ![left, right, top, bottom].some((pos) => isDefined(pos))
    ? right
    : 16;
  console.log([left, right, top, bottom]);
  console.log("bottom", bottom);
  console.log("right", right);

  const trigger = useScrollTrigger({
    target: target?.current ?? (window ? window() : undefined),
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor =
      scrollToId &&
      (event.target.ownerDocument || document).querySelector(scrollToId);

    if (anchor) anchor.scrollIntoView({ block: "center" });
  };

  return !scrollToId ? undefined : (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom, right, left, top }}
        {...props}
      >
        {children || (
          <Fab size="small" {...defaultFabProps}>
            <KeyboardArrowUpIcon />
          </Fab>
        )}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  scrollToId: PropTypes.string,
  bottom: PropTypes.number,
  right: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number,
  defaultFabProps: PropTypes.object,
};

ScrollTop.defaultProps = {
  scrollToId: undefined,
  bottom: undefined,
  right: undefined,
  left: undefined,
  top: undefined,
  defaultFabProps: undefined,
};
