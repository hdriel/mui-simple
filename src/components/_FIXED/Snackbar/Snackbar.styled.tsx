import { Snackbar as MuiSnackbar } from '@mui/material';
import { styled, css } from '@mui/material/styles';

export { Fade, Grow, Slide } from '@mui/material';

export const Snackbar = styled(MuiSnackbar, {
    shouldForwardProp: (propName: string) => !['fullWidth'].includes(propName as string),
})`
    ${(props: any) =>
        props.fullWidth
            ? css`
                  width: 100%;
                  box-sizing: border-box;
                  padding-right: 3em;
              `
            : css``}
`;
