import type { usePaginationDetailsProps, usePaginationDetailsResult } from '../Table.desc';

export function usePaginationDetails({
    rows = 0,
    pagination = {},
    rowsPerPageOptions,
}: usePaginationDetailsProps): usePaginationDetailsResult {
    const { total: _total, rowsPerPage: _rowsPerPage, page: _page } = pagination;

    const total = _total ?? rows;
    const independentData = total === rows;
    const rowsPerPage = _rowsPerPage ?? rows;
    const page = _page > 1 ? _page - 1 : 0; // Page start from zero to N-1 pages

    const [sliceFrom, sliceTo] =
        rows === total
            ? // case that got full data as total
              [page * rowsPerPage, page * rowsPerPage + rowsPerPage]
            : // case that got partial data from server pagination side
              [0, rowsPerPage];

    // Avoid a layout jump when reaching the last page with empty data.
    let emptyRows = rows >= rowsPerPage ? 0 : rowsPerPage - rows;
    if (independentData) {
        const totalRowsTillPrevPage = page <= 1 ? 0 : page * rowsPerPage;
        emptyRows = rowsPerPage - Math.min(rowsPerPage, rows - totalRowsTillPrevPage);
    }

    const options = Array.isArray(rowsPerPageOptions) ? rowsPerPageOptions.filter(Boolean) : [];
    if (rowsPerPage > 0 && !options.includes(rowsPerPage)) options.push(rowsPerPage);
    const rowsPerPageList = options.sort((a, b) => a - b);

    return {
        independentData,
        total,
        rowsPerPage,
        page: page + 1,
        emptyRows,
        sliceFrom,
        sliceTo,
        rowsPerPageList,
    };
}
