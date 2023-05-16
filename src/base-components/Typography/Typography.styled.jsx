import React from "react";
import { Box, Typography as MuiTypography } from "@mui/material";
import { styled, css } from "@mui/material/styles";

function ellipsisRow1(props) {
  if (props.rows !== 1) return css``;
  return css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `;
}

function ellipsisRows(props) {
  if (props.rows <= 1) return css``;

  return css`
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box !important;
    -webkit-line-clamp: ${props.rows};
    -webkit-box-orient: vertical;
    white-space: normal;
  `;
}

const Border = styled(({ width, rows, ...props }) => (
  <Box sx={{ width }} {...props} />
))`
  border: 1px solid black;
  ${ellipsisRow1}
  ${ellipsisRows}
`;

export const Typography = styled(
  ({ width, rows, ...props }) => (
    <Border width={width} rows={rows}>
      <MuiTypography {...props} />
    </Border>
  ),
  { shouldForwardProp: (propName) => ![].includes(propName) }
)`
  ${(props) =>
    props.noWrap
      ? css`
          width: inherit; /* Set the desired width of the container */
        `
      : undefined}
`;
