import React from 'react';
import { ToggleButton, ToggleButtonGroup as MuiToggleButtonGroup } from './ToggleButtonGroup.styled';
import { useCustomColor } from '../../utils/helpers';
import type { ToggleButtonGroupProps } from '../decs';
import SVGIcon from '../SVGIcon/SVGIcon';

const ToggleButtonGroup: React.FC<ToggleButtonGroupProps> = ({
    value: selectedValue,
    onChange,
    size,
    exclusive,
    orientation,
    disableRipple,
    enforceValueSet,
    data,
    color,
    fullWidth,
    ...props
}): React.ReactElement => {
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
            onChangeHandler?.(event, exclusive ? null : commonsValues.filter((cv) => cv !== value));
        }
    }

    return (
        <MuiToggleButtonGroup
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            orientation={orientation}
            value={exclusive ? selectedValue : commonsValues}
            exclusive={exclusive}
            size={size}
            onChange={onChangeHandler}
            fullWidth={fullWidth}
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
    );
};

ToggleButtonGroup.defaultProps = {
    color: undefined,
    orientation: undefined,
    size: undefined,
    exclusive: undefined,
    fullWidth: undefined,
    disableRipple: undefined,
    onChange: undefined,
    enforceValueSet: undefined,
    data: [],
};

export { ToggleButtonGroups } from './ToggleButtonGroup.styled';
export default ToggleButtonGroup;
