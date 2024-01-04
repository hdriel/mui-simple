import { useEffect, useState } from 'react';
import useElementSize from './useElementSize';
import { getTextWidth } from '../utils/helpers';

export function useEllipsisActive({ active, text, maxRows }): [any, boolean] {
    const [ref, { width: widthText }] = useElementSize(active);
    const [isEllipsis, setIsEllipsis] = useState(false);

    useEffect(() => {
        if (active) {
            const { offsetWidth } = getTextWidth(text);
            const rows = getElementRowCount(ref.current);
            const isEllipsis = !!(maxRows ? rows > maxRows : rows <= 1 && widthText && offsetWidth + 4 >= widthText);
            setIsEllipsis(isEllipsis);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current, widthText]);

    return [ref, isEllipsis];
}

function getElementRowCount(element): number {
    if (!element) return 1;

    const style = getComputedStyle(element);
    const lineHeight = parseFloat(style.lineHeight);
    const { height } = element.getBoundingClientRect();
    const rowCount = Math.round(height / lineHeight);

    return rowCount;
}
