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

interface AccordionStyledPropsType
    extends Omit<MuiAccordionProps, 'disabled' | 'expanded' | 'onChange' | 'TransitionProps'> {
    useCustomStyle?: boolean;
    [key: string]: any;
}

export const Accordion: React.FC<AccordionStyledPropsType> = styled(
    ({ useCustomStyle, ...props }: AccordionStyledPropsType) => (
        <MuiAccordion {...(useCustomStyle && { disableGutters: true, elevation: 0, square: true })} {...props}>
            {props.children}
        </MuiAccordion>
    ),
    {
        shouldForwardProp: (propName) => !['useCustomStyle'].includes(propName as string),
    }
)`
    ${customStyleAccordion};
`;

type _AccordionSummaryProps = AccordionSummaryProps & {
    label?: string;
    bgColor?: string;
    titleColor?: string;
    bottomSecondaryLabel?: boolean;
    [key: string]: any;
};

export const AccordionSummary: React.FC<_AccordionSummaryProps> = styled(
    ({ label, ...props }: _AccordionSummaryProps) => <MuiAccordionSummary {...props} />,
    {
        shouldForwardProp: (propName) =>
            !['bottomSecondaryLabel', 'useCustomStyle', 'bgColor', 'titleColor'].includes(propName as string),
    }
)`
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
`;

type AccordionDetailsStyledPropsType = AccordionDetailsProps & any;
export const AccordionDetails = styled(MuiAccordionDetails, {
    shouldForwardProp: (propName) =>
        !['useCustomStyle', 'disabledContentPadding', 'bgColorDetails'].includes(propName as string),
})<AccordionDetailsStyledPropsType>`
    background-color: ${(props) => props.bgColorDetails};
    padding-bottom: 1em;
    ${customStyleDetails}
    ${(props) =>
        props.disabledContentPadding
            ? css`
                  padding: 0;
              `
            : css``}
` as ComponentType<AccordionDetailsStyledPropsType>;

export const ShowMoreWrapper = styled(Box)<BoxProps>`
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 0;
    margin-bottom: -10px;
`;
