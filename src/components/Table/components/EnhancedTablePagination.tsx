import React from 'react';
import { Box, TablePagination } from '../Table.styled';
import { usePaginationDetails } from '../hooks';
import type { EnhancedTablePaginationProps } from '../Table.desc';

export function EnhancedTablePagination({
    onChangePagination,
    rows,
    pagination,
    paginationProps,
    paginationAlign,
    PaginationComponent,
    orderBy,
}: EnhancedTablePaginationProps): React.ReactElement {
    const { total, rowsPerPage, rowsPerPageList, page } = usePaginationDetails({ pagination, rows });

    const handleChangePage = (event, newPage): void => {
        if (typeof event === 'number') newPage = event;
        const config = { orderBy, pagination: { ...pagination, page: newPage } };
        onChangePagination?.(config);
    };

    const handleChangeRowsPerPage = (event): void => {
        const rowPerPage = parseInt(event.target.value, 10);
        const config = { orderBy, pagination: { ...pagination, rowPerPage } };
        onChangePagination?.(config);
    };

    return pagination ? (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: paginationAlign ?? 'end',
            }}
        >
            {PaginationComponent ? (
                <PaginationComponent totalPages={total} page={page} onChange={handleChangePage} {...paginationProps} />
            ) : (
                <TablePagination
                    component="div"
                    rowsPerPageOptions={rowsPerPageList}
                    count={total}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            )}
        </Box>
    ) : null;
}
