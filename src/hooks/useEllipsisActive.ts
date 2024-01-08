import { useEffect, useState } from 'react';
import { useTextElementSize } from './useElementSize';

const TEXT_ELLIPSIS_GAP = 65;
export function useEllipsisActive({ active, maxRows }): [any, boolean] {
    const [ref, { width: widthText }] = useTextElementSize(active);
    const [isEllipsis, setIsEllipsis] = useState(false);

    useEffect(() => {
        if (active) {
            const lastRowWidth = getElementLastRowWidth(ref.current);
            const rows = getElementRowCount(ref.current);
            const isOverheadText = lastRowWidth <= TEXT_ELLIPSIS_GAP;
            const isEllipsis = !!(maxRows ? rows > maxRows : rows <= 1 && isOverheadText);

            setIsEllipsis(isEllipsis);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, widthText]);

    return [ref, isEllipsis];
}

function getElementRowCount(element): number {
    if (!element) return 1;

    const style = window?.getComputedStyle(element);
    const lineHeight = parseFloat(`${style?.lineHeight}`);

    const display = element.style.display;
    element.style.display = 'block';
    const { height } = element.getBoundingClientRect();
    element.style.display = display;
    const rowCount = Math.round(height / lineHeight);

    return rowCount || 1;
}

function getElementLastRowWidth(element): number {
    if (!element) return 0;

    const cursorElement = window?.document.createElement('span');
    element.appendChild(cursorElement);
    const offset = cursorElement.offsetLeft;
    element.removeChild(cursorElement);

    return offset;
}
