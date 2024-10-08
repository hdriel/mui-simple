import React from 'react';
import { Stack } from '@mui/material';
import * as MUIIcon from '@mui/icons-material';

import { Pagination as MuiPagination, PaginationItem } from './Pagination.styled';
import Typography from '../Typography/Typography';
import { isDefined, useCustomColor } from '../../../utils/helpers';
import type { PaginationProps } from '../../decs';

// function useSearchParam(pageParamFieldName) {
//   if (!pageParamFieldName) return;
//
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   return parseInt(query.get(pageParamFieldName) || "1", 10);
// }

const pageToLinkHandler = (page, pageToLink): string | undefined => {
    if (!pageToLink) return undefined;

    switch (typeof pageToLink) {
        case 'function':
            return pageToLink?.(page);
        case 'string':
            return isDefined(page) ? pageToLink.replace(/\{page\}/gi, page) : undefined;
        default:
            return undefined;
    }
};

const Pagination: React.FC<PaginationProps> = ({
    color,
    disabled,
    disabledPages,
    IconFirst: _IconFirst,
    IconLast: _IconLast,
    IconNext: _IconNext,
    IconPrev: _IconPrev,
    label,
    maxBoundaryPagesVisible,
    maxPagesVisible,
    onChange,
    orientation = 'horizontal',
    page,
    pageToLink,
    shape = 'rounded',
    showFirstButton,
    showLastButton,
    totalPages,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const [IconFirst, IconLast, IconNext, IconPrev] = [
        typeof _IconFirst === 'string' ? MUIIcon[_IconFirst] : _IconFirst,
        typeof _IconLast === 'string' ? MUIIcon[_IconLast] : _IconLast,
        typeof _IconNext === 'string' ? MUIIcon[_IconNext] : _IconNext,
        typeof _IconPrev === 'string' ? MUIIcon[_IconPrev] : _IconPrev,
    ];

    return (
        <Stack spacing={1} sx={{ width: orientation === 'vertical' ? 'min-content' : 'max-content' }}>
            {label && (
                <Typography wrap={false}>
                    {isDefined(page) ? label?.replace(/\{page\}/gi, String(page)) : label}
                </Typography>
            )}

            <MuiPagination
                color={muiColor as any}
                customColor={muiColor ? undefined : customColor}
                count={totalPages}
                disabled={disabled}
                showFirstButton={showFirstButton === undefined && page && page > 1 ? true : showFirstButton}
                showLastButton={showLastButton === undefined && page && page < totalPages ? true : showLastButton}
                siblingCount={maxPagesVisible || undefined}
                boundaryCount={maxBoundaryPagesVisible || undefined}
                page={page}
                onChange={(event, nextPage) => onChange?.(nextPage)}
                shape={shape}
                renderItem={(item) => {
                    return (
                        <PaginationItem
                            {...item}
                            disabled={
                                item.disabled ||
                                (typeof disabledPages === 'function'
                                    ? disabledPages(item.page)
                                    : disabledPages?.includes(item.page))
                            }
                            component={pageToLink ? 'a' : undefined}
                            href={pageToLinkHandler(item.page, pageToLink)}
                            slots={{
                                first: IconFirst,
                                previous: IconPrev,
                                next: IconNext,
                                last: IconLast,
                            }}
                        />
                    );
                }}
                {...props}
            />
        </Stack>
    );
};

Pagination.displayName = 'Pagination';

export type { PaginationProps } from '../../decs';
export default Pagination;
