import React from 'react';
import { Box } from './Card.styled';

function CardExpandedContent({ ...props }): React.ReactElement {
    return <Box {...props} />;
}

CardExpandedContent.displayName = 'CardExpandedContent';

CardExpandedContent.defaultProps = {};

export default CardExpandedContent;
