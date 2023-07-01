import React, { ComponentType } from 'react';
import { styled } from '@mui/material/styles';

import { Box as MuiBox, BoxProps } from '@mui/material';

type WrapperStyledPropsType = BoxProps;

export const Wrapper = styled(({ ...props }) => <MuiBox type="button" {...props} />)<WrapperStyledPropsType>`
    display: inline-block;
    position: relative;
    width: 100%;
    height: 100%;
` as ComponentType<WrapperStyledPropsType>;
