import React from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import { CircularProgress as MuiCircularProgress, Box as MuiBox, Typography as MuiTypography } from '@mui/material';
import type { CircularProgressProps } from '@mui/material';

const BoxWrapper = styled(MuiBox)`
    position: relative;
    display: inline-flex;
`;

const CenterBoxContent = styled(MuiBox)`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface CircularProgressStyledProps {
    showProgress?: boolean;
    customColor?: string;
}
type CircularProgressStyledPropsType = CircularProgressProps & CircularProgressStyledProps;
export const CircularProgress = styled(
    ({ size, showProgress, variant, value, color, ...props }: CircularProgressStyledPropsType) => (
        <BoxWrapper>
            <MuiCircularProgress
                color={color}
                value={value}
                variant={value && variant === undefined ? 'determinate' : variant}
                size={size}
                {...props}
            />
            <MuiCircularProgress
                value={100}
                variant={'determinate'}
                size={size}
                sx={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(0,0,0,0.1)',
                }}
            />
            <CenterBoxContent>
                <MuiTypography variant="caption" component="div" color="text.secondary">
                    {showProgress && value !== undefined ? `${Math.round(value)}%` : ''}
                </MuiTypography>
            </CenterBoxContent>
        </BoxWrapper>
    ),
    {
        shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
    }
)`
    &.MuiCircularProgress-root {
        color: ${(props) => props.customColor};
    }
    //animation-duration: 760ms;
` as ComponentType<CircularProgressStyledPropsType>;
