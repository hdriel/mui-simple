import React from 'react';
import type { ReactNode, PropsWithChildren } from 'react';
import { isEmpty } from 'lodash-es';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// eslint-disable-next-line import/no-extraneous-dependencies
import classNames from 'classnames';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { DraggableListUL, DraggableListULItem } from './DraggableList.styled';

import { getDataId, getItemStyle, getListStyle } from './DraggableList.styles';
import { useDragHandlers } from './DraggableList.hooks';

interface DataItem {
    id?: string;
    [key: string]: any;
}

interface DraggableListProps {
    className?: string;
    component?: string;
    dataList?: Array<string | DataItem>;
    disabled?: ((value: string | DataItem, index: number) => boolean) | boolean;
    droppableClassName?: string;
    fieldId?: string;
    flexDirection?: 'row' | 'column';
    flexGap?: string;
    onChange?: (newDataList: Array<string | DataItem>) => void;
    renderValue?: (value: string | DataItem, index: number) => ReactNode;
}

function DraggableList(props: PropsWithChildren<DraggableListProps>): ReactNode {
    const {
        component,
        dataList,
        disabled,
        droppableClassName,
        fieldId,
        flexDirection,
        flexGap,
        onChange,
        renderValue,
        className,
        ...rest
    } = props;
    const theme = useTheme();
    const { handleDragEnd, handleDragStart, handleDragUpdate, placeholderProps } = useDragHandlers({
        flexDirection,
        flexGap,
        dataList,
        onChange,
    });

    return (
        <DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
            <Droppable droppableId={droppableClassName}>
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

                            return (
                                <Draggable
                                    key={id ?? (typeof data === 'string' ? data : `${index}`)}
                                    draggableId={id ?? (typeof data === 'string' ? data : `${index}`)}
                                    index={index}
                                    isDragDisabled={typeof disabled === 'function' ? disabled(data, index) : disabled}
                                >
                                    {(providedItem, snapshot) => (
                                        <DraggableListULItem
                                            {...providedItem.draggableProps}
                                            {...providedItem.dragHandleProps}
                                            component={component}
                                            ref={providedItem.innerRef}
                                            style={getItemStyle({
                                                theme,
                                                isDragging: snapshot.isDragging,
                                                draggableStyle: providedItem.draggableProps.style,
                                                flexDirection,
                                            })}
                                        >
                                            {renderValue(data, index)}
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
        </DragDropContext>
    );
}

DraggableList.defaultProps = {
    dataList: [],
    droppableClassName: 'droppableId',
    flexDirection: 'column',
    fieldId: 'id',
    flexGap: undefined,
    renderValue: undefined,
    onChange: undefined,
    disabled: false,
    component: 'li',
    className: undefined,
};

export default DraggableList;
