import React from 'react';

import { Box } from './Card.styled';

export default function CardContentExpended({ ...props }): React.ReactNode {
    return <Box {...props} />;
}
CardContentExpended.displayName = 'CardContentExpended';

CardContentExpended.propTypes = {};

CardContentExpended.defaultProps = {};
