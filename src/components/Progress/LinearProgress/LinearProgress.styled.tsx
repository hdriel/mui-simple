import React from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import {
    LinearProgress as MuiLinearProgress,
    Box as MuiBox,
    Typography as MuiTypography,
    linearProgressClasses,
    alpha,
} from '@mui/material';
import type { LinearProgressProps as MuiLinearProgressProps } from '@mui/material';
import { numberToPx } from '../../../utils/helpers';
import type { LinearProgressProps } from '../../decs';

const ContentWrapper = styled(MuiBox)`
    display: flex;
    align-items: center;
`;

const ProgressWrapper = styled(MuiBox)`
    width: 100%;
    margin-right: ${(props) => props.theme.spacing(1)};
    margin-left: ${(props) => props.theme.spacing(1)};
`;

const IndicatorWrapper = styled(MuiBox)`
    min-width: 35px;
`;

type LinearProgressStyledProps = LinearProgressProps & MuiLinearProgressProps;

export const LinearProgress = styled(
    ({ value, variant, showProgress, ...props }: any) => (
        <ContentWrapper>
            <ProgressWrapper>
                <MuiLinearProgress
                    value={value}
                    variant={value && variant === undefined ? 'determinate' : variant}
                    {...props}
                />
            </ProgressWrapper>
            <IndicatorWrapper>
                <MuiTypography variant="body2" color="text.secondary">
                    {showProgress && value !== undefined ? `${Math.round(value)}%` : ''}
                </MuiTypography>
            </IndicatorWrapper>
        </ContentWrapper>
    ),
    {
        shouldForwardProp: (propName) => !['customColor'].includes(propName as string),
    }
)<LinearProgressStyledProps>`
    &.MuiLinearProgress-root {
        background-color: ${(props) => alpha(props.customColor ?? 'rgba(0,0,0,0.3)', 0.2)} !important;
    }

    &.MuiLinearProgress-bar {
        background-color: ${(props) => props.customColor};
    }

    height: ${(props) => `${numberToPx(props.thickness)}` || '5px'};
    border-radius: 5px;

    &.${linearProgressClasses.colorPrimary} {
        background-color: ${({ theme }) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]};
    }

    & .${linearProgressClasses.bar} {
        border-radius: 5px;
        background-color: ${(props) => props.customColor};
    }

    .MuiLinearProgress-dashed {
        background-image: ${(props) => {
            const color = alpha(props.customColor ?? 'rgba(0,0,0,0.3)', 0.2);
            return `radial-gradient(${color} 0%, ${color} 16%, transparent 42%)`;
        }};
    }
` as ComponentType<LinearProgressStyledProps>;
