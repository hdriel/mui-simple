import React from 'react';
import { Stack } from '@mui/material';

import { Pagination as MuiPagination, PaginationItem } from './Pagination.styled';
import Typography from '../_FIXED/Typography/Typography';
import { isDefined, useCustomColor } from '../../utils/helpers';

// function useSearchParam(pageParamFieldName) {
//   if (!pageParamFieldName) return;
//
//   const location = useLocation();
//   const query = new URLSearchParams(location.search);
//   return parseInt(query.get(pageParamFieldName) || "1", 10);
// }

interface PaginationProps {
    color: string;
    disabled: boolean;
    disabledPages: number[];
    firstIconCmpCB: React.ReactNode;
    label: string;
    lastIconCmpCB: React.ReactNode;
    maxBoundaryPagesVisible: number;
    maxPagesVisible: number;
    nextIconCmpCB: React.ReactNode;
    onChange: (event: any) => void;
    orientation: 'horizontal' | 'vertical';
    page: number;
    pageToLink: ((page: number) => string) | string;
    prevIconCmpCB: React.ReactNode;
    shape: 'circular' | 'rounded';
    showFirstButton: boolean;
    showLastButton: boolean;
    size: 'small' | 'medium' | 'large';
    totalPages: number;
    variant: 'outlined' | 'text';
}

const Pagination: React.FC<PaginationProps> = ({
    color,
    disabled,
    disabledPages,
    firstIconCmpCB,
    label,
    lastIconCmpCB,
    maxBoundaryPagesVisible,
    maxPagesVisible,
    nextIconCmpCB,
    onChange,
    orientation,
    page,
    pageToLink,
    prevIconCmpCB,
    showFirstButton,
    showLastButton,
    size,
    totalPages,
    variant,
    ...props
}): React.ReactElement => {
    const [customColor, muiColor] = useCustomColor(color);

    const pageToLinkHandler = (page): string | undefined => {
        switch (typeof pageToLink) {
            case 'function':
                return pageToLink?.(page);
            case 'string':
                return isDefined(page) ? pageToLink.replaceAll(/\{page\}/gi, page) : undefined;
            default:
                return undefined;
        }
    };

    return (
        <Stack spacing={1} sx={{ width: orientation === 'vertical' ? 'min-content' : 'max-content' }}>
            {label && (
                <Typography wrap={false}>{isDefined(page) ? label?.replaceAll(/\{page\}/gi, page) : label}</Typography>
            )}
            <MuiPagination
                color={muiColor}
                customColor={muiColor ? undefined : customColor}
                count={totalPages}
                disabled={disabled}
                variant={variant}
                size={size}
                showFirstButton={showFirstButton === undefined && page && page > 1 ? true : showFirstButton}
                showLastButton={showLastButton === undefined && page && page < totalPages ? true : showLastButton}
                siblingCount={maxPagesVisible || undefined}
                boundaryCount={maxBoundaryPagesVisible || undefined}
                page={page}
                onChange={(event, nextPage) => onChange?.(nextPage)}
                renderItem={(item) => {
                    return (
                        <PaginationItem
                            {...item}
                            disabled={item.disabled || disabledPages?.includes(item.page)}
                            component={pageToLink ? 'a' : undefined}
                            href={pageToLink ? pageToLinkHandler(item.page) : undefined}
                            slots={{
                                first: firstIconCmpCB,
                                previous: prevIconCmpCB,
                                next: nextIconCmpCB,
                                last: lastIconCmpCB,
                            }}
                        />
                    );
                }}
                {...props}
            />
        </Stack>
    );
};

Pagination.defaultProps = {
    color: undefined,
    disabled: undefined,
    firstIconCmpCB: undefined,
    label: undefined,
    lastIconCmpCB: undefined,
    maxBoundaryPagesVisible: undefined,
    maxPagesVisible: undefined,
    nextIconCmpCB: undefined,
    onChange: undefined,
    orientation: 'horizontal',
    page: undefined,
    pageToLink: undefined,
    prevIconCmpCB: undefined,
    shape: 'rounded',
    showFirstButton: undefined,
    showLastButton: undefined,
    size: undefined,
    totalPages: undefined,
    variant: undefined,
};

export default Pagination;
