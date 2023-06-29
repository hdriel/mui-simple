import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress as MuiCircularProgress } from './CircularProgress.styled';
import { useCustomColor } from '../../../utils/helpers';

type VariantType = 'determinate' | 'indeterminate';
interface CircularProgressProps {
    color: string;
    variant: VariantType;
    value: number;
    thickness: number;
    size: number;
    showProgress: boolean;
    disableShrink: boolean;
}

export default function CircularProgress({
    color,
    value,
    showProgress,
    thickness,
    size,
    disableShrink,
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
    variant: PropTypes.oneOf(['determinate', 'indeterminate']),
    value: PropTypes.number,
    thickness: PropTypes.number,
    size: PropTypes.number,
    showProgress: PropTypes.bool,
    disableShrink: PropTypes.bool,
};

CircularProgress.defaultProps = {
    color: undefined,
    variant: undefined,
    value: undefined,
    thickness: undefined,
    size: undefined,
    showProgress: true,
    disableShrink: undefined,
};
