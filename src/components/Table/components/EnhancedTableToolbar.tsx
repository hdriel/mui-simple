import React, { cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material';
import { PT_action } from '../Table.propTypes';
import { Toolbar, Tooltip, Typography } from '../Table.styled';
import type { ColorsProps, EnhancedTableToolbarProps } from '../Table.desc';

export function EnhancedTableToolbar({
    selectedLabel,
    selected,
    data,
    title,
    filterAction,
    selectionModeAction,
    sortColumnsAction,
    selectedActions,
    actions,
    colorProps,
}: EnhancedTableToolbarProps): React.ReactElement {
    const numSelected = selected?.length ?? 0;
    const filteredActions = (numSelected > 0 ? selectedActions : actions) || [];

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            (colorProps as ColorsProps)?.background ?? theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
                    {selectedLabel?.includes('{n}')
                        ? selectedLabel?.replace('{n}', String(numSelected))
                        : `${numSelected} ${selectedLabel}`}
                </Typography>
            ) : (
                <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
                    {title}
                </Typography>
            )}

            {filteredActions
                .filter((action) => isValidElement(action.Cmp))
                .map(({ Cmp, tooltip }, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tooltip key={index} title={tooltip}>
                        {cloneElement(Cmp, {
                            onClick: (event) => {
                                Cmp?.props?.onClick?.(
                                    event,
                                    data?.filter((row, index) => selected.includes(row.id ?? index))
                                );
                            },
                        })}
                    </Tooltip>
                ))}
            {!numSelected && selectionModeAction}
            {!numSelected && sortColumnsAction}
            {!numSelected && filterAction}
        </Toolbar>
    );
}

EnhancedTableToolbar.propTypes = {
    selectedLabel: PropTypes.string,
    numSelected: PropTypes.number,
    title: PropTypes.string,
    selectedActions: PropTypes.arrayOf(PT_action),
    actions: PropTypes.arrayOf(PT_action),
};

EnhancedTableToolbar.defaultProps = {
    selectedLabel: '{n} selected',
    numSelected: 0,
    title: '',
    selectedActions: [],
    actions: [],
};
