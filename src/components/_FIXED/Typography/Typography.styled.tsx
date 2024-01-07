import React from 'react';
import type { ComponentType } from 'react';
import { Box, Typography as MuiTypography } from '@mui/material';
import type { TypographyProps, BoxProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import classNames from 'classnames';

import { ellipsisRow1, ellipsisRows } from './Typography.styles';
import { numberToPx } from '../../../utils/helpers';

interface TypographyBorderProps {
    autoWidth?: boolean;
    border?: boolean | string;
    noWrap?: boolean;
    rows?: number;
    width?: string | number;
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
    bgColor?: string;
    bold?: boolean | string;
    charsCase?: string;
    customColor?: string;
    fontSize?: number | string;
    italic?: boolean;
    lineHeight?: number;
    monospace?: boolean;
    myClassName?: string | string[];
    strike?: boolean;
    sub?: boolean;
    sup?: boolean;
    underline?: boolean;

    [key: string]: any;
}
type TypographyStyledPropsType = Omit<TypographyProps, 'fontSize' | 'align' | 'border' | 'component'> &
    TypographyStyledProps;

export const Typography = styled(
    ({ className, myClassName, children, ...props }: TypographyStyledPropsType) => (
        <MuiTypography className={classNames([className, myClassName])} component="span" {...props}>
            {children}
        </MuiTypography>
    ),
    {
        shouldForwardProp: (propName: string) =>
            ![
                'bgColor',
                'bold',
                'charsCase',
                'customColor',
                'font',
                'fontSize',
                'italic',
                'lineHeight',
                'monospace',
                'strike',
                'sub',
                'sup',
                'textDirection',
                'textWidth',
                'underline',
            ].includes(propName),
    }
    // @ts-expect-error
)<TypographyStyledPropsType>((props) => ({
    position: 'relative',
    display: props.display ?? 'unset',
    color: props.customColor,
    backgroundColor: props.bgColor,
    fontWeight: props.bold && typeof props.bold === 'boolean' ? 'bold' : props.bold,
    fontSize: numberToPx(props.fontSize),
    fontStyle: props.italic ? 'italic' : undefined,
    fontFamily: props.font ?? undefined,
    textDecoration: props.strike ? 'line-through' : props.underline ? 'underline' : undefined,
    textTransform: { upper: 'uppercase', lower: 'lowercase', capital: 'capitalize' }[props.charsCase],
    verticalAlign: props.sup ? 'super' : props.sub ? 'sub' : undefined,
    lineHeight: props.lineHeight,
    direction: props.textDirection ? `${props.textDirection as string} /* @noflip */` : undefined,
    whiteSpace: props.noWrap ? 'nowrap' : 'normal',
    width: props.textWidth ?? 'inherit',
    ...(props.justifyContent && { justifyContent: props.justifyContent }),
    ...(props.monospace && { fontFamily: 'monospace' }),
})) as ComponentType<TypographyStyledPropsType>;
