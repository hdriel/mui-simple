import type { ComponentType } from 'react';
import { Chip as MuiChip } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import type { ChipProps as MuiChipProps } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';
import type { ChipProps } from '../../decs';

type ChipStyledPropsType = Omit<ChipProps, 'label'> & MuiChipProps;

function multiLineStyle(props: ChipStyledPropsType): SerializedStyles {
    if (!props.multiLine) return css``;

    return css`
        height: auto;
        & .MuiChip-label {
            display: block;
            white-space: normal;
        }
    `;
}

function alignEndIconStyle(props: ChipStyledPropsType): SerializedStyles {
    if (!props.alignEndIcon) return css``;

    return css`
        & .MuiChip-deleteIcon {
            position: absolute;
            right: 0;
        }
    `;
}

export const Chip = styled(MuiChip, {
    shouldForwardProp: (propName) =>
        !['textColor', 'customColor', 'multiLine', 'rounded', 'alignEndIcon'].includes(propName as string),
})<ChipStyledPropsType>`
    border-radius: ${(props) => (props.rounded ? undefined : '4px')};
    background-color: ${(props) => props.customColor};
    color: ${(props) => props.textColor};
    ${multiLineStyle}
    ${alignEndIconStyle}
` as ComponentType<ChipStyledPropsType>;
