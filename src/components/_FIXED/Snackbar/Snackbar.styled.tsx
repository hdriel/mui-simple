import { Snackbar as MuiSnackbar } from '@mui/material';
import { styled } from '@mui/material/styles';

export { Fade, Grow, Slide } from '@mui/material';

export const Snackbar = styled(MuiSnackbar, {
    shouldForwardProp: (propName) => !['fullWidth'].includes(propName as string),
})`
    width: 100%;
    box-sizing: border-box;
    padding-right: 3em;
`;
