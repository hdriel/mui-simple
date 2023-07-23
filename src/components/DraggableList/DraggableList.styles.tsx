import { alpha } from '@mui/material';
export const getDataId = (data: any, fieldId: string, index: number): string =>
    typeof data === 'string' ? data : data?.[fieldId] || String(index ?? '');

export const queryAttr = 'data-rbd-drag-handle-draggable-id';

interface DataItem {
    id?: string;
    [key: string]: any;
}

// a little function to help us with reordering the result
export const reorder = (list: DataItem[], startIndex: number, endIndex: number): DataItem[] => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const getItemStyle = (theme, isDragging, draggableStyle): object => ({
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging ? alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity) : undefined,
    ...draggableStyle,
});

export const getListStyle = (theme, isDraggingOver): object => ({
    position: 'relative',
    background: isDraggingOver ? alpha(theme.palette.text.disabled, theme.palette.action.activatedOpacity) : undefined,
});
