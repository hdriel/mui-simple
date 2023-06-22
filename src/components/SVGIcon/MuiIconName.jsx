import { createElement } from "react";
import PropTypes from "prop-types";
import * as MUIIcon from "@mui/icons-material";
import { numberToPx } from "../../utils/helpers";

export default function MuiIconName({
  name,
  color,
  width,
  height,
  children,
  ...props
}) {
  const Icon = name && MUIIcon[name];

  return Icon
    ? createElement(Icon, {
        ...props,
        style: { width: numberToPx(width), height: numberToPx(height), color },
      })
    : children;
}

MuiIconName.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MuiIconName.defaultProps = {
  name: undefined,
  color: undefined,
  width: undefined,
  height: undefined,
};
