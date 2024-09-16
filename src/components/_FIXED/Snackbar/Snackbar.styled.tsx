import React from 'react';
import { Snackbar as MuiSnackbar, SnackbarProps } from '@mui/material';
import { styled, css } from '@mui/material/styles';

export { Fade, Grow, Slide } from '@mui/material';

export const Snackbar: React.FC<SnackbarProps & { fullWidth?: boolean }> = styled(MuiSnackbar, {
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
