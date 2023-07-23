import { useState } from 'react';
import toPx from 'to-px';
import { queryAttr, reorder } from './DraggableList.styles';

interface PlaceholderProps {
    clientY?: number;
    clientX?: number;
    clientHeight?: number;
    clientWidth?: number;
}

export const useDragHandlers = ({
    flexGap,
    dataList,
    onChange,
}): {
    placeholderProps: PlaceholderProps;
    handleDragStart: (event: any) => void;
    handleDragEnd: (result: any) => void;
    handleDragUpdate: (event: any) => void;
} => {
    const [placeholderProps, setPlaceholderProps] = useState<PlaceholderProps>({});
    const gapPx = toPx(flexGap);

    const getDraggedDom = (draggableId: string): JSX.Element => {
        const domQuery = `[${queryAttr}='${draggableId}']`;
        return document.querySelector(domQuery);
    };

    const handleDragStart = (event: any): void => {
        const draggedDOM = getDraggedDom(event.draggableId);

        if (!draggedDOM) {
            return;
        }

        const { clientHeight, clientWidth } = draggedDOM;
        const sourceIndex = event.source.index;
        const clientY =
            parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            [...draggedDOM.parentNode.children].slice(0, sourceIndex).reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const marginBottom = parseFloat(style.marginBottom);
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                return total + curr.clientHeight + marginBottom + gapPx;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
        });
    };

    const handleDragEnd = (result): void => {
        setPlaceholderProps({});
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const items = reorder(dataList, result.source.index, result.destination.index);

        onChange(items);
    };

    const handleDragUpdate = (event): void => {
        if (!event.destination) {
            return;
        }

        const draggedDOM = getDraggedDom(event.draggableId);

        if (!draggedDOM) {
            return;
        }

        const { clientHeight, clientWidth } = draggedDOM;

        const destinationIndex = event.destination.index;
        const sourceIndex = event.source.index;

        const childrenArray = [...draggedDOM.parentNode.children];
        const movedItem = childrenArray[sourceIndex];
        childrenArray.splice(sourceIndex, 1);

        const updatedArray = [
            ...childrenArray.slice(0, destinationIndex),
            movedItem,
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            ...childrenArray.slice(destinationIndex + 1),
        ];

        const clientY =
            parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const marginBottom = parseFloat(style.marginBottom);
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                return total + curr.clientHeight + marginBottom + gapPx;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
        });
    };

    return {
        placeholderProps,
        handleDragStart,
        handleDragEnd,
        handleDragUpdate,
    };
};
