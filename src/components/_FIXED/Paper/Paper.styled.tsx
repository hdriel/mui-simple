import { get } from 'lodash-es';
import { Paper as MuiPaper } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { numberToEm, numberToPx } from '../../../utils/helpers';
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
    width?: string | number;
    height?: string | number;
    padding?: string | number;
    muiColor: string;
    square?: boolean;
    variant?: string;
    customColor: string;
    textColor: string;
    imageSrc?: string;
    imageOpacity: number;
    elevation?: number;
    id?: string;
    imageLayout: string;
}
export const Paper = styled(MuiPaper, {
    shouldForwardProp: (propName: string) =>
        !['muiColor', 'customColor', 'textColor', 'imageSrc', 'imageOpacity', 'imageLayout', 'padding'].includes(
            propName
        ) || propName === 'id',
})<PaperStylesProps>`
    width: ${(props: any) => numberToPx(props.width)};

    height: ${(props: any) => numberToPx(props.height)};

    padding: ${(props: any) => numberToEm(props.padding, true)};

    background-color: ${(props: any) => props.customColor};

    color: ${(props: any) => props.textColor ?? get(props, `theme.palette.${props.muiColor}.contrastText`)};

    position: relative;

    z-index: 0;

    ${imageStyle};
` as ComponentType<PaperStylesProps>;
