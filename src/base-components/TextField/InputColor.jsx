import React, { useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash/debounce";
import Color from "color";
import {
  Opacity as OpacityIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";

import Input from "./TextField";
import Button from "../Button/Button";
import Snackbar from "../Snackbar/Snackbar";
import { copyToClipboard } from "../../utils/helpers";
import Slider from "../Slider/Slider";
import { Box } from "./TextField.styled";

const VALUE_FORMAT = { hex: "rgba", rgba: "hsl", hsl: "hex" };

export default function InputColor({
  value,
  disabled,
  copyMessage,
  opacityLabel,
  customColor,
  copyToClipboard: _copyToClipboard,
  ...props
}) {
  const activeColor = value;
  const ref = useRef(null);
  const [width, setWidth] = useState(100);

  const [showAlert, setShowAlert] = useState(false);
  const [valueFormat, setValueFormat] = useState("hex");
  const [opacity, setOpacity] = useState(100);

  const [showOpacitySlider, setShowOpacitySlider] = useState(false);
  const [setShowOpacitySliderDebounce] = useState(() =>
    debounce(setShowOpacitySlider, 1000, { leading: false, trailing: true })
  );

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

  const handleChange = (event, newValue) => {
    setOpacity(newValue);
    setShowOpacitySliderDebounce(false);
  };

  const handleClick = () => {
    const copied = copyToClipboard(valueLabel);
    setShowAlert(copied);
  };

  useEffect(() => {
    const boxWidth = ref.current?.clientWidth;
    const inputWidth = boxWidth - 100;
    if (inputWidth > 0) setWidth(inputWidth);
  }, []);

  return (
    <Box sx={{ position: "relative", width: "100%" }} ref={ref}>
      <Input
        activeColor={showContrastColor ? "#636363" : activeColor}
        {...props}
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
            {_copyToClipboard ? (
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
        <Box
          sx={{
            position: "absolute",
            top: "0.5em",
            left: "0.5em",
            width: width,
          }}
        >
          <Slider
            customColor={value}
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
  copyToClipboard: true,
  opacityLabel: "opacity",
};
