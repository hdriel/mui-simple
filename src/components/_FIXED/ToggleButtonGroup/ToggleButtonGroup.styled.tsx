import React from 'react';
import { styled, css } from '@mui/material/styles';
import {
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
    Paper as MuiPaper,
    alpha,
    Divider as MuiDivider,
} from '@mui/material';

export const Divider = styled(({ ...props }) => <MuiDivider flexItem orientation="vertical" {...props} />)`
    margin: ${(props) => props.theme.spacing(1, 0.5)};
`;

export const ToggleButtonGroups = styled(({ ...props }) => <MuiPaper elevation={0} {...props} />, {
    shouldForwardProp: (propName) => !['fullWidth'].includes(propName as string),
})`
    width: ${(props) => (props.fullWidth ? '100%' : 'max-content')};
    display: flex;
    border: ${({ theme }) => `1px solid ${theme.palette.divider}`};
    flex-wrap: wrap;

    & .MuiToggleButtonGroup-grouped {
        margin: ${(props) => props.theme.spacing(0.5)};
        border: 0;
        &.Mui-disabled {
            border: 0;
        }
        &:not(:first-of-type) {
            border-radius: ${(props) => props.theme.shape.borderRadius};
        }
        &:first-of-type {
            border-radius: ${(props) => props.theme.shape.borderRadius};
        }
    }
`;

// & .MuiToggleButton-root:hover {
//     background-color: ${(props) => props.customColor && alpha(props.customColor, 0.2)};
// }
export const ToggleButtonGroup = styled(({ ...props }) => <MuiToggleButtonGroup {...props} />, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})`
    & .Mui-selected // , & .MuiTouchRipple-root
    {
        color: ${(props) => props.customColor};
    }

    & .Mui-selected {
        ${(props) => {
            const color = props.customColor && alpha(props.customColor, 0.2);
            return css`
                background-color: ${color ? `${color} !important` : ''};
            `;
        }}
    }
`;

export const ToggleButton = styled(({ value, disabled, disableRipple, onChange, ...props }) => (
    <MuiToggleButton value={value} disabled={disabled} onChange={onChange} disableRipple={disableRipple} {...props} />
))`
    width: max-content;
`;
