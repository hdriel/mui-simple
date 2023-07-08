import React from 'react';
import type { PropsWithChildren } from 'react';
import { styled, css } from '@mui/material/styles';
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    Box,
} from '@mui/material';
import type { AccordionProps, AccordionSummaryProps, Theme, AccordionDetailsProps, BoxProps } from '@mui/material';
import type { SerializedStyles } from '@emotion/serialize';

interface AccordionStyledProps {
    useCustomStyle?: boolean;
    bgColor?: string;
    titleColor?: string;
    theme?: Theme;
}
type AccordionStyledPropsType = AccordionStyledProps & AccordionProps;
function customStyleAccordion(props: AccordionStyledPropsType): SerializedStyles {
    if (!props.useCustomStyle) return css``;
    const { theme } = props;

    return css`
        border: 1px solid ${theme.palette.divider};
        &:not(:last-child) {
            border-bottom: 0;
        }
        &:before {
            display: none;
        }
    `;
}

export const Accordion = styled(
    ({ useCustomStyle, children, ...props }: PropsWithChildren<AccordionStyledProps>) => (
        <MuiAccordion
            {...(useCustomStyle && {
                disableGutters: true,
                elevation: 0,
                square: true,
            })}
            {...props}
        >
            {children}
        </MuiAccordion>
    ),
    {
        shouldForwardProp: (propName) => ![].includes(propName as string),
    }
)<AccordionStyledPropsType>`
    ${customStyleAccordion}
`;

interface AccordionSummaryStyledProps {
    useCustomStyle?: boolean;
    bgColor?: string;
    titleColor?: string;
    theme?: Theme;
    label?: string;
}
type AccordionSummaryStyledPropsType = AccordionSummaryStyledProps & AccordionSummaryProps;
function customStyleSummary(props: AccordionSummaryStyledPropsType): SerializedStyles {
    if (!props.useCustomStyle) return css``;
    const { theme } = props;

    return css`
        &.MuiAccordionSummary-root {
            background-color: ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)'};

            flex-direction: row-reverse;

            & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
                transform: rotate(90deg);
            }

            & .MuiAccordionSummary-content {
                margin-left: ${theme.spacing(1)};
            }
        }
    `;
}

export const AccordionSummary = styled(
    ({ label, ...props }: PropsWithChildren<AccordionSummaryStyledProps>) => <MuiAccordionSummary {...props} />,
    {
        shouldForwardProp: (propName) => !['useCustomStyle', 'bgColor', 'titleColor'].includes(propName as string),
    }
)<AccordionSummaryStyledPropsType>`
    ${customStyleSummary};
    &.MuiAccordionSummary-root {
        background-color: ${(props) => props.bgColor};
        color: ${(props) => props.titleColor};
    }
`;

interface AccordionDetailsStyledProps {
    useCustomStyle?: boolean;
    theme?: Theme;
}
type AccordionDetailsStyledPropsType = AccordionDetailsStyledProps & AccordionDetailsProps;
function customStyleDetails(props: AccordionDetailsStyledPropsType): SerializedStyles {
    if (!props.useCustomStyle) return css``;

    const { theme } = props;
    return css`
        padding: ${theme.spacing(2)};
        border-top: 1px solid rgba(0, 0, 0, 0.125);
    `;
}
export const AccordionDetails = styled(MuiAccordionDetails, {
    shouldForwardProp: (propName) => !['useCustomStyle'].includes(propName as string),
})<AccordionDetailsStyledPropsType>`
    padding-bottom: 1em;
    ${customStyleDetails}
`;

export const ShowMoreWrapper = styled(Box)<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0;
    margin-bottom: -10px;
`;
