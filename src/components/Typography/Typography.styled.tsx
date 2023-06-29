import type { ComponentType } from 'react';
import { Box, Typography as MuiTypography, TypographyProps, BoxProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';
import { numberToPx } from '../../utils/helpers';

function ellipsisRow1(props) {
    if (props.noWrap || props.rows !== 1) return css``;

    return css`
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `;
}

function ellipsisRows(props) {
    if (props.noWrap || !props.rows || (props.rows && props.rows <= 1)) {
        return css``;
    }

    return css`
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: normal;
        display: -webkit-box !important;
        -webkit-line-clamp: ${props.rows};
        -webkit-box-orient: vertical;
        & > * {
            white-space: unset !important;
        }
    `;
}

interface TypographyBorderProps {
    autoWidth?: boolean;
    noWrap?: boolean;
    width?: string | number;
    border?: boolean | string;
    rows?: number;
}

export const Border = styled(Box, {
    shouldForwardProp: (propName) => !['autoWidth', 'noWrap', 'border', 'rows'].includes(propName as string),
})<BoxProps & TypographyBorderProps>`
    width: ${(props) => numberToPx(props.width) ?? (props.autoWidth ? 'auto' : '100%')};
    display: flex;
    border: ${(props) => (props.border && typeof props.border === 'boolean' ? '1px solid black' : props.border)};
    ${ellipsisRows}
    ${ellipsisRow1}
` as ComponentType<BoxProps & TypographyBorderProps>;

interface TypographyStyledProps {
    fontSize?: boolean;
    customColor?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    charsCase?: string;
    sup?: boolean;
    sub?: boolean;
    monospace?: boolean;
    lineHeight?: boolean;
    bgColor?: boolean;
}

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
})<TypographyProps & TypographyStyledProps>`
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
` as ComponentType<TypographyProps & TypographyStyledProps>;
