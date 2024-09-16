import { Link as ReactLink } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import type { LinkProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { numberToPx } from '../../../utils/helpers';

export const Link = styled(MuiLink, {
    shouldForwardProp: (propName: string) => !['customColor'].includes(propName as string),
})<LinkProps & { customColor: string; size: string | number }>`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props: any) => props.customColor};
    font-size: ${(props: any) => numberToPx(props.size)};
`;

export const RRDLink = styled(ReactLink, {
    shouldForwardProp: (propName: string) => !['customColor', 'underline'].includes(propName as string),
})<LinkProps & { customColor?: string; size?: string | number; underline?: string }>`
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props: any) => props.customColor};
    text-decoration: ${(props: any) => ({ always: 'underline', hover: undefined, none: 'none' }[props.underline])};
`;
