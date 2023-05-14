import { Badge as MuiBadge } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Badge = styled(MuiBadge, {
  shouldForwardProp: (propName) => !["customColor"].includes(propName),
})`
  & .MuiBadge-badge {
    border: 1.5px solid ${(props) => props.theme.palette.background.paper};
    background-color: ${(props) => props.customColor};
  }
`;
