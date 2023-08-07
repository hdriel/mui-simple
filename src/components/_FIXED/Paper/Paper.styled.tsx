import { get } from 'lodash-es';
import { Paper as MuiPaper } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { numberToPx } from '../../../utils/helpers';
import type { ComponentType } from 'react';
import type { SerializedStyles } from '@emotion/serialize';

function imageStyle(props): SerializedStyles {
    if (!props.imageSrc) return css``;

    return css`
        background-color: unset;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url('${props.imageSrc}');
            background-size: ${props.imageLayout};
            opacity: ${props.imageOpacity};
            z-index: -1;
        }
    `;
}

interface PaperStylesProps {
    width: string | number;
    height: string | number;
    muiColor: string;
    square: boolean;
    variant: string;
    customColor: string;
    textColor: string;
    imageSrc: string;
    imageOpacity: number;
    elevation: number;
    imageLayout: string;
}
export const Paper = styled(MuiPaper, {
    shouldForwardProp: (propName) =>
        !['muiColor', 'customColor', 'textColor', 'imageSrc', 'imageOpacity', 'imageLayout'].includes(
            propName as string
        ),
})<PaperStylesProps>`
    width: ${(props) => numberToPx(props.width)};

    height: ${(props) => numberToPx(props.height)};

    background-color: ${(props) => props.customColor};

    color: ${(props) => props.textColor ?? get(props, `theme.palette.${props.muiColor}.contrastText`)};

    position: relative;

    z-index: 0;

    ${imageStyle};
` as ComponentType<PaperStylesProps>;
