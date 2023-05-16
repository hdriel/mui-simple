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
      noWrap={!rows}
      rows={rows}
      gutterBottom={gutterBottom}
      paragraph={paragraph}
      component={component}
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
  paragraph: PropTypes.bool,
  component: PropTypes.string,
};

Typography.defaultProps = {
  alignCenter: undefined,
  alignJustify: undefined,
  alignLeft: undefined,
  alignRight: undefined,
  gutterBottom: undefined,
  rows: 1,
  paragraph: undefined,
  component: "span",
};
