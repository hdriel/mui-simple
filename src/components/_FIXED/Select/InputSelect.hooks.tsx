import React, { useMemo } from 'react';
import { groupBy as _groupBy } from 'lodash-es';
import { ListSubheader, MenuItem } from './InputSelect.styled';
import Checkbox from '../Checkbox/Checkbox';
import { isDefined } from '../../../utils/helpers';
import ListItem from '../../List/ListItem';

export const useOptionsConverter = ({ options: _options, convertedOptions, groupBy }): any[] => {
    const options = useMemo(
        () =>
            convertedOptions ??
            _groupBy(
                []
                    .concat(_options)
                    ?.filter(Boolean)
                    .map((option) => {
                        return typeof option === 'string' ? { value: option, label: option, disabled: false } : option;
                    }),
                groupBy ?? ''
            ),
        [_options, groupBy, convertedOptions]
    );

    return options;
};

export const useOptions = ({ convertedOptions, checkbox, placeholder, nullable }) => {
    const options = useMemo(() => {
        const components = [];
        let key = 0;

        Object.keys(convertedOptions).forEach((category) => {
            if (category !== 'undefined') {
                components.push(<ListSubheader key={key++}>{category}</ListSubheader>);
            }

            components.push(
                ...convertedOptions[category].map((option) => ({ value, max }) => {
                    const selected = value?.indexOf?.(option.value) > -1;
                    return (
                        <MenuItem
                            key={key++}
                            value={option.value}
                            disabled={option.disabled || (!selected && isDefined(max) && value?.length >= max)}
                        >
                            {typeof checkbox === 'boolean' && checkbox && <Checkbox checked={selected} />}

                            <ListItem
                                disablePadding={undefined}
                                disableGutters={true}
                                index={0}
                                itemProps={{
                                    title: option.label,
                                    subtitle: option.subtitle,
                                    actions: selected && typeof checkbox !== 'boolean' && checkbox,
                                }}
                                buttonItems
                                alignItems={'flex-start'}
                                isControl={true}
                                enableSubtitle
                            />
                        </MenuItem>
                    );
                })
            );
        });

        if (components.length > 0) {
            if (nullable && typeof nullable === 'string') {
                components.unshift(
                    <MenuItem key={key++} value="">
                        <em style={{ minHeight: '24px' }}>{typeof nullable === 'string' ? nullable : ' '}</em>
                    </MenuItem>
                );
            }

            if (placeholder) {
                components.unshift(
                    <MenuItem key={key++} value="" disabled>
                        <em>{placeholder}</em>
                    </MenuItem>
                );
            }

            if (nullable && typeof nullable === 'boolean') {
                components.unshift(
                    <MenuItem key={key++} value="">
                        <em style={{ minHeight: '24px' }}>{typeof nullable === 'string' ? nullable : ' '}</em>
                    </MenuItem>
                );
            }
        }

        return components;
    }, [convertedOptions, checkbox, placeholder, nullable]);

    return options;
};
