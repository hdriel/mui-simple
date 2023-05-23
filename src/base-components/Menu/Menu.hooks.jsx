import { cloneElement, isValidElement, useMemo, useRef, useState } from "react";
import { isDefined } from "../../utils/helpers";

export function useChildrenComponentBinding({
  boundChildrenId,
  boundChildrenIndex,
  children,
  setAnchorEl,
  anchorElementRef,
}) {
  const elementChildren = [].concat(children);
  let validIndex = 0;

  return elementChildren.map((child, index) => {
    if (!isValidElement(child)) return child;
    return cloneElement(child, {
      key: index,
      ...(!anchorElementRef &&
        ((isDefined(boundChildrenId) && boundChildrenId === child.props.id) ||
          (isDefined(boundChildrenIndex) &&
            boundChildrenIndex === validIndex++)) && {
          onClick: (event, ...args) => {
            setAnchorEl(event?.currentTarget);
            child.props.onClick?.(event, ...args);
          },
        }),
    });
  });
}

export function useAnchorProps({
  contextMenu,
  anchorElementRef,
  anchorPosition,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const anchorProps = useMemo(() => {
    if (contextMenu) {
      return {
        anchorReference: "anchorPosition",
        anchorPosition: { left: contextMenu?.mouseX, top: contextMenu?.mouseY },
      };
    }

    if (anchorElementRef?.current ?? anchorEl) {
      const { vertical, horizontal } = anchorPosition ?? {};

      const position =
        vertical || horizontal
          ? { vertical: vertical ?? "bottom", horizontal: horizontal ?? "left" }
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
  }, [anchorElementRef?.current, anchorEl, contextMenu, anchorPosition]);

  return { anchorProps, setAnchorEl };
}
