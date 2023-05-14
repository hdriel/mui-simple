import { Backdrop as MuiBackdrop } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Backdrop = styled(MuiBackdrop)`
  color: ${({ color }) => color};
  z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;
