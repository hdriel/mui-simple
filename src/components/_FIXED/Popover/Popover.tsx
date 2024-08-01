import React, { Children, useState } from 'react';
import type { ReactElement, PropsWithChildren } from 'react';
import { Popover as MuiPopover } from './Popover.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { PopoverProps } from '../../decs';
import { useAnchorProps, useChildrenComponentBinding } from '../Menu/Menu.hooks';

const Popover: React.FC<PropsWithChildren<PopoverProps>> = (props): ReactElement | React.ReactNode => {
    const {
        color,
        content,
        open,
        anchorElementRef,
        anchorPosition,
        boundChildrenId,
        boundChildrenIndex = 0,
        children,
        vertical,
        horizontal,
        onClick,
        onClose,
        anchorEl,
        showOnHover = true,
        ...rest
    } = props;
    const [customColor, muiColor] = useCustomColor(color);
    const [openControlled, setOpenControlled] = useState(false);

    const { anchorProps, setAnchorEl } = useAnchorProps({
        anchorElementRef,
        anchorPosition,
    });

    const boundingChildren = useChildrenComponentBinding({
        open,
        boundChildrenId,
        boundChildrenIndex,
        children,
        setAnchorEl,
        ref: anchorElementRef,
        setOpenControlled: open === undefined ? (event, openControl) => setOpenControlled(openControl) : undefined,
        showOnHover,
    });

    const _anchorEl = anchorEl ?? (anchorProps as any)?.anchorEl;

    if (!content) {
        return children;
    }

    return (
        <>
            {Children.toArray(boundingChildren)}
            <MuiPopover
                open={!!(_anchorEl && (open ?? openControlled))}
                color={muiColor as any}
                customColor={muiColor ? undefined : customColor}
                sx={{
                    pointerEvents: 'none',
                }}
                anchorEl={_anchorEl}
                anchorOrigin={
                    (vertical || horizontal) && {
                        vertical: vertical ?? 'top',
                        horizontal: horizontal ?? 'right',
                    }
                }
                transformOrigin={
                    (vertical || horizontal) && {
                        vertical: vertical ?? 'top',
                        horizontal: horizontal ?? 'right',
                    }
                }
                {...rest}
            >
                {content}
            </MuiPopover>
        </>
    );
};

Popover.displayName = 'Popover';

export type { PopoverProps } from '../../decs';
export default Popover;
