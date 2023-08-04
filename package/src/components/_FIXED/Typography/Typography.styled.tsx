import type { ComponentType } from 'react';
import { Box, Typography as MuiTypography } from '@mui/material';
import type { TypographyProps, BoxProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';

import { ellipsisRow1, ellipsisRows } from './Typography.styles';
import { numberToPx } from '../../../utils/helpers';

interface TypographyBorderProps {
    autoWidth?: boolean;
    noWrap?: boolean;
    width?: string | number;
    border?: boolean | string;
    rows?: number;
    [key: string]: any;
}
type TypographyBorderPropsType = Omit<BoxProps, 'border'> & TypographyBorderProps;

export const Border = styled(Box, {
    shouldForwardProp: (propName) => !['autoWidth', 'noWrap', 'border', 'rows'].includes(propName as string),
})<TypographyBorderPropsType>`
    width: ${(props) => numberToPx(props.width) ?? (props.autoWidth ? 'auto' : '100%')};
    display: flex;
    border: ${(props) => (props.border && typeof props.border === 'boolean' ? '1px solid black' : props.border)};
    ${ellipsisRows}
    ${ellipsisRow1}
` as ComponentType<TypographyBorderPropsType>;

interface TypographyStyledProps {
    customColor?: string;
    bold?: boolean | string;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    charsCase?: string;
    sup?: boolean;
    sub?: boolean;
    monospace?: boolean;
    lineHeight?: number;
    bgColor?: string;
    fontSize?: number | string;

    [key: string]: any;
}
type TypographyStyledPropsType = Omit<TypographyProps, 'fontSize'> & TypographyStyledProps;

export const Typography = styled(MuiTypography, {
    shouldForwardProp: (propName) =>
        ![
            'fontSize',
            'customColor',
            'bold',
            'italic',
            'underline',
            'strike',
            'charsCase',
            'sup',
            'sub',
            'monospace',
            'lineHeight',
            'bgColor',
        ].includes(propName as string),
})<TypographyStyledPropsType>`
    width: 100%;
    color: ${(props) => props.customColor};
    background-color: ${(props) => props.bgColor};
    font-weight: ${(props) => (props.bold && typeof props.bold === 'boolean' ? 'bold' : props.bold)};
    font-size: ${(props) => numberToPx(props.fontSize)};
    font-style: ${(props) => (props.italic ? 'italic' : undefined)};
    text-decoration: ${(props) => (props.underline ? 'underline' : undefined)};
    text-decoration: ${(props) => (props.strike ? 'line-through' : undefined)};
    text-transform: ${(props) => ({ upper: 'uppercase', lower: 'lowercase', capital: 'capitalize' }[props.charsCase])};
    vertical-align: ${(props) => (props.sup ? 'super' : props.sub ? 'sub' : undefined)};
    line-height: ${(props) => props.lineHeight};
    ${(props) =>
        props.monospace
            ? css`
                  font-family: monospace;
              `
            : undefined};
    white-space: normal;

    &:has(:not(:empty)) {
        display: inherit;
    }
` as ComponentType<TypographyStyledPropsType>;
