import { Backdrop as MuiBackdrop } from '@mui/material';
import type { BackdropProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface BackdropStyledProps {
    color?: string;
}
type BackdropStyledPropsType = BackdropStyledProps & BackdropProps;
export const Backdrop = styled(MuiBackdrop)<BackdropStyledPropsType>`
    color: ${({ color }) => color};
    z-index: ${({ theme }) => theme.zIndex.drawer + 1};
`;
