import React from "react";
import { styled } from "@mui/material/styles";
import {
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  Box,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";

export const Accordion = styled(MuiAccordion)``;

export const AccordionSummary = styled(({ label, ...props }) => (
  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
))``;

export const AccordionDetails = styled(MuiAccordionDetails)`
  padding-bottom: 1em;
`;
export const ShowMoreWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0;
  margin-bottom: -10px;
`;
