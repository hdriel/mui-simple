import React, { PropsWithChildren } from 'react';
import { Typography as MuiTypography, Slider as MuiSlider, SliderThumb } from '@mui/material';
import { styled } from '@mui/material/styles';
import { sliderStyleIOS, sliderStylePretto, sliderStyleAirBNB, sliderStyleCustomColor } from './Slider.styles';
import Tooltip from '../Tooltip/Tooltip';

export { Grid, Box } from '@mui/material';

export const ValueLabelComponent: React.FC<PropsWithChildren<{ value: string }>> = (
    props
): React.ReactElement | React.ReactNode => {
    const { children, value } = props;

    return (
        <Tooltip enterTouchDelay={0} placement="top" title={`${value}`} arrow={false}>
            {children}
        </Tooltip>
    );
};

export const AirbnbThumbComponent: React.FC<any> = (props): React.ReactElement | React.ReactNode => {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
            <span className="airbnb-bar" />
        </SliderThumb>
    );
};

interface SliderStyledProps {
    sliderStyle: string;
    label: string;
    customColor: string;
    startIcon: React.ReactNode;
    endIcon: React.ReactNode;
    [key: string]: any;
}

export const Slider = styled(MuiSlider, {
    shouldForwardProp: (propName: string) =>
        !['startIcon', 'endIcon', 'customColor', 'sliderStyle'].includes(propName as string),
})<SliderStyledProps & any>`
    ${sliderStyleIOS}
    ${sliderStylePretto}
    ${sliderStyleAirBNB}
    ${sliderStyleCustomColor}
`;

export const SliderLabel: any = styled(({ ...props }) => <MuiTypography gutterBottom {...props} />)<any>``;
