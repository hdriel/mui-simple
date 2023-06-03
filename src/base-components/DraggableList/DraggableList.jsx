import React from "react";
import PropTypes from "prop-types";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DraggableListUL, DraggableListULItem } from "./DraggableList.styled";

export default function DraggableList({
  disabled,
  flexDirection,
  flexGap,
  droppableClassName,
  dataList,
  renderValue,
  onChange,
  ...props
}) {
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(dataList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    onChange(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId={droppableClassName}>
        {(providedList) => (
          <DraggableListUL
            flexDirection={flexDirection}
            flexGap={flexGap}
            className={droppableClassName}
            {...props}
            {...providedList.droppableProps}
            ref={providedList.innerRef}
          >
            {dataList?.map((data, index) => (
              <Draggable
                key={data?.id ?? data ?? `${index}`}
                draggableId={data?.id ?? data ?? `${index}`}
                index={index}
                isDragDisabled={
                  typeof disabled === "function"
                    ? disabled(data, index)
                    : disabled
                }
              >
                {(providedItem) => (
                  <DraggableListULItem
                    {...providedItem.draggableProps}
                    {...providedItem.dragHandleProps}
                    ref={providedItem.innerRef}
                  >
                    {renderValue?.(data, index)}
                  </DraggableListULItem>
                )}
              </Draggable>
            ))}
          </DraggableListUL>
        )}
      </Droppable>
    </DragDropContext>
  );
}

DraggableList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({ id: PropTypes.string }),
    ])
  ),
  droppableClassName: PropTypes.string,
  flexGap: PropTypes.string,
  flexDirection: PropTypes.oneOf(["row", "column"]),
  renderValue: PropTypes.func,
  onChange: PropTypes.func,
  disabled: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

DraggableList.defaultProps = {
  dataList: [],
  droppableClassName: "droppableId",
  flexDirection: "column",
  flexGap: undefined,
  renderValue: undefined,
  onChange: undefined,
  disabled: false,
};
