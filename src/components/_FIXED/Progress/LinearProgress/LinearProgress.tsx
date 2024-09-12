import React from 'react';
import { LinearProgress as MuiLinearProgress } from './LinearProgress.styled';
import { useCustomColor } from '../../../../utils/helpers';
import type { LinearProgressProps } from '../../../decs';

const LinearProgress: React.FC<LinearProgressProps> = ({
    color,
    disableShrink,
    showProgress = true,
    size,
    thickness,
    value,
    valueBuffer,
    ...props
}): React.ReactElement | React.ReactNode => {
    const [customColor] = useCustomColor(color);

    return (
        <MuiLinearProgress
            customColor={customColor}
            showProgress={showProgress}
            thickness={thickness}
            value={value}
            valueBuffer={valueBuffer}
            variant={valueBuffer !== undefined ? 'buffer' : value !== undefined ? 'determinate' : undefined}
            {...props}
        />
    );
};

LinearProgress.displayName = 'LinearProgress';

export type { LinearProgressProps } from '../../../decs';
export default LinearProgress;
