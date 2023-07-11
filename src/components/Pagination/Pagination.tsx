import React from 'react';
import PropTypes from 'prop-types';
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

export default function Pagination({
    orientation,
    label,
    color,
    totalPages,
    disabled,
    disabledPages,
    variant,
    size,
    prevIconCmpCB,
    nextIconCmpCB,
    firstIconCmpCB,
    lastIconCmpCB,
    showFirstButton,
    showLastButton,
    page,
    onChange,
    maxPagesVisible,
    maxBoundaryPagesVisible,
    pageToLink,
    ...props
}) {
    const [customColor, muiColor] = useCustomColor(color);

    const pageToLinkHandler = (page) => {
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
                siblingCount={maxPagesVisible ? maxPagesVisible : undefined}
                boundaryCount={maxBoundaryPagesVisible ? maxBoundaryPagesVisible : undefined}
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
}

Pagination.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    label: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    disabledPages: PropTypes.arrayOf(PropTypes.number),
    variant: PropTypes.oneOf(['outlined', 'text']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    shape: PropTypes.oneOf(['circular', 'rounded']),
    prevIconCmpCB: PropTypes.any,
    nextIconCmpCB: PropTypes.any,
    firstIconCmpCB: PropTypes.any,
    lastIconCmpCB: PropTypes.any,
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool,
    totalPages: PropTypes.number,
    maxPagesVisible: PropTypes.number,
    maxBoundaryPagesVisible: PropTypes.number,
    page: PropTypes.number,
    onChange: PropTypes.func,
    pageToLink: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

Pagination.defaultProps = {
    orientation: 'horizontal',
    label: undefined,
    color: undefined,
    disabled: undefined,
    variant: undefined,
    size: undefined,
    shape: 'rounded',
    showFirstButton: undefined,
    showLastButton: undefined,
    prevIconCmpCB: undefined,
    nextIconCmpCB: undefined,
    firstIconCmpCB: undefined,
    lastIconCmpCB: undefined,
    totalPages: undefined,
    maxPagesVisible: undefined,
    maxBoundaryPagesVisible: undefined,
    page: undefined,
    onChange: undefined,
    pageToLink: undefined,
};
