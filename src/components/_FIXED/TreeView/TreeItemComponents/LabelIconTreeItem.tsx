import React, { forwardRef } from 'react';
import { Box } from '@mui/material';
import { LabelIconTreeItemStyled } from '../TreeView.styled';
import Typography from '../../Typography/Typography';
import SVGIcon from '../../SVGIcon/SVGIcon';
import { ArrowDropDown as ArrowDropDownIcon, ArrowRight as ArrowRightIcon } from '@mui/icons-material';

interface LabelIconTreeItemProps {
    bgColor?: string;
    color?: string;
    icon?: string | React.ReactNode | React.ReactElement;
    info?: string;
    label: string;
}

const LabelIconTreeItem: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<LabelIconTreeItemProps> & React.RefAttributes<unknown>
    // eslint-disable-next-line react/display-name
> = forwardRef((props, ref) => {
    const { bgColor, color, icon: _labelIcon, info: labelInfo, label: labelText, ...other } = props ?? {};
    const labelIcon = typeof _labelIcon === 'string' ? <SVGIcon>{_labelIcon}</SVGIcon> : _labelIcon;

    return (
        props && (
            <LabelIconTreeItemStyled
                ref={ref}
                {...other}
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        {labelIcon && (
                            <Box color="inherit" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                                {labelIcon}
                            </Box>
                        )}
                        {labelText && (
                            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
                                {labelText}
                            </Typography>
                        )}
                        {labelInfo && (
                            <Typography variant="caption" color="inherit">
                                {labelInfo}
                            </Typography>
                        )}
                    </Box>
                }
                style={{
                    '--tree-view-color': color,
                    '--tree-view-bg-color': bgColor,
                }}
            />
        )
    );
});

LabelIconTreeItem.defaultProps = {
    bgColor: undefined,
    color: undefined,
    icon: undefined,
    info: undefined,
    label: undefined,
};

export default LabelIconTreeItem;

export const LabelIconTreeItemIcons = {
    collapseIcon: <ArrowDropDownIcon />,
    expandIcon: <ArrowRightIcon />,
    endIcon: <div style={{ width: 24 }} />,
};
