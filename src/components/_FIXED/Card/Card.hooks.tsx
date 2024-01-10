import { useState } from 'react';
import type { ReactNode, PropsWithChildren } from 'react';

interface CardExpandedContent {
    expanded?: boolean;
    cardContentExpanded?: ReactNode | string;
    content?: ReactNode[] | string[];
    isMediaOnTop?: boolean;
    handleExpandClick?: () => void;
}

interface UseCardExpandedContentProps {
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    mediaOnTop?: boolean;
}

export const useCardExpandedContent = (props: PropsWithChildren<UseCardExpandedContentProps>): CardExpandedContent => {
    const { children, flexDirection, mediaOnTop } = props;
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = (): void => setExpanded(!expanded);
    const isMediaOnTop = mediaOnTop === undefined && ['row', 'row-reverse'].includes(flexDirection) ? true : mediaOnTop;

    const content = [].concat(children);
    const cardContentExpandedIndex = content.findIndex((box) => box?.type?.displayName === 'CardExpandedContent');
    let cardContentExpanded: ReactNode | string;

    if (cardContentExpandedIndex >= 0) {
        const [ContentExpanded] = content.splice(cardContentExpandedIndex, 1);
        cardContentExpanded = ContentExpanded;
    }

    return {
        expanded,
        cardContentExpanded,
        content,
        isMediaOnTop,
        handleExpandClick,
    };
};
