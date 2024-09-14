import { styled } from '@mui/material/styles';
import InlineSVG from 'react-inlinesvg';

export const SVG = styled(InlineSVG, {
    shouldForwardProp: (propName) => !['color'].includes(propName as string),
})`
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        ${(props: any) => ({ ...props })}
    }
`;
