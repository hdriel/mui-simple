import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { LabelIconTreeItemStyled } from '../TreeView.styled';
import Typography from '../../_FIXED/Typography/Typography';
import SVGIcon from '../../SVGIcon/SVGIcon';
import { ArrowDropDown as ArrowDropDownIcon, ArrowRight as ArrowRightIcon } from '@mui/icons-material';

const LabelIconTreeItem = forwardRef((props, ref) => {
    const { bgColor, color, icon: labelIcon, info: labelInfo, label: labelText, ...other } = props ?? {};

    return (
        props && (
            <LabelIconTreeItemStyled
                ref={ref}
                {...other}
                label={
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 0.5, pr: 0 }}>
                        {labelIcon && (
                            <Box color="inherit" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                                <SVGIcon muiIconName={labelIcon}>{labelIcon}</SVGIcon>
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

LabelIconTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.any]),
    info: PropTypes.string,
    label: PropTypes.string.isRequired,
};

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
