import { Link as MuiLink } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Link = styled(MuiLink, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.customColor};
  font-size: ${(props) =>
    typeof props.size === "number" ? `${props.size}px` : props.size};
`;