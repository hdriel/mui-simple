import React from 'react';

import List from './List';
import Checkbox from '../Checkbox/Checkbox';
import Switch from '../../Switch/Switch';
import type { CheckListProps } from '../../decs';

const CheckList: React.FC<CheckListProps> = ({ controlType, alignCheck, items, ...props }): React.ReactElement => {
    const checklistItems = items?.map((item) => {
        // eslint-disable-next-line no-prototype-builtins
        if (item && Object.keys(item ?? {}).length === 1 && item.hasOwnProperty('divider')) {
            return item;
        }

        item = typeof item === 'string' ? { title: item } : item || {};

        let alignControl = alignCheck !== undefined ? alignCheck : undefined;
        let checkbox;
        switch (controlType) {
            case 'switch':
                alignControl = alignControl !== undefined ? alignControl : 'end';
                checkbox = <Switch {...item} edge={alignCheck} checked={item?.checked} tabIndex={-1} />;
                break;

            case 'checkbox':
            default:
                alignControl = alignControl !== undefined ? alignControl : 'start';
                checkbox = <Checkbox {...item} edge={alignCheck} checked={item?.checked} tabIndex={-1} disableRipple />;
        }

        switch (alignControl) {
            case 'end':
                item.actions = [].concat(item.actions);
                item.actions.push(checkbox);
                break;
            case 'start':
            default:
                item.startIcon = checkbox;
        }

        return { ...item, controlType, alignControl };
    });

    return <List {...props} items={checklistItems} />;
};

CheckList.defaultProps = {
    controlType: 'checkbox',
    alignCheck: undefined,
};

export type { CheckListProps } from '../../decs';
export default CheckList;
