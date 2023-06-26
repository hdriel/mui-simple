import React, { isValidElement } from "react";
import PropTypes from "prop-types";
import { isForwardRef } from "react-is";
import { Tooltip as MuiTooltip, Zoom } from "./Tooltip.styled";
import { CustomChildTooltipWrapper } from "./Tooltip.helper";
import { TOOLTIP_PLACEMENTS } from "./Tooltip.consts";

export default function Tooltip({
  title,
  placement,
  followCursor,
  bgcolor,
  color,
  fontSize,
  lineHeight,
  children,
  ...props
}) {
  const isValidTooltipProps = title && isValidElement(children);

  return isValidTooltipProps ? (
    <MuiTooltip
      TransitionComponent={Zoom}
      title={title}
      arrow
      followCursor={followCursor}
      placement={placement}
      componentsProps={{
        tooltip: {
          sx: {
            bgcolor,
            color,
            fontSize,
            lineHeight,
            "& .MuiTooltip-arrow": { color: bgcolor },
          },
        },
      }}
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
  followCursor: PropTypes.bool,
  bgcolor: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tooltip.defaultProps = {
  title: undefined,
  placement: "bottom",
  followCursor: undefined,
  bgcolor: undefined,
  color: undefined,
  fontSize: 16,
  lineHeight: 1.2,
};
