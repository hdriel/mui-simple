import { styled } from "@mui/material/styles";
import InlineSVG from "react-inlinesvg";

export const SVG = styled(InlineSVG, {
  shouldForwardProp: (propName) => !["color"].includes(propName),
})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${(props) => ({ ...props })}
  }
`;
