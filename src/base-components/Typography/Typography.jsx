import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Border, Typography as MuiTypography } from "./Typography.styled";
import Tooltip from "../Tooltip/Tooltip";

export default function Typography({
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  gutterBottom,
  paragraph,
  component,
  muiColor,
  customColor,
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
  children,
  width,
  rows,
  border,
  noWrap,
  autoWidth,
  ...props
}) {
  const ref = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

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

  useLayoutEffect(() => {
    const show = ref.current?.offsetWidth < ref.current?.scrollWidth;
    console.log("show", show);
    if (show !== showTooltip) setShowTooltip(show);
  });

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
  };

  const tooltipMessage = useMemo(
    () =>
      showTooltip && tooltip
        ? typeof tooltip === "boolean"
          ? children
          : tooltip
        : undefined,
    [showTooltip, tooltip]
  );

  const cmp = typographyProps.noWrap ? (
    <MuiTypography
      title={tooltipMessage}
      ref={ref}
      {...typographyProps}
      {...props}
    >
      {children}&nbsp;
    </MuiTypography>
  ) : (
    <Border
      ref={ref}
      width={width}
      rows={rows}
      border={border}
      noWrap={noWrap}
      autoWidth={autoWidth}
    >
      <MuiTypography ref={ref} {...typographyProps} {...props}>
        {children}&nbsp;
      </MuiTypography>
    </Border>
  );

  return <Tooltip title={tooltipMessage}>{cmp}</Tooltip>;
}

Typography.propTypes = {
  alignCenter: PropTypes.bool,
  alignJustify: PropTypes.bool,
  alignLeft: PropTypes.bool,
  alignRight: PropTypes.bool,
  gutterBottom: PropTypes.bool,
  rows: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
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
};
