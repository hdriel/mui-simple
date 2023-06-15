import { styled } from "@mui/material/styles";
import InlineSVG from "react-inlinesvg";

export const SVG = styled(InlineSVG, {
  shouldForwardProp: (propName) =>
    !["color", "width", "height"].includes(propName),
})`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    ${(props) => ({ ...props })}
  }
`;
