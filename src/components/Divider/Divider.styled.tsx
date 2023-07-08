import { Divider as MuiDivider } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import type { DividerProps } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';

import { numberToPx } from '../../utils/helpers';

function getCustomBorderStyle({ color, thicknessValue, borderPosition }): SerializedStyles {
    const customColorStyle =
        color &&
        css`
            ${borderPosition}-color: ${color};
        `;

    const thicknessStyle =
        thicknessValue &&
        css`
            ${borderPosition}-width: ${thicknessValue};
        `;

    return css`
        ${customColorStyle};
        ${thicknessStyle};
    `;
}

function getCustomColorStyle({ color }): SerializedStyles {
    if (!color) return css``;

    return css`
        color: ${color};
    `;
}

function verticalStyle(props): SerializedStyles {
    if (props.orientation !== 'vertical') return css``;

    const { thickness, customColor: color } = props;

    const thicknessValue = (thickness !== undefined && numberToPx(thickness)) || 'thin';

    return css`
        & .MuiDivider-wrapper {
            ${getCustomColorStyle({ color })};
        }

        &::before,
        &::after {
            ${getCustomBorderStyle({
                color,
                thicknessValue,
                borderPosition: 'border-left',
            })};
        }
    `;
}

function horizontalStyle(props): SerializedStyles {
    if (props.orientation !== 'horizontal') return css``;

    const { thickness, customColor: color } = props;

    const thicknessValue = (thickness !== undefined && numberToPx(thickness)) || 'thin';

    return css`
        & .MuiDivider-wrapper {
            ${getCustomColorStyle({ color })};
        }

        &::before,
        &::after {
            ${getCustomBorderStyle({
                color,
                thicknessValue,
                borderPosition: 'border-top',
            })}
        }
    `;
}

export const Divider = styled(MuiDivider, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})<DividerProps>`
    ${verticalStyle}
    ${horizontalStyle}
`;
