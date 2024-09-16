import React from 'react';
import type { ComponentType } from 'react';
import { styled, css } from '@mui/material/styles';
import { CommitRounded as CommitRoundedIcon } from '@mui/icons-material';
import { TextField as MuiTextField, Box as MuiBox, Stack as MuiStack } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import type { InputBaseProps } from '../../decs';
import { getCustomColor } from '../../../utils/helpers';
import Button from '../Button/Button';

export const Stack = MuiStack;
export const Box = MuiBox;

export const SliderIcon = (props): React.ReactElement | React.ReactNode => (
    <Button icon={<CommitRoundedIcon />} {...props} />
);

type TextFieldStyledType = InputBaseProps & TextFieldProps & any;
export const TextField = styled(MuiTextField, {
    shouldForwardProp: (propName: string) =>
        !['colorText', 'colorLabel', 'colorActive', 'textAlign', 'direction'].includes(propName as string),
})<TextFieldStyledType>`
    ${(props: any) => {
        const direction = props.direction as 'rtl' | 'ltr';
        const [colorText] = getCustomColor(props, { field: 'colorText' });
        const [colorLabel] = getCustomColor(props, { field: 'colorLabel' });
        const [hoverColorLabel] = getCustomColor(props, {
            field: 'colorLabel',
            darken: 0.3,
        });
        const [colorActive] = getCustomColor(props, { field: 'colorActive' });
        const isColorActiveExists = !!colorActive;

        return css`
            & input {
                color: ${colorText ? `${colorText} !important` : ''};
                text-align: ${props.textAlign};
                direction: ${direction ? `${direction} !important` : ''};
            }
            & label {
                color: ${colorLabel};
            }
            & label.Mui-focused {
                color: ${isColorActiveExists ? colorActive : colorLabel};
            }
            & .MuiInputBase-root:after {
                border-bottom-color: ${isColorActiveExists ? colorActive : colorLabel};
            }
            & .MuiInput-underline:after {
                border-bottom-color: ${colorLabel};
            }
            & .MuiInputBase-root .MuiFilledInput-root:after {
                border-bottom-color: ${colorLabel};
            }
            & .MuiOutlinedInput-root {
                & fieldset {
                    border-color: ${colorLabel};
                }
                &:hover fieldset {
                    border-color: ${hoverColorLabel};
                }
                &.Mui-focused fieldset {
                    border-color: ${isColorActiveExists ? colorActive : colorLabel};
                }
            }
        `;
    }}
` as ComponentType<TextFieldStyledType>;
