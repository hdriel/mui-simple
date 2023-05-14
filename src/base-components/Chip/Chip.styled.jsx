import { Chip as MuiChip } from "@mui/material";
import { styled, css } from "@mui/material/styles";

function multiLineStyle(props) {
  if (!props.multiLine) return css``;

  return css`
    height: auto;
    & .MuiChip-label {
      display: block;
      white-space: normal;
    }
  `;
}

export const Chip = styled(MuiChip, {
  shouldForwardProp: (propName) =>
    !["customColor", "multiLine"].includes(propName),
})`
  width: ${(props) => props.width ?? "auto"};
  ${multiLineStyle}
`;
