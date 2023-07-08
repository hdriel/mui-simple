import { useMemo } from 'react';

import { SORT } from '../Table.consts';

export function useData({ page, independentData, sortColumns, data: _data = [], sliceFrom = 0, sliceTo }) {
    const sortedData = useMemo(() => {
        let data = _data ?? [];
        if (independentData) {
            sortColumns
                .filter((sortColumn) => sortColumn.orderBy)
                .forEach((sortColumn) => {
                    data = data.sort((item1, item2) => {
                        const [a, b] =
                            sortColumn.orderBy === SORT.UP
                                ? [item1[sortColumn.field], item2[sortColumn.field]]
                                : [item2[sortColumn.field], item1[sortColumn.field]];

                        return sortColumn.type === 'number' ? a - b : `${a}`.localeCompare(`${b}`);
                    });
                });
        }

        data = data.slice(sliceFrom, sliceTo);

        return data;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [_data, sortColumns, sliceFrom, sliceTo, page, independentData]);

    return sortedData;
}
