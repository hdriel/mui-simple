import React from "react";
import PropTypes from "prop-types";
import { Typography as MuiTypography } from "./Typography.styled";

export default function Typography({
  alignCenter,
  alignJustify,
  alignLeft,
  alignRight,
  gutterBottom,
  rows,
  paragraph,
  component,
  border,
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
  ...props
}) {
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

  return (
    <MuiTypography
      align={align}
      noWrap={!wrap || !rows}
      rows={rows}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      component={component}
      border={border}
      color={muiColor}
      customColor={customColor}
      fontSize={size}
      bold={bold}
      italic={italic}
      underline={underline}
      strike={strike}
      charsCase={charsCase}
      sup={sup}
      sub={sub}
      monospace={monospace}
      lineHeight={lineHeight}
      {...props}
    />
  );
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
};
