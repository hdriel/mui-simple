import React from 'react';
import { get } from 'lodash-es';
import { styled } from '@mui/material/styles';
import {
    LinearProgress as MuiLinearProgress,
    Box as MuiBox,
    Typography as MuiTypography,
    linearProgressClasses,
    alpha,
} from '@mui/material';
import { numberToPx } from '../../../utils/helpers';

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

export const LinearProgress = styled(
    ({ value, variant, showProgress, ...props }) => (
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
        shouldForwardProp: (propName) => !['customColor'].includes(propName),
    }
)`
    &.MuiLinearProgress-root {
        background-color: ${(props) =>
            alpha(
                get(props, `theme.palette.${props.color}.main`, props.customColor ?? 'rgba(0,0,0,0.3)'),
                0.2
            )} !important;
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
        background-color: ${({ theme, color, customColor }) => get(theme, `palette.${color}.main`, customColor)};
    }

    .MuiLinearProgress-dashed {
        background-image: ${(props) => {
            const color = alpha(
                get(props, `theme.palette.${props.color}.main`, props.customColor ?? 'rgba(0,0,0,0.3)'),
                0.2
            );

            return `radial-gradient(${color} 0%, ${color} 16%, transparent 42%)`;
        }};
    }
`;
