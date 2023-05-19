import React from "react";
import PropTypes from "prop-types";
import { Paper as MuiPaper } from "./Paper.styled";

export default function Paper({
  width,
  height,
  elevation,
  variant,
  square,
  muiColor,
  customColor,
  textColor,
  imageSrc,
  imageOpacity,
  imageLayout,
  ...props
}) {
  return (
    <MuiPaper
      elevation={elevation}
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
  muiColor: PropTypes.bool,
  customColor: PropTypes.bool,
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
  muiColor: undefined,
  customColor: undefined,
  textColor: undefined,
  imageSrc: undefined,
  imageOpacity: 0.5,
  imageLayout: "cover",
};
