import React from 'react';
import type { ComponentType } from 'react';
import { styled, css } from '@mui/material/styles';
import {
    Accordion as MuiAccordion,
    AccordionSummary as MuiAccordionSummary,
    AccordionDetails as MuiAccordionDetails,
    Box,
} from '@mui/material';
import type {
    AccordionProps as MuiAccordionProps,
    AccordionSummaryProps,
    AccordionDetailsProps,
    BoxProps,
} from '@mui/material';
import { customStyleAccordion, customStyleDetails, customStyleSummary } from './Accordion.styles';

interface AccordionStyledProps {
    useCustomStyle?: boolean;
}
type AccordionStyledPropsType = AccordionStyledProps &
    Omit<MuiAccordionProps, 'disabled' | 'expanded' | 'onChange' | 'TransitionProps'> &
    any;
export const Accordion = styled(
    ({ useCustomStyle, ...props }) => (
        <MuiAccordion {...(useCustomStyle && { disableGutters: true, elevation: 0, square: true })} {...props} />
    ),
    {
        shouldForwardProp: (propName) => !['useCustomStyle'].includes(propName as string),
    }
)<AccordionStyledPropsType>`
    ${customStyleAccordion}
` as ComponentType<AccordionStyledPropsType>;

type AccordionSummaryStyledPropsType = AccordionSummaryProps & any;
export const AccordionSummary = styled(({ label, ...props }) => <MuiAccordionSummary {...props} />, {
    shouldForwardProp: (propName) =>
        !['bottomSecondaryLabel', 'useCustomStyle', 'bgColor', 'titleColor'].includes(propName as string),
})<AccordionSummaryStyledPropsType>`
    ${customStyleSummary};
    &.MuiAccordionSummary-root {
        background-color: ${(props) => props.bgColor};
        color: ${(props) => props.titleColor};
        ${(props) =>
            props.bottomSecondaryLabel
                ? css`
                      & > div {
                          display: flex;
                          flex-direction: column;
                      }
                  `
                : css``}
    }
` as ComponentType<AccordionSummaryStyledPropsType>;

type AccordionDetailsStyledPropsType = AccordionDetailsProps & any;
export const AccordionDetails = styled(MuiAccordionDetails, {
    shouldForwardProp: (propName) => !['useCustomStyle'].includes(propName as string),
})<AccordionDetailsStyledPropsType>`
    padding-bottom: 1em;
    ${customStyleDetails}
` as ComponentType<AccordionDetailsStyledPropsType>;

export const ShowMoreWrapper = styled(Box)<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0;
    margin-bottom: -10px;
`;
