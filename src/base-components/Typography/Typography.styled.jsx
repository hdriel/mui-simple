import React from "react";
import { Box, Typography as MuiTypography } from "@mui/material";
import { styled, css } from "@mui/material/styles";

function ellipsisRow1(props) {
  if (props.noWrap || props.rows !== 1) return css``;

  return css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
}

function ellipsisRows(props) {
  if (props.noWrap || !props.rows || (props.rows && props.rows <= 1)) {
    return css``;
  }

  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: ${props.rows};
    -webkit-box-orient: vertical;
    white-space: normal;
  `;
}

const Border = styled(
  ({ width, rows, ...props }) => <Box sx={{ width }} {...props} />,
  { shouldForwardProp: (propName) => !["noWrap"].includes(propName) }
)`
  display: flex;
  border: ${(props) =>
    props.border && typeof props.border === "boolean"
      ? "1px solid black"
      : props.border};
  ${ellipsisRow1}
  ${ellipsisRows}
`;

export const Typography = styled(
  ({ noWrap, border, width = "100%", rows, children, ...props }) =>
    noWrap ? (
      <MuiTypography {...props}>{children}&nbsp;</MuiTypography>
    ) : (
      <Border width={width} rows={rows} border={border} noWrap={noWrap}>
        <MuiTypography {...props}>{children}&nbsp;</MuiTypography>
      </Border>
    ),
  {
    shouldForwardProp: (propName) =>
      ![
        "fontSize",
        "customColor",
        "bold",
        "italic",
        "underline",
        "strike",
        "charsCase",
        "sup",
        "sub",
        "monospace",
        "lineHeight",
      ].includes(propName),
  }
)`
  width: 100%;
  color: ${(props) => props.customColor};
  font-weight: ${(props) =>
    props.bold && typeof props.bold === "boolean" ? "bold" : props.bold};

  font-style: ${(props) => (props.italic ? "italic" : undefined)};
  text-decoration: ${(props) => (props.underline ? "underline" : undefined)};
  text-decoration: ${(props) => (props.strike ? "line-through" : undefined)};
  text-transform: ${(props) =>
    ({ upper: "uppercase", lower: "lowercase", capital: "capitalize" }[
      props.charsCase
    ])};
  vertical-align: ${(props) =>
    props.sup ? "super" : props.sub ? "sub" : undefined};
  line-height: ${(props) => props.lineHeight};
  ${(props) =>
    props.monospace
      ? css`
          font-family: monospace;
        `
      : undefined};
`;
