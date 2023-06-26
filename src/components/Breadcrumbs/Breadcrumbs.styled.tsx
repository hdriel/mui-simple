import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import { styled } from "@mui/material/styles";
import { numberToPx } from "../../utils/helpers";

export const Breadcrumbs = styled(MuiBreadcrumbs)`
  & .MuiBreadcrumbs-separator {
    font-size: ${(props) => numberToPx(props.size)};
  }
`;
