import { useMemo } from 'react';
import { getDataRange } from '../Table.utils';
import type { usePaginationDetailsProps, usePaginationDetailsResult } from '../Table.desc';

export function usePaginationDetails({
    rows = 0,
    pagination = {},
}: usePaginationDetailsProps): usePaginationDetailsResult {
    const { total: _total, rowsPerPage: _rowsPerPage, page: _page } = pagination;

    const total = _total ?? rows;
    const independentData = total === rows;
    const rowsPerPage = _rowsPerPage ?? rows;
    const page = _page ?? 0;

    const [sliceFrom, sliceTo] = getDataRange({ rows, total, page, rowsPerPage });

    // Avoid a layout jump when reaching the last page with empty data.
    const emptyRows = useMemo(() => {
        if (independentData) {
            const totalRowsTillPrevPage = page <= 1 ? 0 : page * rowsPerPage;
            return rowsPerPage - Math.min(rowsPerPage, rows - totalRowsTillPrevPage);
        } else {
            return rows >= rowsPerPage ? 0 : rowsPerPage - rows;
        }
    }, [independentData, page, rowsPerPage, rows]);

    const rowsPerPageList = useMemo(
        () =>
            [...[5, 10, 20, rowsPerPage].filter((item, pos, arr) => arr.indexOf(item) === pos)]
                .filter(Boolean)
                .sort((a, b) => a - b),
        [rowsPerPage]
    );

    return {
        independentData,
        total,
        rowsPerPage,
        page,
        emptyRows,
        sliceFrom,
        sliceTo,
        rowsPerPageList,
    };
}
