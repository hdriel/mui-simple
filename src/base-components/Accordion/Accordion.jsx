import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Accordion as MuiAccordion,
  AccordionDetails,
  AccordionSummary,
  ShowMoreWrapper,
} from "./Accordion.styled";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import {
  ArrowForwardIosSharp as ArrowForwardIosSharpIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { getCustomColor } from "../../utils/helpers";
import { useTheme } from "@mui/material/styles";

export default function Accordion({
  id,
  expanded,
  onChange,
  disabled,
  label,
  secondaryLabel,
  details,
  detailsMaxRows,
  showMoreLabel,
  hideLabel,
  color,
  unmountDetailsOnClose,
  useCustomStyle,
  children,
  ...props
}) {
  const [showMore, setShowMore] = useState(false);
  const [isEllipsis, setIsEllipsis] = useState(false);

  return (
    <MuiAccordion
      disabled={disabled}
      expanded={typeof expanded === "string" ? expanded === id : expanded}
      onChange={(event, isExpanded) => onChange?.(isExpanded ? id : false)}
      useCustomStyle={useCustomStyle}
      TransitionProps={{ unmountOnExit: unmountDetailsOnClose }}
      {...props}
    >
      <AccordionSummary
        id={id}
        useCustomStyle={useCustomStyle}
        expandIcon={
          useCustomStyle ? (
            <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />
          ) : (
            <ExpandMoreIcon />
          )
        }
      >
        <Typography
          tooltip={false}
          wrap={!secondaryLabel}
          sx={{ ...(secondaryLabel && { width: "33%", flexShrink: 0 }) }}
        >
          {label}
        </Typography>
        {secondaryLabel && (
          <Typography sx={{ color: "text.secondary" }}>
            {secondaryLabel}
          </Typography>
        )}
      </AccordionSummary>
      <AccordionDetails useCustomStyle={useCustomStyle}>
        {details && (
          <>
            <Typography
              wrap={showMore ? false : !!detailsMaxRows}
              rows={showMore ? undefined : detailsMaxRows}
              onEllipsisChange={(value) => setIsEllipsis(value)}
            >
              {details}
            </Typography>
            {isEllipsis && detailsMaxRows ? (
              <ShowMoreWrapper>
                <Button
                  variant="text"
                  color={color}
                  disableRipple
                  onClick={() => setShowMore((v) => !v)}
                  sx={{ float: "right" }}
                >
                  {showMore ? hideLabel : showMoreLabel}
                </Button>
              </ShowMoreWrapper>
            ) : undefined}
          </>
        )}
        {children}
      </AccordionDetails>
    </MuiAccordion>
  );
}

Accordion.propTypes = {
  id: PropTypes.string,
  expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  secondaryLabel: PropTypes.string,
  details: PropTypes.string,
  detailsMaxRows: PropTypes.number,
  showMoreLabel: PropTypes.string,
  hideLabel: PropTypes.string,
  customColor: PropTypes.string,
  unmountDetailsOnClose: PropTypes.bool,
  useCustomStyle: PropTypes.bool,
};

Accordion.defaultProps = {
  id: undefined,
  expanded: undefined,
  onChange: undefined,
  disabled: undefined,
  label: undefined,
  secondaryLabel: undefined,
  details: undefined,
  detailsMaxRows: undefined,
  showMoreLabel: "Show More",
  hideLabel: "Hide",
  customColor: undefined,
  unmountDetailsOnClose: false,
  useCustomStyle: false,
};
