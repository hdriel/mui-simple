import React, { useEffect, useState } from 'react';
import { LibraryAddCheck as LibraryAddCheckIcon } from '@mui/icons-material';
import { isDefined } from '../../../utils/helpers';
import { Checkbox, Tooltip } from '../Table.styled';
import type { useSelectionModeProps } from '../Table.desc';

export function useSelectionMode({
    selectionMode: _selectionMode,
    hide,
    tooltip,
    colors,
}: useSelectionModeProps): [boolean, React.ReactElement] {
    const [selectionMode, setSelectionMode] = useState(_selectionMode ?? false);

    useEffect(() => {
        if (isDefined(_selectionMode)) setSelectionMode(_selectionMode);
    }, [_selectionMode]);

    const cmp = !hide && (
        <Tooltip title={tooltip}>
            <Checkbox
                color={colors?.background ?? (colors as string)}
                checkedIcon={<LibraryAddCheckIcon />}
                icon={<LibraryAddCheckIcon />}
                checked={selectionMode}
                onClick={(event) => {
                    event.stopPropagation();
                    setSelectionMode(!selectionMode);
                }}
            />
        </Tooltip>
    );

    return [selectionMode, cmp];
}
