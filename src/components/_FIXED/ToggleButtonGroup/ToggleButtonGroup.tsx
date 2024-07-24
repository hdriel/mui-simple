import React from 'react';
import { ToggleButton, ToggleButtonGroup as MuiToggleButtonGroup, Container } from './ToggleButtonGroup.styled';
import { setDisplayName, useCustomColor } from '../../../utils/helpers';
import SVGIcon from '../SVGIcon/SVGIcon';
import type { ToggleButtonGroupProps } from '../../decs';
import { FormHelperText } from '../RadioButtonsGroup/RadioButtonsGroup.styled';

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    value: selectedValue,
    onChange,
    size,
    exclusive,
    orientation,
    disableRipple,
    enforceValueSet,
    data = [],
    color,
    fullWidth,
    transparent = true,
    helperText,
    helperTextAlign,
    helperTextStyle,
    error,
    wrap = false,
    sx,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const commonsValues = [].concat(selectedValue);

    function onChangeHandler(event, newValues): void {
        if (!onChange) return;

        if (enforceValueSet) {
            if (exclusive && newValues !== null) onChange(event, newValues);
            if (!exclusive && newValues?.length) onChange(event, newValues);
        } else {
            onChange(event, newValues);
        }
    }

    function onButtonClickHandler(value, event): void {
        if (!event.target.value) {
            event.stopPropagation();
            if (exclusive) {
                event.target.value = null;
                onChangeHandler?.(event, event.target.value);
            } else {
                event.target.value = commonsValues.filter((cv) => cv !== value);
                onChangeHandler?.(event, event.target.value);
            }
        }
    }

    return (
        <Container helperTextAlign={helperTextAlign} fullWidth={fullWidth}>
            <MuiToggleButtonGroup
                color={muiColor as any}
                customColor={muiColor ? undefined : customColor}
                orientation={orientation}
                value={(exclusive ? selectedValue : commonsValues) as string}
                exclusive={exclusive}
                size={size}
                onChange={onChangeHandler}
                fullWidth={fullWidth}
                wrap={wrap}
                sx={{ bgcolor: transparent ? 'transparent' : undefined, ...sx }}
                {...props}
            >
                {data
                    ? []
                          .concat(data)
                          .filter(Boolean)
                          .map(({ value, disabled, component, ...toggleProps }, index) => (
                              <ToggleButton
                                  key={index}
                                  name={value}
                                  disableRipple={disableRipple}
                                  value={value}
                                  disabled={disabled}
                                  onClick={onButtonClickHandler.bind(null, value)}
                                  sx={{ ...(fullWidth && { flex: '1 1 auto' }), ...toggleProps.sx }}
                                  {...toggleProps}
                              >
                                  {typeof component === 'string' ? <SVGIcon>{component}</SVGIcon> : component}
                              </ToggleButton>
                          ))
                    : null}
            </MuiToggleButtonGroup>
            {helperText && (
                <FormHelperText error={error} sx={{ ...helperTextStyle }}>
                    {helperText}
                </FormHelperText>
            )}
        </Container>
    );
};

setDisplayName(ToggleButtonGroup, 'ToggleButtonGroup');

export type { ToggleButtonGroupProps } from '../../decs';
export default ToggleButtonGroup;
