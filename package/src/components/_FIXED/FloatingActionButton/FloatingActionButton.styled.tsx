import { Fab as MuiFab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Fab = styled(MuiFab, {
    shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
})<{ customColor: string }>`
    &.MuiButtonBase-root {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5em;
        background-color: ${(props) => props.customColor};

        &.MuiFab-extended {
            width: max-content;
        }
    }
`;
