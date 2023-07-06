import React from 'react';

import { Box } from './Card.styled';

export default function CardContentExpended({ ...props }) {
    return <Box {...props} />;
}
CardContentExpended.displayName = 'CardContentExpended';

CardContentExpended.propTypes = {};

CardContentExpended.defaultProps = {};
