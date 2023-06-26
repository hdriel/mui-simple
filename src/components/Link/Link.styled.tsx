import { Link as MuiLink } from "@mui/material";
import { styled } from "@mui/material/styles";
import { numberToPx } from "../../utils/helpers";

export const Link = styled(MuiLink, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.customColor};
  font-size: ${(props) => numberToPx(props.size)};
`;
