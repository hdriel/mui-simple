import type { ComponentType } from 'react';
import { get } from 'lodash-es';
import { Chip as MuiChip } from '@mui/material';
import { styled, css, emphasize } from '@mui/material/styles';
import type { ChipProps as MuiChipProps } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';
import type { ChipProps } from '../desc';

type ChipStyledPropsType = Omit<ChipProps, 'label'> & MuiChipProps;

function chipBreadCrumbsStyle(props: ChipStyledPropsType): SerializedStyles {
    if (!props.useStyleBreadCrumb) return css``;

    const { theme, color: muiColor, customColor, textColor: _textColor } = props;

    const backgroundColor = get(
        theme,
        `palette.${muiColor}.main`,
        muiColor ?? customColor ?? theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    );
    const textColor = get(theme, `palette.${muiColor}.contrastText`, _textColor ?? theme.palette.text.primary);

    return css`
        height: ${theme.spacing(3)};
        color: ${textColor};
        font-weight: ${theme.typography.fontWeightRegular};
        
        &:hover, &:focus {
          background-color: ${backgroundColor && emphasize(backgroundColor, 0.06)};
        }
        
        &:active {
          box-shadow: ${theme.shadows[1]};
          background-color: ${backgroundColor && emphasize(backgroundColor, 0.12)};
        },
  `;
}

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
        !['textColor', 'customColor', 'multiLine', 'useStyleBreadCrumb', 'rounded', 'alignEndIcon'].includes(
            propName as string
        ),
})<ChipStyledPropsType>`
    border-radius: ${(props) => (props.rounded ? undefined : '4px')};
    background-color: ${(props) => props.customColor};
    color: ${(props) => props.textColor};
    ${multiLineStyle}
    ${chipBreadCrumbsStyle}
    ${alignEndIconStyle}
` as ComponentType<ChipStyledPropsType>;
