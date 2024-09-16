import React from 'react';
import { styled, css } from '@mui/material/styles';
import {
    ToggleButton as MuiToggleButton,
    ToggleButtonGroup as MuiToggleButtonGroup,
    Paper as MuiPaper,
    alpha,
    Divider as MuiDivider,
    Box,
    BoxProps,
} from '@mui/material';
import type { ToggleButtonGroupProps, ToggleButtonGroupsProps } from '../../decs';
import { isDefined } from '../../../utils/helpers';

export const Divider = styled(({ ...props }) => <MuiDivider flexItem orientation="vertical" {...props} />)`
    margin: ${(props: any) => props.theme.spacing(1, 0.5)};
`;

export const Container: React.FC<BoxProps & { helperTextAlign?: string; fullWidth?: boolean }> = styled(Box, {
    shouldForwardProp: (propName: string) => !['helperTextAlign', 'fullWidth'].includes(propName as string),
})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${(props: any) => (props.fullWidth ? '100%' : 'max-content')};
    position: relative;

    & > .MuiFormHelperText-root {
        width: 100%;
        display: flex;
        justify-content: ${(props: any) => (isDefined(props.helperTextAlign) ? props.helperTextAlign : 'flex-start')};
        padding-inline-start: ${(props: any) => (props.helperTextAlign ? undefined : '5px')};
    }
`;

export const ToggleButtonGroups = styled(({ ...props }) => <MuiPaper elevation={0} {...props} />, {
    shouldForwardProp: (propName: string) => !['fullWidth'].includes(propName as string),
})<ToggleButtonGroupsProps>`
    width: ${(props: any) => (props.fullWidth ? '100%' : 'max-content')};
    display: flex;
    border: ${({ theme }) => `1px solid ${theme.palette.divider}`};
    flex-wrap: wrap;

    & .MuiToggleButtonGroup-grouped {
        margin: ${(props: any) => props.theme.spacing(0.5)};
        border: 0;
        &.Mui-disabled {
            border: 0;
        }
        &:not(:first-of-type) {
            border-radius: ${(props: any) => props.theme.shape.borderRadius};
        }
        &:first-of-type {
            border-radius: ${(props: any) => props.theme.shape.borderRadius};
        }
    }
`;

// & .MuiToggleButton-root:hover {
//     background-color: ${(props: any) => props.customColor && alpha(props.customColor, 0.2)};
// }
export const ToggleButtonGroup = styled(({ ...props }) => <MuiToggleButtonGroup {...props} />, {
    shouldForwardProp: (propName: string) => !['customColor', 'wrap'].includes(propName as string),
})<ToggleButtonGroupProps>`
    flex-wrap: ${(props: any) => (props.wrap ? 'wrap' : 'unset')};
    & .Mui-selected // , & .MuiTouchRipple-root
    {
        color: ${(props: any) => props.customColor};
    }

    & .Mui-selected {
        ${(props: any) => {
            const color = props.customColor && alpha(props.customColor, 0.2);
            return css`
                background-color: ${color ? `${color} !important` : ''};
            `;
        }}
    }
`;

export const ToggleButton = styled(MuiToggleButton)`
    width: max-content;
`;
