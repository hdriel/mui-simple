import React, { useMemo } from 'react';
import { groupBy as _groupBy } from 'lodash-es';
import { ListSubheader, MenuItem } from './InputSelect.styled';
import Checkbox from '../Checkbox/Checkbox';
import { isDefined } from '../../../utils/helpers';
import ListItem from '../List/ListItem';
import type { InputSelectOption, InputSelectOptions } from '../../decs';

export const getOptions = ({ options: _options }: { options: InputSelectOptions }): InputSelectOption[] => {
    const options: InputSelectOption[] = []
        .concat(_options)
        ?.filter(Boolean)
        .map((option) => {
            return typeof option === 'string' ? { value: option, label: option, disabled: false } : option;
        });

    return options;
};

export const useOptionsConverter = ({
    options,
    convertedOptions,
    groupBy,
}: {
    options: InputSelectOption[];
    convertedOptions?: Record<string, InputSelectOptions>;
    groupBy?: string | ((row: any) => string);
}): Record<string, InputSelectOption[]> => {
    if (isDefined(convertedOptions)) return convertedOptions;
    if (!options?.length) return {};

    return _groupBy(options, groupBy ?? '') as Record<string, InputSelectOption[]>;
};

export const useOptions = ({
    convertedOptions,
    checkbox,
    placeholder,
    nullable,
}: {
    convertedOptions: Record<string, InputSelectOptions>;
    checkbox?: boolean;
    placeholder?: string;
    nullable?: string | boolean;
}): React.ReactElement[] => {
    return useMemo(() => {
        const components: any[] = [];

        Object.keys(convertedOptions).forEach((category) => {
            if (category !== 'undefined') {
                components.push(<ListSubheader key={category}>{category}</ListSubheader>);
            }

            components.push(
                ...convertedOptions[category].map((option: InputSelectOption) => {
                    return function OptionMenuItem({
                        value,
                        max,
                    }: {
                        value: string | string[];
                        max: number;
                    }): React.ReactElement {
                        const selected: boolean = value?.includes?.(option.value as string);

                        return (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled || (!selected && isDefined(max) && value?.length >= max)}
                            >
                                {typeof checkbox === 'boolean' && checkbox ? (
                                    <Checkbox checked={selected} />
                                ) : undefined}

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
                    };
                })
            );
        });

        if (components.length > 0) {
            if (nullable && typeof nullable === 'string') {
                components.unshift(
                    <MenuItem key="nullable" value="">
                        <em style={{ minHeight: '24px' }}>{nullable}</em>
                    </MenuItem>
                );
            }

            if (placeholder) {
                components.unshift(
                    <MenuItem key="placeholder" value="" disabled>
                        <em>{placeholder}</em>
                    </MenuItem>
                );
            }

            if (nullable && typeof nullable === 'boolean') {
                components.unshift(
                    <MenuItem key="nullable" value="">
                        <em style={{ minHeight: '24px' }}> </em>
                    </MenuItem>
                );
            }
        }

        return components;
    }, [convertedOptions, checkbox, placeholder, nullable]);
};
