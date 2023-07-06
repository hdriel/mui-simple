import { useState } from 'react';

export const useCardExpandedContent = ({ children, flexDirection, mediaOnTop }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => setExpanded(!expanded);
    const isMediaOnTop = mediaOnTop === undefined && ['row', 'row-reverse'].includes(flexDirection) ? true : mediaOnTop;

    let content = [].concat(children);
    const cardContentExpendedIndex = content.findIndex((box) => box?.type?.displayName === 'CardContentExpended');
    let cardContentExpended = undefined;
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
