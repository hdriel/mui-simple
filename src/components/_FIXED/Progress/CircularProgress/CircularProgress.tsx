import React from 'react';
import { CircularProgress as MuiCircularProgress } from './CircularProgress.styled';
import { useCustomColor } from '../../../../utils/helpers';
import type { CircularProgressProps } from '../../../decs';

const CircularProgress: React.FC<CircularProgressProps> = ({
    color,
    disableShrink,
    showProgress,
    size,
    thickness,
    value,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor] = useCustomColor(color);

    return (
        <MuiCircularProgress
            customColor={customColor}
            disableShrink={disableShrink}
            showProgress={showProgress}
            size={size}
            thickness={thickness}
            value={value}
            variant={value ? 'determinate' : undefined}
            {...props}
        />
    );
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

export type { CircularProgressProps } from '../../../decs';
export default CircularProgress;
