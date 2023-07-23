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

export const getItemStyle = (theme, isDragging, draggableStyle): object => ({
    userSelect: 'none',
    // change background colour if dragging
    background: isDragging ? 'lightgreen' : undefined,
    ...draggableStyle,
});

export const getListStyle = (theme, isDraggingOver): object => ({
    position: 'relative',
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
});
