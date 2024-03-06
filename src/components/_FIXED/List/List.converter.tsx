import Switch from '../Switch/Switch';
import Checkbox from '../Checkbox/Checkbox';
import React from 'react';

export const checkForCheckboxItems = (
    items: any[],
    {
        alignCheck,
        controlType,
    }: { controlType?: 'checkbox' | 'switch'; alignCheck?: 'start' | 'end'; [key: string]: any }
): any[] => {
    return items?.map((item) => {
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
                alignControl = alignControl !== undefined ? alignControl : 'start';
                checkbox = <Checkbox {...item} edge={alignCheck} checked={item?.checked} tabIndex={-1} disableRipple />;
                break;

            default:
                break;
        }

        switch (alignControl) {
            case 'end':
                item.actions = [].concat(item.actions, checkbox);
                break;
            case 'start':
                item.startIcon = checkbox;
                break;
            default:
                break;
        }

        return { ...item, controlType, alignControl };
    });
};
