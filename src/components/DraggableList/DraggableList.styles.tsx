import { alpha } from '@mui/material';

export const getDataId = (data: any, fieldId: string, index: number): string =>
    typeof data === 'string' ? data : data?.[fieldId] || String(index ?? '');

export const queryAttr = 'data-rbd-drag-handle-draggable-id';

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex): any[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

export const getItemStyle = (theme, isDragging, draggableStyle): object => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    ...(isDragging && {
        background: alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity ?? 1),
        border: '1px dashed black',
    }),

    // styles we need to apply on draggables
    ...draggableStyle,
});

export const getListStyle = (theme, isDraggingOver): object => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    position: 'relative',
    // width: 250,
});
