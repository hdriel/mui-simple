import { css } from '@mui/material/styles';
import type { SerializedStyles } from '@emotion/serialize';
import { numberToPx } from '../../../utils/helpers';

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

export function verticalStyle(props): SerializedStyles {
    if (props.orientation !== 'vertical') return css``;

    const { thickness, color } = props;

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

export function horizontalStyle(props): SerializedStyles {
    if (props.orientation !== 'horizontal') return css``;

    const { thickness, color } = props;

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
            })};
        }
    `;
}
