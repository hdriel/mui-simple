import { cloneElement, isValidElement, useMemo, useState } from 'react';
import { isDefined } from '../../../utils/helpers';

export function useChildrenComponentBinding({
    boundChildrenId,
    boundChildrenIndex,
    children,
    setAnchorEl,
    ref,
    setOpenControlled,
    showOnHover,
}: {
    open?: boolean;
    boundChildrenId?: string;
    boundChildrenIndex?: number | boolean;
    children?: any;
    setAnchorEl?: (event: any) => void;
    anchorElementRef?: any;
    ref?: any;
    setOpenControlled?: (event: any, open?: boolean) => void;
    showOnHover?: boolean;
}): any[] {
    const elementChildren = [].concat(children).filter((v) => v);
    let validIndex = 0;

    return elementChildren.map((child, index) => {
        if (!isValidElement(child)) {
            return child;
        }

        return cloneElement(child, {
            key: index,
            ...(((!boundChildrenIndex && isDefined(boundChildrenId) && boundChildrenId === (child.props as any).id) ||
                (!boundChildrenId && isDefined(boundChildrenIndex) && boundChildrenIndex === validIndex++)) && {
                ref,
                innerRef: ref,
                onClick: (event, ...args) => {
                    setAnchorEl(event?.currentTarget);
                    setOpenControlled?.(event, true);
                    (child.props as any).onClick?.(event, ...args);
                },
                ...(showOnHover && {
                    onMouseEnter: (event, ...args) => {
                        setAnchorEl(event?.currentTarget);
                        setOpenControlled?.(event, true);
                        (child.props as any).onMouseEnter?.(event, ...args);
                    },
                    onMouseLeave: (event, ...args) => {
                        setAnchorEl(null);
                        setOpenControlled?.(event, false);
                        (child.props as any).onMouseLeave?.(event, ...args);
                    },
                }),
            }),
        });
    });
}

interface AnchorPositionMouse {
    left: number;
    top: number;
}
interface AnchorPositionRelative {
    vertical: 'top' | 'center' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
}

interface AnchorProps {
    anchorEl: any;
    anchorReference?: 'anchorPosition';
    anchorPosition?: AnchorPositionMouse | AnchorPositionRelative;
    transformOrigin?: AnchorPositionMouse | AnchorPositionRelative;
}

interface UseAnchorProps {
    contextMenu?: any;
    anchorElementRef?: any;
    anchorPosition?: Partial<AnchorPositionRelative | AnchorPositionMouse>;
}
interface UseAnchorPropsResponse {
    setAnchorEl: (value: any) => void;
    anchorProps:
        | object
        | { anchorReference: 'anchorPosition'; anchorPosition: { top: number; left: number } }
        | {
              anchorEl: any;
              transformOrigin: AnchorPositionRelative;
              anchorPosition: AnchorPositionRelative;
          };
}
export function useAnchorProps({
    contextMenu,
    anchorElementRef,
    anchorPosition,
}: UseAnchorProps): UseAnchorPropsResponse {
    const [anchorEl, setAnchorEl] = useState(null);

    const anchorProps = useMemo(() => {
        if (contextMenu && !(anchorElementRef?.current ?? anchorEl)) {
            return {
                anchorReference: 'anchorPosition',
                anchorPosition: { left: contextMenu?.mouseX, top: contextMenu?.mouseY },
            };
        }

        if (anchorElementRef?.current ?? anchorEl) {
            const { vertical, horizontal } = (anchorPosition ?? {}) as any;

            const position =
                vertical || horizontal
                    ? { vertical: vertical ?? 'bottom', horizontal: horizontal ?? 'left' }
                    : undefined;

            return {
                anchorEl: anchorEl ?? anchorElementRef?.current,
                ...(position && {
                    anchorPosition: position,
                    transformOrigin: position,
                }),
            };
        }

        return {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [anchorElementRef?.current, anchorEl, contextMenu, anchorPosition]);

    return { anchorProps, setAnchorEl };
}
