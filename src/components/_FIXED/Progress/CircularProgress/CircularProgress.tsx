import React from 'react';
import { CircularProgress as MuiCircularProgress } from './CircularProgress.styled';
import { useCustomColor } from '../../../../utils/helpers';
import type { CircularProgressProps } from '../../../decs';

const CircularProgress: React.FC<CircularProgressProps> = ({
    color,
    disableShrink,
    showProgress = true,
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

CircularProgress.displayName = 'CircularProgress';

export type { CircularProgressProps } from '../../../decs';
export default CircularProgress;
