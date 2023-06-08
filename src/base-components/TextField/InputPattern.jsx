import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { IMaskMixin } from "react-imask";
import { ClickAwayListener, Box } from "@mui/material";

import Input from "./TextField";
import placeholder from "lodash/fp/placeholder";
import { isDefined } from "../../utils/helpers";

const MaskedInput = IMaskMixin(
  ({ inputRef, value, onChange, ...otherProps }) => {
    return (
      <Input
        inputRef={inputRef}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
    );
  }
);

export default function InputPattern({
  name,
  mask,
  definitions,
  overwrite,
  blocks,
  autofix,
  lazy: _lazy,
  unmask,
  inputRef,
  value: _value,
  showMaskAsPlaceholder,
  onFocus,
  onChange,
  placeholder,
  onAccept,
  ...props
}) {
  const [value, setValue] = useState(_value);
  const [unmaskedValue, setUnmaskedValue] = useState(_value);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const lazy = useMemo(() => {
    if (isDefined(_lazy)) {
      return !!_lazy;
    }
    if (!isOnFocus) {
      return true;
    }
    if (!unmaskedValue && isDefined(placeholder)) {
      return true;
    }
    if (showMaskAsPlaceholder) {
      return false;
    }
    return !unmaskedValue;
  }, [_lazy, isOnFocus, placeholder, showMaskAsPlaceholder, unmaskedValue]);

  useEffect(() => {
    if (!isOnFocus) {
      if (!unmaskedValue) {
        setValue("");
        onChange?.({ target: { name, value: "" } });
      } else {
        onChange?.({ target: { name, value } });
      }
    }
  }, [isOnFocus]);

  return (
    <ClickAwayListener onClickAway={() => setIsOnFocus(false)}>
      <Box>
        <MaskedInput
          {...props}
          name={name}
          inputRef={inputRef}
          value={value}
          mask={mask}
          definitions={definitions}
          blocks={blocks}
          overwrite={overwrite}
          autofix={autofix}
          lazy={lazy}
          unmask={unmask}
          onFocus={(e) => {
            setIsOnFocus(true);
            onFocus?.(e);
          }}
          onAccept={(value, mask) => {
            setValue(value);
            setUnmaskedValue(mask._unmaskedValue);
            onAccept?.(value, mask);
          }}
        />
      </Box>
    </ClickAwayListener>
  );
}

InputPattern.propTypes = {
  mask: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
    PropTypes.array,
  ]),
  definitions: PropTypes.object,
  blocks: PropTypes.object,
  overwrite: PropTypes.bool,
  autofix: PropTypes.bool,
  lazy: PropTypes.bool,
  unmask: PropTypes.bool,
  showMaskAsPlaceholder: PropTypes.bool,
  placeholder: PropTypes.string,
};

InputPattern.defaultProps = {
  mask: undefined,
  definitions: undefined,
  blocks: undefined,
  overwrite: undefined,
  autofix: undefined,
  lazy: undefined,
  unmask: undefined,
  showMaskAsPlaceholder: true,
  placeholder: undefined,
};
