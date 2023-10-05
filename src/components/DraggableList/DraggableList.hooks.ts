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
    disabled,
    flexDirection,
    flexGap,
    dataList,
    droppableId,
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

        if (!draggedDOM || disabled) {
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

        const clientX =
            parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft) +
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            [...draggedDOM.parentNode.children].slice(0, sourceIndex).reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const paddingLeft = parseFloat(style.paddingLeft);
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                return total + curr.clientWidth + paddingLeft + gapPx;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY:
                flexDirection === 'column'
                    ? clientY
                    : parseFloat(window.getComputedStyle(draggedDOM.parentNode).marginBottom),
            clientX:
                flexDirection === 'row'
                    ? clientX
                    : parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
        });
    };

    const handleDragEnd = (result: {
        source?: { index: number; droppableId: string };
        destination?: { index: number; droppableId: string };
    }): void => {
        setPlaceholderProps({});
        const { destination, source } = result;
        if (!destination) return; // dropped outside the list

        const extraProps = { source, destination, droppableId, dataList };
        const isMainListChange = destination.droppableId === droppableId;
        const isItemMoveBetweenList = destination.droppableId !== source.droppableId;
        const isSubListChange = !isMainListChange && !isItemMoveBetweenList;

        console.log('handleDragEnd', extraProps);
        switch (true) {
            case isMainListChange: {
                const items = reorder(dataList, source.index, destination.index);
                onChange?.(items, extraProps);
                break;
            }

            case isItemMoveBetweenList: {
                const subListSource = dataList.find((list) => list.id === source.droppableId);
                const subListDestination = dataList.find((list) => list.id === destination.droppableId);
                if (subListSource?.items && subListDestination?.items) {
                    const [item] = subListSource?.items?.splice(source.index, 1);
                    subListDestination?.items?.splice(destination.index, 0, item);
                    onChange?.(dataList, extraProps);
                }
                break;
            }

            case isSubListChange:
            default: {
                const subList = dataList.find(
                    (list) => list.id === source.droppableId && list.id === destination.droppableId
                );
                if (subList?.items) {
                    subList.items = reorder(subList.items, source.index, destination.index);
                    onChange?.(dataList, extraProps);
                }
                break;
            }
        }
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

        const clientX =
            parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft) +
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            [...draggedDOM.parentNode.children].slice(0, sourceIndex).reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const paddingLeft = parseFloat(style.paddingLeft);
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                return total + curr.clientWidth + paddingLeft + gapPx;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY:
                flexDirection === 'column'
                    ? clientY
                    : parseFloat(window.getComputedStyle(draggedDOM.parentNode).marginBottom),
            clientX:
                flexDirection === 'row'
                    ? clientX
                    : parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
        });
    };

    return {
        placeholderProps,
        handleDragStart,
        handleDragEnd,
        handleDragUpdate,
    };
};
