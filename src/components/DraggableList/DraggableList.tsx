import React from 'react';
import type { ElementType } from 'react';
import { isEmpty } from 'lodash-es';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { DraggableListUL, DraggableListULItem } from './DraggableList.styled';
import { getDataId, getItemStyle, getListStyle } from './DraggableList.styles';
import type { DataItem } from './DraggableList.styles';
import { useDragHandlers } from './DraggableList.hooks';
import type { DraggableListProps } from '../decs';

// https://react-beautiful-dnd.netlify.app/?path=/story/single-vertical-list--basic
const DraggableList: React.FC<DraggableListProps> = (props): React.ReactElement | React.ReactNode => {
    const {
        component = 'li',
        dataList = [],
        disabled = false,
        droppableClassName = 'droppableId',
        fieldId = 'id',
        flexDirection = 'column',
        flexGap,
        onChange,
        renderValue,
        className,
        useDraggableContext,
        draggableListType,
        ...rest
    } = props;
    const theme = useTheme();
    const type = draggableListType ?? (useDraggableContext ? droppableClassName : undefined);
    const { handleDragEnd, handleDragStart, handleDragUpdate, placeholderProps } = useDragHandlers({
        disabled,
        flexDirection,
        droppableId: droppableClassName,
        flexGap,
        dataList,
        onChange,
    });

    const content = (
        <Droppable
            droppableId={droppableClassName}
            type={type}
            direction={flexDirection?.includes('row') ? 'horizontal' : 'vertical'}
        >
            {(provided, snapshot) => (
                <DraggableListUL
                    {...rest}
                    {...provided.droppableProps}
                    flexDirection={flexDirection}
                    flexGap={flexGap}
                    className={classNames([droppableClassName, className])}
                    ref={provided.innerRef}
                    style={getListStyle({ theme, isDraggingOver: snapshot.isDraggingOver })}
                >
                    {dataList?.map((data: DataItem, index) => {
                        const id = getDataId(data, fieldId, index);
                        const key = id ? `${id}-${index}` : typeof data === 'string' ? data : `${index}`;

                        return (
                            <Draggable
                                key={key}
                                draggableId={id ?? key}
                                index={index}
                                isDragDisabled={
                                    !!disabled ||
                                    (typeof data.disabled === 'function' ? data.disabled(data, index) : data.disabled)
                                }
                            >
                                {(providedItem, snapshot) => (
                                    <DraggableListULItem
                                        {...providedItem.draggableProps}
                                        {...providedItem.dragHandleProps}
                                        component={component as ElementType}
                                        ref={providedItem.innerRef}
                                        style={getItemStyle({
                                            theme,
                                            isDragging: snapshot.isDragging,
                                            draggableStyle: providedItem.draggableProps.style,
                                            flexDirection,
                                        })}
                                    >
                                        {renderValue(data, index, snapshot)}
                                    </DraggableListULItem>
                                )}
                            </Draggable>
                        );
                    })}

                    {provided.placeholder}

                    {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                        <Box
                            className="placeholder"
                            sx={{
                                position: 'absolute',
                                borderRadius: '3px',
                                border: 'dashed 1px blue',
                                backgroundColor: 'white',
                                top: placeholderProps.clientY,
                                left: placeholderProps.clientX,
                                height: placeholderProps.clientHeight,
                                width: placeholderProps.clientWidth,
                            }}
                        />
                    )}
                </DraggableListUL>
            )}
        </Droppable>
    );

    return useDraggableContext ? (
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
            {content}
        </DragDropContext>
    ) : (
        content
    );
};

export type { DraggableListProps } from '../decs';
export default DraggableList;
