import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import {
    Button as MuiButton,
    IconButton as MuiIconButton,
    ButtonGroup as MuiButtonGroup,
    alpha,
    ButtonProps,
    IconButtonProps,
    ButtonGroupProps,
} from '@mui/material';

interface ButtonStyledProps {
    customColor?: string;
    disableElevation?: boolean;
}
type ButtonStyledPropsType = ButtonProps & ButtonStyledProps;
export const Button = styled(MuiButton, {
    shouldForwardProp: (propName) => !['disableElevation', 'customColor'].includes(propName as string),
})<ButtonStyledPropsType>`
    width: ${(props) => (props.fullWidth ? '100%' : 'max-content')};
    &:not(.MuiButton-contained) {
        color: ${(props) => props.customColor} !important;
        border-color: ${(props) => props.customColor && alpha(props.customColor, 0.5)} !important;
    }

    &.MuiButton-contained {
        background-color: ${(props) => props.customColor} !important;
        color: white;
        &:not(:last-of-type) {
            border-color: white;
        }
    }
` as ComponentType<ButtonStyledPropsType>;

interface IconButtonStyledProps {
    customColor?: string;
    disableElevation?: boolean;
}
type IconButtonStyledPropsType = IconButtonProps & IconButtonStyledProps;
export const IconButton = styled(MuiIconButton, {
    shouldForwardProp: (propName) => !['disableElevation', 'customColor'].includes(propName as string),
})<IconButtonStyledPropsType>`
    box-sizing: border-box;
` as ComponentType<IconButtonStyledPropsType>;

interface ButtonGroupStyledProps {
    customColor?: string;
    disableElevation?: boolean;
}
type ButtonGroupStyledPropsType = ButtonGroupProps & ButtonGroupStyledProps;
export const ButtonGroup = styled(MuiButtonGroup, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})<ButtonGroupStyledPropsType>`
    width: ${(props) => (props.fullWidth ? '100%' : 'max-content')};
    & .MuiButtonGroup-grouped {
        &:not(.MuiButton-contained) {
            color: ${(props) => props.customColor};
            border-color: ${(props) => props.customColor && alpha(props.customColor, 0.5)};
        }

        &.MuiButton-contained {
            background-color: ${(props) => props.customColor};
            color: white;
            &:not(:last-of-type) {
                border-color: white;
            }
        }
    }
` as ComponentType<ButtonGroupStyledPropsType>;

// background-color: ${(props) => props.variant !== "contained" && props.customColor};
