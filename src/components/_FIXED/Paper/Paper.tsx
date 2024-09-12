import React from 'react';
import { Paper as MuiPaper } from './Paper.styled';
import { useCustomColor } from '../../../utils/helpers';
import type { PaperProps } from '../../decs';

const Paper: React.FC<PaperProps> = ({
    color,
    elevation,
    height,
    imageLayout = 'cover',
    imageOpacity = 1,
    imageSrc,
    square,
    textColor: _textColor,
    variant,
    width,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor, muiColor] = useCustomColor(color);
    const [textColor] = useCustomColor(_textColor);

    return (
        <MuiPaper
            customColor={customColor}
            elevation={variant !== 'outlined' ? elevation : undefined}
            height={height}
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
};

Paper.displayName = 'Paper';

export type { PaperProps } from '../../decs';

export default Paper;
