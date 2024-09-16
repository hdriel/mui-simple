import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';

import { Button as MuiButton, IconButton as MuiIconButton, ButtonGroup as MuiButtonGroup, alpha } from '@mui/material';
import type {
    ButtonProps as MuiButtonProps,
    IconButtonProps,
    ButtonGroupProps as MuiButtonGroupProps,
} from '@mui/material';
import type { ButtonProps, ButtonGroupProps } from '../../decs';

// ### Button
type ButtonStyledPropsType = MuiButtonProps &
    Omit<ButtonProps, 'endIcon' | 'startIcon'> & { endIcon: any; startIcon: any };
export const Button = styled(MuiButton, {
    shouldForwardProp: (propName: string) => !['disableElevation', 'customColor'].includes(propName as string),
})<ButtonStyledPropsType>`
    width: ${(props: any) => (props.fullWidth ? '100%' : 'max-content')};
    &:not(.MuiButton-contained) {
        color: ${(props: any) => props.customColor} !important;
        border-color: ${(props: any) => props.customColor && alpha(props.customColor, 0.5)} !important;
    }

    &.MuiButton-contained {
        background-color: ${(props: any) => props.customColor} !important;
        color: white;
        &:not(:last-of-type) {
            border-color: white;
        }
    }
` as ComponentType<ButtonStyledPropsType>;

// ### IconButton
type IconButtonStyledPropsType = IconButtonProps & ButtonProps;
export const IconButton = styled(MuiIconButton, {
    shouldForwardProp: (propName: string) => !['disableElevation', 'customColor'].includes(propName as string),
})<IconButtonStyledPropsType>`
    box-sizing: border-box;
` as ComponentType<IconButtonStyledPropsType>;

// ### ButtonGroup
type ButtonGroupStyledPropsType = ButtonGroupProps & MuiButtonGroupProps;
export const ButtonGroup = styled(MuiButtonGroup, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})<ButtonGroupStyledPropsType>`
    width: ${(props: any) => (props.fullWidth ? '100%' : 'max-content')};
    & .MuiButtonGroup-grouped {
        &:not(.MuiButton-contained) {
            color: ${(props: any) => props.customColor};
            border-color: ${(props: any) => props.customColor && alpha(props.customColor, 0.5)};
        }

        &.MuiButton-contained {
            background-color: ${(props: any) => props.customColor};
            color: white;
            &:not(:last-of-type) {
                border-color: white;
            }
        }
    }
` as ComponentType<ButtonGroupStyledPropsType>;

// background-color: ${(props: any) => props.variant !== "contained" && props.customColor};
