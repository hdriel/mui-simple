import React, { useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Border, Typography as MuiTypography } from "./Typography.styled";
import Tooltip from "../Tooltip/Tooltip";
import { useEllipsisActive } from "../../hooks/useEllipsisActive";
import { TOOLTIP_PLACEMENTS } from "../Tooltip/Tooltip.consts";
import { useCustomColor } from "../../utils/helpers";

export default function Typography({
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  gutterBottom,
  paragraph,
  component,
  color,
  bgColor,
  wrap,
  size,
  bold,
  italic,
  underline,
  strike,
  charsCase,
  sup,
  sub,
  monospace,
  lineHeight,
  tooltip,
  tooltipPlacement,
  children,
  width,
  rows,
  border,
  noWrap,
  autoWidth,
  showTooltipOnEllipsis,
  onEllipsisChange,
  sx,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);
  const [customBGColor] = useCustomColor(bgColor);

  const ellipsisMaxRows = !wrap || !rows ? 0 : +rows;
  const [ref, isEllipsis] = useEllipsisActive({
    active: showTooltipOnEllipsis && tooltip !== false,
    text: children,
    maxRows: ellipsisMaxRows,
    noWrap: !wrap || !rows,
  });

  let align;
  switch (true) {
    case alignCenter:
      align = "center";
      break;
    case alignJustify:
      align = "justify";
      break;
    case alignLeft:
      align = "left";
      break;
    case alignRight:
      align = "right";
      break;
    default:
      align = "inherit";
      break;
  }

  const typographyProps = {
    align: align,
    noWrap: !wrap || !rows,
    rows: typeof rows === "boolean" ? +rows : rows,
    gutterBottom: gutterBottom,
    paragraph: paragraph,
    component: component,
    border: border,
    color: muiColor,
    customColor: customColor,
    bgColor: customBGColor,
    fontSize: size,
    bold: bold,
    italic: italic,
    underline: underline,
    strike: strike,
    charsCase: charsCase,
    sup: sup,
    sub: sub,
    monospace: monospace,
    lineHeight: lineHeight,
    ...props,
  };

  const tooltipMessage = useMemo(() => {
    let [defaultTooltip, childrenTooltip, customTooltip] = [
      children,
      tooltip === undefined || (typeof tooltip === "boolean" && tooltip)
        ? children
        : undefined,
      typeof tooltip === "string" && tooltip ? tooltip : undefined,
    ];

    if (tooltip === false || (showTooltipOnEllipsis && !isEllipsis)) {
      return undefined;
    }
    if (
      showTooltipOnEllipsis &&
      isEllipsis &&
      (tooltip === true || tooltip === undefined)
    ) {
      return customTooltip ?? childrenTooltip;
    }

    const result = customTooltip ?? childrenTooltip ?? defaultTooltip;
    return Array.isArray(result) ? result.join("") : result;
  }, [showTooltipOnEllipsis, isEllipsis, tooltip, children]);

  const cmp = typographyProps.noWrap ? (
    <MuiTypography ref={ref} sx={sx} {...typographyProps}>
      {children}&nbsp;
    </MuiTypography>
  ) : (
    <Border
      width={width}
      rows={rows}
      border={border}
      noWrap={noWrap}
      autoWidth={autoWidth}
      sx={sx}
    >
      <MuiTypography ref={ref} {...typographyProps}>
        {children}&nbsp;
      </MuiTypography>
    </Border>
  );

  useEffect(() => {
    onEllipsisChange?.(isEllipsis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEllipsis]);

  return (
    <Tooltip title={tooltipMessage} placement={tooltipPlacement}>
      {cmp}
    </Tooltip>
  );
}

Typography.propTypes = {
  alignCenter: PropTypes.bool,
  alignJustify: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignRight: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  rows: PropTypes.number,
  wrap: PropTypes.bool,
  paragraph: PropTypes.bool,
  component: PropTypes.string,
  border: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  bold: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  strike: PropTypes.bool,
  charsCase: PropTypes.oneOf(["upper", "lower", "capital"]),
  sup: PropTypes.bool,
  sub: PropTypes.bool,
  monospace: PropTypes.bool,
  lineHeight: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  autoWidth: PropTypes.bool,
  tooltip: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  showTooltipOnEllipsis: PropTypes.bool,
  tooltipPlacement: PropTypes.oneOf(TOOLTIP_PLACEMENTS),
  onEllipsisChange: PropTypes.func,
};

Typography.defaultProps = {
  alignCenter: undefined,
  alignJustify: undefined,
  alignLeft: undefined,
  alignRight: undefined,
  gutterBottom: undefined,
  rows: 1,
  wrap: true,
  paragraph: undefined,
  component: "span",
  border: undefined,
  size: undefined,
  bold: undefined,
  italic: undefined,
  underline: undefined,
  strike: undefined,
  charsCase: undefined,
  sup: undefined,
  sub: undefined,
  monospace: undefined,
  lineHeight: undefined,
  width: undefined,
  autoWidth: true,
  tooltip: undefined,
  showTooltipOnEllipsis: true,
  onEllipsisChange: undefined,
};
