import React from 'react';

import Input from './TextField';
import type { InputSearchProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const InputSearch: React.FC<InputSearchProps> = ({ searchIcon: _searchIcon, onChange, ...props }) => {
    const searchIcon = typeof _searchIcon === 'string' ? <SVGIcon>{_searchIcon}</SVGIcon> : _searchIcon;
    const onChangeHandler = (event): void => onChange?.(event);

    return <Input {...props} startCmp={searchIcon} type="search" onChange={onChangeHandler} />;
};

InputSearch.defaultProps = {
    alignActions: undefined,
    alignActionsExternal: undefined,
    autoComplete: undefined,
    cmpSpacing: undefined,
    colorActive: undefined,
    colorLabel: undefined,
    colorText: undefined,
    debounceDelay: 500,
    disabled: undefined,
    endCmp: undefined,
    endCmpExternal: undefined,
    error: undefined,
    focused: undefined,
    fullWidth: undefined,
    helperText: undefined,
    hideStartActionsOnEmpty: true,
    id: undefined,
    label: undefined,
    margin: undefined,
    maxRows: undefined,
    multiline: undefined,
    name: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    placeholder: 'Search...',
    readOnly: undefined,
    required: undefined,
    rows: undefined,
    searchIcon: 'Search',
    startCmp: undefined,
    startCmpExternal: undefined,
    type: 'search',
    value: undefined,
    variant: undefined,
};

export type { InputSearchProps } from '../../decs';
export default InputSearch;
