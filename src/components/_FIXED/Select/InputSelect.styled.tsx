import { styled, css } from '@mui/material/styles';

import {
    Select as MuiSelect,
    Box as MuiBox,
    Stack as MuiStack,
    FormControl as MuiFormControl,
    InputLabel as MuiInputLabel,
    MenuItem as MuiMenuItem,
    FormHelperText as MuiFormHelperText,
    ListSubheader as MuiListSubheader,
    ListItemText as MuiListItemText,
} from '@mui/material';
import { getCustomColor } from '../../../utils/helpers';
import { ComponentType } from 'react';

export const Stack = MuiStack;

export const Box = MuiBox;

export const MenuItem = MuiMenuItem;

export const ListSubheader = MuiListSubheader;

export const ListItemText = MuiListItemText;

interface FormControlProps {
    colorText: string;
    colorLabel: string;
    colorActive: string;
    [key: string]: any;
}
export const FormControl = styled(MuiFormControl, {
    shouldForwardProp: (propName: string) => !['colorText', 'colorLabel', 'colorActive'].includes(propName as string),
})<FormControlProps>`
    ${(props: any) => {
        const colorText = getCustomColor(props, { field: 'colorText' });
        const colorLabel = getCustomColor(props, { field: 'colorLabel' });
        const hoverColorLabel = getCustomColor(props, {
            field: 'colorLabel',
            darken: 0.3,
        });
        const colorActive = getCustomColor(props, { field: 'colorActive' });

        return css`
            & .content-body {
                color: ${colorText} !important;
            }

            & label {
                color: ${colorLabel};
            }

            & label.Mui-focused {
                color: ${colorActive ?? colorLabel};
            }

            & .MuiInputBase-root:after {
                border-bottom-color: ${colorActive ?? colorLabel};
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
                    border-color: ${colorActive ?? colorLabel};
                }
            }
        `;
    }}
` as ComponentType<FormControlProps>;

export const InputLabel = MuiInputLabel;
export const FormHelperText = MuiFormHelperText;

export const Select = MuiSelect;
