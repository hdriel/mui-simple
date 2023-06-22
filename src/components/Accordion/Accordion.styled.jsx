import React from "react";
import { styled, css } from "@mui/material/styles";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Box,
} from "@mui/material";

function customStyleAccordion(props) {
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
  ({ useCustomStyle, children, ...props }) => (
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
    shouldForwardProp: (propName) => ![].includes(propName),
  }
)`
  ${customStyleAccordion}
`;

function customStyleSummary(props) {
  if (!props.useCustomStyle) return css``;
  const { theme } = props;

  return css`
    &.MuiAccordionSummary-root {
      background-color: ${theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, .05)"
        : "rgba(0, 0, 0, .03)"};

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
  ({ label, ...props }) => <MuiAccordionSummary {...props} />,
  {
    shouldForwardProp: (propName) =>
      !["useCustomStyle", "bgColor", "titleColor"].includes(propName),
  }
)`
  ${customStyleSummary};
  &.MuiAccordionSummary-root {
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.titleColor};
  }
`;

function customStyleDetails(props) {
  if (!props.useCustomStyle) return css``;

  const { theme } = props;
  return css`
    padding: ${theme.spacing(2)};
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  `;
}
export const AccordionDetails = styled(MuiAccordionDetails, {
  shouldForwardProp: (propName) => !["useCustomStyle"].includes(propName),
})`
  padding-bottom: 1em;
  ${customStyleDetails}
`;

export const ShowMoreWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0;
  margin-bottom: -10px;
`;
