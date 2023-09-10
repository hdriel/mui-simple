import React, { useEffect, useState } from 'react';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, ShowMoreWrapper } from './Accordion.styled';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { ArrowForwardIosSharp as ArrowForwardIosSharpIcon } from '@mui/icons-material';
import { useCustomColor } from '../../../utils/helpers';
import type { AccordionProps } from '../../decs';
import SVGIcon from '../../SVGIcon/SVGIcon';

const Accordion: React.FC<AccordionProps> = function (props): React.ReactElement {
    const {
        bgColor: _bgColor,
        bottomSecondaryLabel,
        buttonsColor,
        children,
        collapsedIcon: _collapsedIcon,
        details,
        detailsMaxRows,
        disabled,
        expanded: _expanded,
        expandedIcon: _expandedIcon,
        hideLabel,
        id,
        label,
        onChange,
        secondaryLabel: _secondaryLabel,
        showMoreLabel,
        textColor,
        labelColor: _labelColor,
        unmountDetailsOnClose,
        useCustomStyle,
        ...rest
    } = props;

    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(_expanded);
    const [isEllipsis, setIsEllipsis] = useState(false);
    const [bgColor] = useCustomColor(_bgColor);
    const [labelColor] = useCustomColor(typeof _labelColor === 'function' ? _labelColor(expanded) : _labelColor);
    const secondaryLabel = bottomSecondaryLabel || _secondaryLabel;
    const expandedIcon = typeof _expandedIcon === 'string' ? <SVGIcon>{_expandedIcon}</SVGIcon> : _expandedIcon;
    const collapsedIcon = typeof _collapsedIcon === 'string' ? <SVGIcon>{_collapsedIcon}</SVGIcon> : _collapsedIcon;
    const icon = expanded ? expandedIcon : collapsedIcon || expandedIcon;
    const useCustomStyleIcon = <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />;

    useEffect(() => {
        setExpanded(_expanded);
    }, [_expanded]);

    return (
        <MuiAccordion
            disabled={disabled}
            expanded={typeof expanded === 'string' ? expanded === id : expanded}
            onChange={(event, isExpanded) => {
                onChange?.(event, isExpanded ? id ?? isExpanded : false);
                setExpanded(!expanded);
            }}
            useCustomStyle={useCustomStyle}
            TransitionProps={{ unmountOnExit: unmountDetailsOnClose }}
            {...rest}
        >
            <AccordionSummary
                id={id}
                useCustomStyle={useCustomStyle}
                bgColor={bgColor}
                titleColor={labelColor}
                expandIcon={useCustomStyle ? useCustomStyleIcon : icon}
                bottomSecondaryLabel={!!bottomSecondaryLabel}
            >
                <Typography
                    tooltip={false}
                    wrap={!secondaryLabel}
                    sx={{ ...(secondaryLabel && { width: '33%', flexShrink: 0 }) }}
                >
                    {label}
                </Typography>
                {secondaryLabel && <Typography sx={{ color: 'text.secondary' }}>{secondaryLabel}</Typography>}
            </AccordionSummary>
            <AccordionDetails useCustomStyle={useCustomStyle}>
                {details && (
                    <>
                        <Typography
                            wrap={showMore ? false : !!detailsMaxRows}
                            rows={showMore ? undefined : detailsMaxRows}
                            onEllipsisChange={(value) => setIsEllipsis(value)}
                            color={textColor}
                            tooltip={''}
                        >
                            {details}
                        </Typography>

                        {isEllipsis && detailsMaxRows ? (
                            <ShowMoreWrapper>
                                <Button
                                    variant="text"
                                    color={buttonsColor}
                                    disableRipple
                                    onClick={() => setShowMore((v) => !v)}
                                    sx={{ float: 'right' }}
                                >
                                    {showMore ? hideLabel : showMoreLabel}
                                </Button>
                            </ShowMoreWrapper>
                        ) : undefined}
                    </>
                )}
                {children}
            </AccordionDetails>
        </MuiAccordion>
    );
};

Accordion.defaultProps = {
    bgColor: undefined,
    bottomSecondaryLabel: undefined,
    buttonsColor: undefined,
    collapsedIcon: 'ExpandMore',
    details: undefined,
    detailsMaxRows: undefined,
    disabled: undefined,
    expanded: undefined,
    expandedIcon: 'ExpandMore',
    hideLabel: 'Hide',
    id: undefined,
    label: undefined,
    onChange: undefined,
    secondaryLabel: undefined,
    showMoreLabel: 'Show More',
    textColor: undefined,
    labelColor: undefined,
    unmountDetailsOnClose: false,
    useCustomStyle: false,
};

export type { AccordionProps } from '../../decs';
export default Accordion;
