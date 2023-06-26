import React from "react";
import PropTypes from "prop-types";
import { Paper as MuiPaper } from "./Paper.styled";
import { useCustomColor } from "../../utils/helpers";

export default function Paper({
  width,
  height,
  elevation,
  variant,
  square,
  color,
  textColor: _textColor,
  imageSrc,
  imageOpacity,
  imageLayout,
  ...props
}) {
  const [customColor, muiColor] = useCustomColor(color);
  const [textColor] = useCustomColor(_textColor);

  return (
    <MuiPaper
      elevation={variant !== "outlined" ? elevation : undefined}
      variant={variant}
      square={square}
      width={width}
      height={height}
      muiColor={muiColor}
      customColor={customColor}
      textColor={textColor}
      imageSrc={imageSrc}
      imageOpacity={imageOpacity}
      imageLayout={imageLayout}
      {...props}
    />
  );
}

Paper.propTypes = {
  elevation: PropTypes.oneOf(Array.from({ length: 25 }, (_, i) => i)), // 0-24
  variant: PropTypes.oneOf(["elevation", "outlined"]),
  square: PropTypes.bool,
  color: PropTypes.string,
  textColor: PropTypes.string,
  imageSrc: PropTypes.string,
  imageOpacity: PropTypes.number,
  imageLayout: PropTypes.oneOfType([
    PropTypes.oneOf([
      "contain",
      "cover",
      "auto",
      "inherit",
      "auto auto",
      "initial",
      "revert",
      "revert-layer",
      "unset",
    ]),
    PropTypes.string,
  ]),
};

Paper.defaultProps = {
  elevation: undefined,
  variant: undefined,
  square: undefined,
  color: undefined,
  textColor: undefined,
  imageSrc: undefined,
  imageOpacity: 0.5,
  imageLayout: "cover",
};
