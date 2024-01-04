import { alpha } from '@mui/material';
export const getDataId = (data: any, fieldId: string, index: number): string =>
    typeof data === 'string' ? data : data?.[fieldId] || String(index ?? '');

export const queryAttr = 'data-rbd-drag-handle-draggable-id';

export interface DataItem {
    id?: string;
    [key: string]: any;
}

// a little function to help us with reordering the result
export const reorder = (list: DataItem[], startIndex: number, endIndex: number): DataItem[] => {
    if (!Array.isArray(list)) return list;

    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

export const getItemStyle = ({
    theme,
    isDragging,
    draggableStyle: { transform, ...draggableStyle },
    flexDirection,
}): object => {
    // console.log({ transform, ...draggableStyle });
    // const [, x] = /\((.*),(.*)\)/.exec(transform) ?? [];
    // const translate = flexDirection === 'column' ? transform : `translate(${x}, 0px)`;
    const translate = transform;

    return {
        userSelect: 'none',
        // change background colour if dragging
        background: isDragging ? alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity) : undefined,
        width: flexDirection === 'row' ? 'max-content' : '100%',
        transform: translate,
        ...draggableStyle,
    };
};

export const getListStyle = ({ theme, isDraggingOver }): object => ({
    position: 'relative',
    background: isDraggingOver ? alpha(theme.palette.text.disabled, theme.palette.action.activatedOpacity) : undefined,
});
