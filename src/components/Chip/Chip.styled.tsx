import { get } from 'lodash-es';
import { Chip as MuiChip } from '@mui/material';
import { styled, css, emphasize } from '@mui/material/styles';

function chipBreadCrumbsStyle(props) {
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

function multiLineStyle(props) {
    if (!props.multiLine) return css``;

    return css`
        height: auto;
        & .MuiChip-label {
            display: block;
            white-space: normal;
        }
    `;
}

export const Chip = styled(MuiChip, {
    shouldForwardProp: (propName) =>
        !['textColor', 'customColor', 'multiLine', 'breadCrumbsStyle', 'rounded'].includes(propName),
})`
    width: ${(props) => props.width ?? 'auto'};
    border-radius: ${(props) => (props.rounded ? undefined : '4px')};
    background-color: ${(props) => props.customColor};
    color: ${(props) => props.textColor};
    ${multiLineStyle}
    ${chipBreadCrumbsStyle}
`;
