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
    align-items: center;
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
    shouldForwardProp: (propName: string) =>
        ![
            'fontSize',
            'font',
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
            'textDirection',
            'textWidth',
            'bgColor',
        ].includes(propName),
})<TypographyStyledPropsType>((props) => ({
    display: props.display ?? 'unset',
    width: props.textWidth ?? '100%',
    color: props.customColor,
    backgroundColor: props.bgColor,
    fontWeight: props.bold && typeof props.bold === 'boolean' ? 'bold' : props.bold,
    fontSize: numberToPx(props.fontSize),
    fontStyle: props.italic ? 'italic' : undefined,
    fontFamily: props.font ?? undefined,
    textDecoration: props.underline ? 'underline' : undefined,
    textDecoration: props.strike ? 'line-through' : undefined,
    textTransform: { upper: 'uppercase', lower: 'lowercase', capital: 'capitalize' }[props.charsCase],
    verticalAlign: props.sup ? 'super' : props.sub ? 'sub' : undefined,
    lineHeight: props.lineHeight,
    direction: props.textDirection,
    whiteSpace: 'normal',
    ...(props.monospace && { fontFamily: 'monospace' }),
    '&:has(:not(:empty))': {
        display: 'inherit',
    },
})) as ComponentType<TypographyStyledPropsType>;
