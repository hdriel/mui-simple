import { Typography as MuiTypography } from '@mui/material';
import MuiSlider, { SliderThumb } from '@mui/material/Slider';

import { styled } from '@mui/material/styles';
import { sliderStyleIOS, sliderStylePretto, sliderStyleAirBNB, sliderStyleCustomColor } from './Slider.styles';
import React from 'react';
import Tooltip from '../_FIXED/Tooltip/Tooltip';
export { Grid, Box } from '@mui/material';

export function ValueLabelComponent(props) {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={`${value}`} arrow={false}>
            {children}
        </Tooltip>
    );
}

export function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
}

export const Slider = styled(MuiSlider, {
    shouldForwardProp: (propName) =>
        !['startIcon', 'endIcon', 'customColor', 'sliderStyle'].includes(propName as string),
})`
    ${sliderStyleIOS}
    ${sliderStylePretto}
  ${sliderStyleAirBNB}
  ${sliderStyleCustomColor}
`;

export const SliderLabel = styled(({ ...props }) => <MuiTypography gutterBottom {...props} />)``;
