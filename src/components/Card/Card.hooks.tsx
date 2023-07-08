import { useState } from 'react';
import type { ReactNode, PropsWithChildren } from 'react';

interface CardExpandedContent {
    expanded?: boolean;
    cardContentExpended?: ReactNode | string;
    content?: ReactNode[] | string[];
    isMediaOnTop?: boolean;
    handleExpandClick?: () => void;
}

type FlexDirectionType = 'row' | 'row-reverse' | 'column' | 'column-reverse';
interface UseCardExpandedContentProps {
    flexDirection?: FlexDirectionType;
    mediaOnTop?: boolean;
}
export const useCardExpandedContent = (props: PropsWithChildren<UseCardExpandedContentProps>): CardExpandedContent => {
    const { children, flexDirection, mediaOnTop } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = (): void => setExpanded(!expanded);
    const isMediaOnTop = mediaOnTop === undefined && ['row', 'row-reverse'].includes(flexDirection) ? true : mediaOnTop;

    const content = [].concat(children);
    const cardContentExpendedIndex = content.findIndex((box) => box?.type?.displayName === 'CardContentExpended');
    let cardContentExpended: ReactNode | string;
    if (cardContentExpendedIndex >= 0) {
        const [ContentExpended] = content.splice(cardContentExpendedIndex, 1);
        cardContentExpended = ContentExpended;
    }

    return {
        expanded,
        cardContentExpended,
        content,
        isMediaOnTop,
        handleExpandClick,
    };
};
