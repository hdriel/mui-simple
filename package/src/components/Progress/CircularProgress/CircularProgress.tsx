import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress as MuiCircularProgress } from './CircularProgress.styled';
import { useCustomColor } from '../../../utils/helpers';

type VariantType = 'determinate' | 'indeterminate';
interface CircularProgressProps {
    color?: string;
    variant?: VariantType;
    value?: number;
    thickness?: number;
    size?: number;
    showProgress?: boolean;
    disableShrink?: boolean;

    [key: string]: any;
}

export default function CircularProgress({
    color,
    disableShrink,
    showProgress,
    size,
    thickness,
    value,
    ...props
}: CircularProgressProps) {
    const [customColor, muiColor] = useCustomColor(color);

    return (
        <MuiCircularProgress
            color={muiColor}
            customColor={muiColor ? undefined : customColor}
            variant={value ? 'determinate' : undefined}
            value={value}
            thickness={thickness}
            size={size}
            showProgress={showProgress}
            disableShrink={disableShrink}
            {...props}
        />
    );
}

CircularProgress.propTypes = {
    color: PropTypes.string,
    disableShrink: PropTypes.bool,
    showProgress: PropTypes.bool,
    size: PropTypes.number,
    thickness: PropTypes.number,
    value: PropTypes.number,
    variant: PropTypes.oneOf(['determinate', 'indeterminate']),
};

CircularProgress.defaultProps = {
    color: undefined,
    disableShrink: undefined,
    showProgress: true,
    size: undefined,
    thickness: undefined,
    value: undefined,
    variant: undefined,
};
