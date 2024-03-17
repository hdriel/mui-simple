import { useMemo } from 'react';
import { get } from 'lodash-es';
import { SORT } from '../Table.consts';
import type { useDataProps } from '../Table.desc';

export function useData({
    page,
    independentData,
    sortColumns,
    data: _data = [],
    sliceFrom = 0,
    sliceTo,
}: useDataProps): any[] {
    const sortedData = useMemo(() => {
        let data = _data ?? [];
        if (independentData) {
            sortColumns
                .filter((sortColumn) => sortColumn.orderBy)
                .forEach((sortColumn) => {
                    data = data.sort((item1, item2) => {
                        const [a, b] =
                            sortColumn.orderBy === SORT.UP
                                ? [get(item1, sortColumn.field), get(item2, sortColumn.field)]
                                : [get(item2, sortColumn.field), get(item1, sortColumn.field)];

                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
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
