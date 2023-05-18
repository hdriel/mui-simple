import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import { Border, Typography as MuiTypography } from "./Typography.styled";
import Tooltip from "../Tooltip/Tooltip";
import useElementSize from "../../hooks/useElementSize";
import { useEllipsisActive } from "../../hooks/useEllipsisActive";

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
  const [ref, isEllipsis] = useEllipsisActive();

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
    const childrenAsTooltip = tooltip && typeof tooltip === "boolean";
    const diffTooltip = tooltip && typeof tooltip === "string";
    if (!isEllipsis) return undefined;
    return (childrenAsTooltip ? children : diffTooltip) || undefined;
  }, [isEllipsis, tooltip]);

  const cmp = typographyProps.noWrap ? (
    <MuiTypography ref={ref} {...typographyProps}>
      {children}&nbsp;
    </MuiTypography>
  ) : (
    <Border
      width={width}
      rows={rows}
      border={border}
      noWrap={noWrap}
      autoWidth={autoWidth}
    >
      <MuiTypography ref={ref} {...typographyProps}>
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
  tooltip: true,
};
