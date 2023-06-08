import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import Color from "color";
import {
  Opacity as OpacityIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";
import { ClickAwayListener } from "@mui/material";

import Input from "./TextField";
import Button from "../Button/Button";
import Snackbar from "../Snackbar/Snackbar";
import { copyToClipboard } from "../../utils/helpers";
import Slider from "../Slider/Slider";
import { Box } from "./TextField.styled";

const VALUE_FORMAT = { hex: "rgba", rgba: "hsl", hsl: "hex" };

export default function InputColor({
  variant,
  value,
  disabled,
  copyMessage,
  opacityLabel,
  customColor,
  copyAction,
  ...props
}) {
  const colorActive = value;
  const ref = useRef(null);
  const [width, setWidth] = useState(100);

  const [showAlert, setShowAlert] = useState(false);
  const [valueFormat, setValueFormat] = useState("hex");
  const [opacity, setOpacity] = useState(100);

  const [showOpacitySlider, setShowOpacitySlider] = useState(false);

  const opacityLabelTooltip = (opacity) => `${opacityLabel}: ${opacity / 100}`;
  const [valueLabel, showContrastColor] = useMemo(() => {
    const color = Color(value);

    const convertedColor = Color(value).alpha(opacity / 100);
    const colorStr =
      {
        hex: convertedColor.hex(),
        hsl: convertedColor.hsl().string(),
      }[valueFormat] ?? convertedColor.string();

    const showContrastColor = color.luminosity() > 0.7;

    return [colorStr, showContrastColor];
  }, [valueFormat, value, opacity]);

  const showOpacityHandler = () => setShowOpacitySlider(!showOpacitySlider);

  const handleChange = (event, newValue) => setOpacity(newValue);

  const handleClick = () => {
    const copied = copyToClipboard(valueLabel);
    setShowAlert(copied);
  };

  useEffect(() => {
    const boxWidth = ref.current?.clientWidth ?? 0;
    const padding =
      { filled: 102, standard: 82, outlined: 108 }[variant] ?? 100;
    const inputWidth = boxWidth - padding;
    if (inputWidth > 0) setWidth(inputWidth);
  }, [variant]);

  let sliderPositions;
  switch (variant) {
    case "filled":
      sliderPositions = { bottom: "-8px", left: "5px" };
      break;
    case "standard":
      sliderPositions = { bottom: "-11px", left: "-5px" };
      break;
    case "outlined":
    default:
      sliderPositions = { bottom: "0", left: "0.5em" };
  }

  return (
    <ClickAwayListener onClickAway={() => setShowOpacitySlider(false)}>
      <Box sx={{ position: "relative", width: "100%" }} ref={ref}>
        <Input
          colorActive={showContrastColor ? "#636363" : colorActive}
          {...props}
          variant={variant}
          disabled={disabled}
          type="color"
          endCmp={
            <>
              <Button
                disabled={disabled}
                onClick={showOpacityHandler}
                customColor={showContrastColor ? "#636363" : value}
                icon={<OpacityIcon />}
                tooltipProps={{
                  title: opacityLabelTooltip(opacity),
                  placement: "top",
                }}
              />
              {copyAction ? (
                <Button
                  onClick={handleClick}
                  customColor={showContrastColor ? "#636363" : value}
                  icon={<ContentCopyIcon />}
                  onRightClick={() => setValueFormat(VALUE_FORMAT[valueFormat])}
                  tooltipProps={{ title: valueLabel, placement: "top" }}
                />
              ) : (
                valueLabel
              )}
            </>
          }
        />
        {showOpacitySlider && (
          <Box sx={{ position: "absolute", width: width, ...sliderPositions }}>
            <Slider
              customColor={{
                track: showContrastColor
                  ? "rgba(0,0,0,0.2)"
                  : "rgba(255,255,255,0.2)",
                thumb: showContrastColor ? "#000000" : "#FFFFFF",
              }}
              value={opacity}
              disabled={disabled}
              onChange={handleChange}
              valueLabelFormat={opacityLabelTooltip}
            />
          </Box>
        )}
        <Snackbar
          open={showAlert}
          onClose={() => setShowAlert(false)}
          autoHideDuration={1500}
          message={copyMessage}
        />
      </Box>
    </ClickAwayListener>
  );
}

InputColor.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  customColor: PropTypes.string,
  copyMessage: PropTypes.string,
  copyToClipboard: PropTypes.bool,
};

InputColor.defaultProps = {
  disabled: undefined,
  value: "#000000",
  customColor: undefined,
  copyMessage: "Copied to clipboard",
  copyAction: true,
  opacityLabel: "opacity",
};
