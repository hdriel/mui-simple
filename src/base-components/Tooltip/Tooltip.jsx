import React, { isValidElement, useEffect } from "react";
import PropTypes from "prop-types";
import { isForwardRef } from "react-is";
import { Tooltip as MuiTooltip, Zoom } from "@mui/material";
import { CustomChildTooltipWrapper } from "./Tooltip.helper";
import { TOOLTIP_PLACEMENTS } from "./Tooltip.consts";

export default function Tooltip({ title, placement, children, ...props }) {
  const isValidTooltipProps = title && isValidElement(children);

  // useEffect(() => {
  //   if (!isValidTooltipProps) console.warn("Invalid Tooltip children or title");
  // }, [isValidTooltipProps]);

  return isValidTooltipProps ? (
    <MuiTooltip
      TransitionComponent={Zoom}
      title={title}
      arrow
      placement={placement}
      {...props}
    >
      {isForwardRef(children) ? (
        children
      ) : (
        <CustomChildTooltipWrapper>{children}</CustomChildTooltipWrapper>
      )}
    </MuiTooltip>
  ) : (
    children
  );
}

Tooltip.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
};

Tooltip.defaultProps = {
  title: undefined,
  placement: "bottom",
};
