import React from 'react';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup as MuiToggleButtonGroup } from './ToggleButtonGroup.styled';
import { useCustomColor } from '../../utils/helpers';

const ToggleButtonGroup = ({
    value: selectedValue,
    onChange,
    size,
    exclusive,
    orientation,
    disableRipple,
    enforceValueSet,
    data,
    fullWidth,
    color,
    ...props
}) => {
    const [customColor, muiColor] = useCustomColor(color);

    const commonsValues = [].concat(selectedValue);

    function onChangeHandler(event, newValues) {
        if (!onChange) return;

        if (enforceValueSet) {
            if (exclusive && newValues !== null) onChange(newValues);
            if (!exclusive && newValues?.length) onChange(newValues);
        } else {
            onChange(newValues);
        }
    }

    function onButtonClickHandler(value, event) {
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
                              {...toggleProps}
                          >
                              {component}
                          </ToggleButton>
                      ))
                : null}
        </MuiToggleButtonGroup>
    );
};

ToggleButtonGroup.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    exclusive: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disableRipple: PropTypes.bool,
    onChange: PropTypes.func,
    color: PropTypes.string,
    enforceValueSet: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string,
            disabled: PropTypes.bool,
            component: PropTypes.any,
        })
    ),
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
