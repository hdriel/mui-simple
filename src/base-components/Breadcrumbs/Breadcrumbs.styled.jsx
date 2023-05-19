import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Breadcrumbs = styled(MuiBreadcrumbs)`
  & .MuiBreadcrumbs-separator {
    font-size: ${(props) =>
      typeof props.size === "number" ? `${props.size}px` : props.size};
  }
`;
