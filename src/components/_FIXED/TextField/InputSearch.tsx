import React from 'react';

import Input from './TextField';
import type { InputSearchProps } from '../../decs';
import SVGIcon from '../SVGIcon/SVGIcon';
import { setDefaultValue } from '../../../utils/helpers';

const InputSearch: React.FC<InputSearchProps> = ({ searchIcon: _searchIcon, onChange, ...props }) => {
    props = setDefaultValue(props, 'debounceDelay', 500);
    props = setDefaultValue(props, 'placeholder', 'Search...');
    props = setDefaultValue(props, 'searchIcon', 'Search');
    props = setDefaultValue(props, 'type', 'search');
    props = setDefaultValue(props, 'hideStartActionsOnEmpty', true);

    const searchIcon = typeof _searchIcon === 'string' ? <SVGIcon>{_searchIcon}</SVGIcon> : _searchIcon;
    const onChangeHandler = (event): void => onChange?.(event);

    return <Input {...props} startCmp={searchIcon} type="search" onChange={onChangeHandler} />;
};

InputSearch.displayName = 'InputSearch';

export type { InputSearchProps } from '../../decs';
export default InputSearch;
