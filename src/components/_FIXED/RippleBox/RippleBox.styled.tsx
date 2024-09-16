import React from 'react';
import type { ComponentType } from 'react';
import { styled } from '@mui/material/styles';
import { Box as MuiBox } from '@mui/material';
import type { BoxProps } from '@mui/material';

type WrapperStyledPropsType = BoxProps;

export const Wrapper = styled(({ ...props }: any) => <MuiBox type="button" {...props} />)<WrapperStyledPropsType>`
    display: inline-block;
    position: relative;
    width: auto;
    height: auto;
` as ComponentType<WrapperStyledPropsType>;
