import React, { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Check as CheckIcon, IndeterminateCheckBox as IndeterminateCheckBoxIcon } from '@mui/icons-material';

import InputSelect from './InputSelect';
import Chip from '../Chip/Chip';
import { isDefined } from '../../../utils/helpers';
import Checkbox from '../Checkbox/Checkbox';
import { MenuItem } from './InputSelect.styled';
import { useOptionsConverter } from './InputSelect.hooks';
import ListItem from '../../List/ListItem';
import type { InputMultipleSelectProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const RenderValuesAsChips = ({ value, option: options }: { value?: any; option?: any }): React.ReactElement => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {options?.map(({ value, label }) => (
                <Chip key={value} label={label} rounded />
            ))}
        </Box>
    );
};
const RenderValuesAsSquaredChips = ({ value, option: options }: { value?: any; option?: any }): React.ReactElement => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {options?.map(({ value, label }) => (
                <Chip key={value} label={label} rounded={false} />
            ))}
        </Box>
    );
};

const InputMultipleSelect: React.FC<InputMultipleSelectProps> = ({
    value,
    chips,
    renderValue,
    onChange,
    max,
    name,
    label: _label,
    squaredChips,
    selectedIndicator,
    selectAll,
    options,
    groupBy,
    SELECT_ALL_LABEL,
    HIDE_ALL_LABEL,
    SELECTED_ITEMS_LABEL,
    checkboxMarker: _checkboxMarker,
    ...props
}): React.ReactElement => {
    const convertedOptions = useOptionsConverter({ options, groupBy });
    const selectedValuesLen = Object.values(convertedOptions)
        .flat()
        .filter((option) => !option.disabled).length;
    const [, setClickAllState] = useState(false);
    const [isClickedAll, setClickAll] = useState(false);

    const checkboxMarker =
        _checkboxMarker && typeof _checkboxMarker === 'string' ? <SVGIcon>{_checkboxMarker}</SVGIcon> : _checkboxMarker;
    const n = value?.length;
    const label =
        selectedIndicator && n
            ? `${(_label as string) ?? ''} ${SELECTED_ITEMS_LABEL?.replace('{n}', String(n))}`
            : _label;

    const handleSelectAllChange = useCallback((): void => {
        setClickAll((isClickedAll) => {
            const allValues = isClickedAll
                ? Object.values(convertedOptions ?? {})
                      .flat()
                      .map((option) => option.value)
                : [];

            onChange?.({ target: { name, value: allValues } });

            return isClickedAll;
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onClickMenuItemHandler = useCallback(
        (event) => {
            setClickAllState((isClickAllState) => {
                if (isClickAllState) {
                    handleSelectAllChange();
                } else {
                    const values = event.target.value;
                    if (!isDefined(max) || values?.length <= max) {
                        onChange?.(event);
                    }
                }

                return false;
            });
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [max, handleSelectAllChange]
    );

    return (
        <InputSelect
            value={[].concat(value).filter(Boolean)}
            multiple
            max={max}
            label={label}
            renderValue={squaredChips ? <RenderValuesAsSquaredChips /> : chips ? <RenderValuesAsChips /> : renderValue}
            onChange={onClickMenuItemHandler}
            checkbox={checkboxMarker as boolean}
            selectAll={selectAll}
            options={options}
            convertedOptions={convertedOptions}
            selectAllOption={
                !isDefined(max) && selectAll ? (
                    <MenuItem
                        onClick={() => {
                            setClickAllState(true);
                            setClickAll((v) => !v);
                        }}
                    >
                        {typeof checkboxMarker === 'boolean' && checkboxMarker && (
                            <Checkbox
                                checked={isClickedAll}
                                checkedIcon={
                                    selectedValuesLen === value?.length ? undefined : <IndeterminateCheckBoxIcon />
                                }
                            />
                        )}

                        <ListItem
                            disableGutters
                            itemProps={{
                                title: isClickedAll
                                    ? !isDefined(checkboxMarker) ||
                                      (typeof checkboxMarker === 'boolean' && checkboxMarker)
                                        ? HIDE_ALL_LABEL
                                        : SELECT_ALL_LABEL
                                    : SELECT_ALL_LABEL,
                                actions: isClickedAll ? checkboxMarker : undefined,
                                bold: true,
                            }}
                            buttonItems
                            alignItems="flex-start"
                            isControl
                            enableSubtitle
                        />
                    </MenuItem>
                ) : undefined
            }
            {...props}
        />
    );
};

InputMultipleSelect.defaultProps = {
    value: undefined,
    // renderValue: (value, options) => options?.map((option) => option?.label ?? option.value) ?? value.join(', '),
    chips: true,
    squaredChips: true,
    checkboxMarker: <CheckIcon />,
    max: undefined,
    selectedIndicator: true,
    selectAll: true,
    SELECT_ALL_LABEL: 'Select All',
    HIDE_ALL_LABEL: 'Hide All',
    SELECTED_ITEMS_LABEL: '({n} selected)',
};

export default InputMultipleSelect;
