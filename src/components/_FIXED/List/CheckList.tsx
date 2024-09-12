import React from 'react';

import List from './List';
import type { CheckListProps } from '../../decs';
import { checkForCheckboxItems } from './List.converter';

const CheckList: React.FC<CheckListProps> = ({
    controlType = 'checkbox',
    alignCheck,
    items,
    ...props
}): React.ReactElement | React.ReactNode => {
    const checklistItems = checkForCheckboxItems(items, {
        alignCheck: alignCheck !== undefined ? alignCheck : 'start',
        controlType: controlType !== undefined ? controlType : 'checkbox',
    });

    return <List {...props} items={checklistItems} />;
};

export type { CheckListProps } from '../../decs';
export default CheckList;
