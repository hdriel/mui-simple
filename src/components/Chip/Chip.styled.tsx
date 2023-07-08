import { get } from 'lodash-es';
import { Chip as MuiChip } from '@mui/material';
import type { Theme } from '@mui/material';
import { styled, css, emphasize } from '@mui/material/styles';
import type { SerializedStyles } from '@emotion/serialize';

interface ChipBreadCrumbsStyleProps {
    theme?: Theme;
    muiColor?: string;
    // Todo: assert if breadCrumbsStyle type is actually boolean
    breadCrumbsStyle?: boolean;
}
function chipBreadCrumbsStyle(props: ChipBreadCrumbsStyleProps): SerializedStyles {
    if (!props.breadCrumbsStyle) return css``;
    const { theme, muiColor } = props;
    const backgroundColor = get(
        theme,
        `palette.${muiColor}.main`,
        theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800]
    );
    const textColor = get(theme, `palette.${muiColor}.contrastText`, theme.palette.text.primary);

    return css`
    height: ${theme.spacing(3)};
    color: ${textColor};
    font-weight: ${theme.typography.fontWeightRegular};
    &:hover, &:focus {
      background-color: ${emphasize(backgroundColor, 0.06)};
    }
    &:active {
      box-shadow: ${theme.shadows[1]};
      background-color: ${emphasize(backgroundColor, 0.12)};
    },
  `;
}

interface MultiLineStyleProps {
    // Todo: assert if multiLine type is actually boolean
    multiLine?: boolean;
}
function multiLineStyle(props): SerializedStyles {
    if (!props.multiLine) return css``;

    return css`
        height: auto;
        & .MuiChip-label {
            display: block;
            white-space: normal;
        }
    `;
}

interface ChipStyledProps {
    width?: string;
    rounded?: boolean;
    customColor?: string;
    textColor?: string;
}
type ChipStyledPropsType = ChipStyledProps & ChipProps;
export const Chip = styled(MuiChip, {
    shouldForwardProp: (propName) =>
        !['textColor', 'customColor', 'multiLine', 'breadCrumbsStyle', 'rounded'].includes(propName as string),
})<ChipStyledPropsType>`
    width: ${(props) => props.width ?? 'auto'};
    border-radius: ${(props) => (props.rounded ? undefined : '4px')};
    background-color: ${(props) => props.customColor};
    color: ${(props) => props.textColor};
    ${multiLineStyle}
    ${chipBreadCrumbsStyle}
`;
