import React from 'react';

import Input from './TextField';
import type { InputSearchProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import { setDefaultValue } from 'src/utils/helpers';

const InputSearch: React.FC<InputSearchProps> = ({ searchIcon: _searchIcon, onChange, ...props }) => {
    setDefaultValue(props, 'debounceDelay', 500);
    setDefaultValue(props, 'placeholder', 'Search...');
    setDefaultValue(props, 'searchIcon', 'Search');
    setDefaultValue(props, 'type', 'search');
    setDefaultValue(props, 'hideStartActionsOnEmpty', true);

    const searchIcon = typeof _searchIcon === 'string' ? <SVGIcon>{_searchIcon}</SVGIcon> : _searchIcon;
    const onChangeHandler = (event): void => onChange?.(event);

    return <Input {...props} startCmp={searchIcon} type="search" onChange={onChangeHandler} />;
};

InputSearch.displayName = 'InputSearch';

export type { InputSearchProps } from '../../decs';
export default InputSearch;
