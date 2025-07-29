import React from 'react';
import { Paper as MuiPaper } from './Paper.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { PaperProps } from '../../decs';
import Draggable from 'react-draggable';

const Paper: React.FC<PaperProps> = ({
    cancelDraggableOnClassNames,
    color,
    draggableId,
    elevation,
    height,
    imageLayout = 'cover',
    imageOpacity = 1,
    imageSrc,
    padding,
    square,
    textColor: _textColor,
    variant,
    width = 'max-content',
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    const cmp = (
        <MuiPaper
            customColor={customColor}
            elevation={variant !== 'outlined' ? elevation : undefined}
            height={height}
            padding={padding}
            imageLayout={imageLayout}
            imageOpacity={imageOpacity}
            imageSrc={imageSrc}
            muiColor={muiColor}
            square={square}
            textColor={textColor}
            variant={variant}
            width={width}
            {...props}
        />
    );

    if (!draggableId) return cmp;

    const classes = ([] as string[])
        .concat(cancelDraggableOnClassNames as string[])
        .filter((v) => v)
        .map((sel) => `[class*="${sel.replace('.', '')}"]`)
        .join(', ');

    return (
        <Draggable bounds="body" handle={`#${draggableId}`} cancel={classes}>
            {cmp}
        </Draggable>
    );
};

Paper.displayName = 'Paper';

export type { PaperProps } from '../../decs';

export default Paper;
