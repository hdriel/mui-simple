import React, { cloneElement, isValidElement } from 'react';
import { alpha } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Toolbar, Tooltip, Typography } from '../Table.styled';
import type { EnhancedTableToolbarProps } from '../Table.desc';

export const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = ({
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
    fieldId,
}: EnhancedTableToolbarProps): React.ReactElement => {
    const theme = useTheme();
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
                            colorProps?.background ?? theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div" fullWidth>
                    {selectedLabel?.includes('{n}')
                        ? selectedLabel?.replace('{n}', String(numSelected))
                        : `${numSelected} ${selectedLabel}`}
                </Typography>
            ) : (
                <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div" fullWidth>
                    {title}
                </Typography>
            )}

            {filteredActions
                .filter((action) => isValidElement(action.Cmp))
                .map(({ Cmp, tooltip }, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Tooltip key={index} title={tooltip}>
                        {cloneElement(Cmp as any, {
                            color: colorProps?.color ?? colorProps?.background ?? theme.palette.primary.main,
                            sx: { color: colorProps?.background ?? theme.palette.primary.main, ...Cmp?.props?.sx },
                            onClick: (event) => {
                                Cmp?.props?.onClick?.(
                                    event,
                                    data?.filter((row, index) => selected.includes(row[fieldId] ?? index))
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
};

EnhancedTableToolbar.defaultProps = {
    selectedLabel: '{n} selected',
    title: '',
    selectedActions: [],
    actions: [],
    filterAction: undefined,
    selectionModeAction: undefined,
    sortColumnsAction: undefined,
    data: undefined,
    selected: undefined,
    colorProps: undefined,
    fieldId: undefined,
};
