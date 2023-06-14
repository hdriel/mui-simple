import React from "react";
import PropTypes from "prop-types";
import {
  Switch as MuiSwitch,
  SwitchControlled,
  FormHelperText,
  SwitchOnOff,
} from "./Switch.styled";
import { SWITCH_STYLES } from "./Switch.consts";
import { useCustomColor } from "../../utils/helpers";

const Switch = ({
  label,
  name,
  size,
  textColor: _textColor,
  color,
  scale,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  labelPlacement,
  labelPadding,
  helperText,
  error,
  isOnOff,
  onLabel,
  offLabel,
  switchStyle,
  ...props
}) => {
  const [customColor, muiColor] = useCustomColor(color);
  const [textColor] = useCustomColor(_textColor);

  const switchControlCmp = isOnOff ? (
    <SwitchOnOff
      name={name}
      size={size}
      color={muiColor ? undefined : customColor}
      textColor={textColor}
      muiColor={muiColor}
      scale={scale}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelPlacement={labelPlacement}
      onLabel={onLabel}
      offLabel={offLabel}
      switchStyle={switchStyle}
      {...props}
    />
  ) : (
    <MuiSwitch
      name={name}
      size={size}
      color={muiColor ? undefined : customColor}
      textColor={textColor}
      muiColor={muiColor}
      scale={scale}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelPlacement={labelPlacement}
      switchStyle={switchStyle}
      {...props}
    />
  );

  const switchCmp = label ? (
    <SwitchControlled
      label={label}
      name={name}
      size={size}
      color={muiColor ? undefined : customColor}
      textColor={textColor}
      muiColor={muiColor}
      scale={scale}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      labelPlacement={labelPlacement}
      labelPadding={
        labelPadding ??
        (isOnOff || [SWITCH_STYLES.ANT, SWITCH_STYLES.IOS].includes(switchStyle)
          ? "1em"
          : "")
      }
      control={switchControlCmp}
      {...props}
    />
  ) : (
    switchControlCmp
  );

  return (
    <>
      {switchCmp}
      {helperText ? (
        <FormHelperText error={error}>{helperText}</FormHelperText>
      ) : null}
    </>
  );
};

Switch.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  scale: PropTypes.number,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  labelPlacement: PropTypes.oneOf(["top", "start", "bottom", "end"]),
  labelPadding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  switchStyle: PropTypes.oneOf(Object.values(SWITCH_STYLES)),
  helperText: PropTypes.string,
  fontSize: PropTypes.string,
};

Switch.defaultProps = {
  label: undefined,
  size: "medium",
  color: undefined,
  scale: undefined,
  checked: undefined,
  defaultChecked: undefined,
  error: undefined,
  required: undefined,
  disabled: undefined,
  labelPlacement: undefined,
  labelPadding: undefined,
  helperText: undefined,
  fontSize: undefined,
};

export default Switch;
