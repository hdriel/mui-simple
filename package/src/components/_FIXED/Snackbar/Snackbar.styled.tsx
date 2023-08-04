import { Snackbar as MuiSnackbar } from '@mui/material';
import { styled, css } from '@mui/material/styles';

export { Fade, Grow, Slide } from '@mui/material';

export const Snackbar = styled(MuiSnackbar, {
    shouldForwardProp: (propName) => !['fullWidth'].includes(propName as string),
})`
    ${(props) =>
        props.fullWidth
            ? css`
                  width: 100%;
                  box-sizing: border-box;
                  padding-right: 3em;
              `
            : css``}
`;
