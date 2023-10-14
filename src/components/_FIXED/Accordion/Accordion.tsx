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
        bgColorDetails: _bgColorDetails,
        bottomSecondaryLabel,
        buttonsColor,
        children,
        collapsedIcon: _collapsedIcon,
        details,
        detailsMaxRows,
        detailsStyles,
        disabled,
        disabledContentPadding,
        expanded: _expanded,
        expandedIcon: _expandedIcon,
        hideLabel,
        id,
        label,
        labelColor: _labelColor,
        labelProps,
        onChange,
        secondaryLabel: _secondaryLabel,
        showMoreLabel,
        summary,
        summaryStyles,
        textColor,
        unmountDetailsOnClose,
        useCustomStyle,
        ...rest
    } = props;

    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(_expanded);
    const [isEllipsis, setIsEllipsis] = useState(false);
    const [bgColor] = useCustomColor(_bgColor);
    const [bgColorDetails] = useCustomColor(_bgColorDetails);
    const [labelColor] = useCustomColor(typeof _labelColor === 'function' ? _labelColor(expanded) : _labelColor);
    const secondaryLabel = bottomSecondaryLabel || _secondaryLabel;
    const expandedIcon = typeof _expandedIcon === 'string' ? <SVGIcon>{_expandedIcon}</SVGIcon> : _expandedIcon;
    const collapsedIcon = typeof _collapsedIcon === 'string' ? <SVGIcon>{_collapsedIcon}</SVGIcon> : _collapsedIcon;
    const icon = expanded ? expandedIcon : collapsedIcon || expandedIcon;
    const useCustomStyleIcon = <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />;

    useEffect(() => {
        if (_expanded !== undefined && expanded !== _expanded) {
            setExpanded(_expanded);
        }
    }, [_expanded, expanded]);

    return (
        <MuiAccordion
            disabled={disabled}
            expanded={typeof expanded === 'string' ? expanded === id : expanded}
            onChange={(event, isExpanded) => {
                if (onChange) onChange?.(event, isExpanded ? id ?? isExpanded : false);
                else setExpanded(!expanded);
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
                sx={summaryStyles}
            >
                {summary || (
                    <>
                        {label && typeof label === 'string' ? (
                            <Typography
                                noWrap={!secondaryLabel}
                                alignLeft
                                wrap={secondaryLabel}
                                color={labelColor}
                                {...labelProps}
                                sx={{ ...(secondaryLabel && { width: '40%', flexShrink: 0 }), ...labelProps?.sx }}
                            >
                                {label}
                            </Typography>
                        ) : (
                            label
                        )}

                        {secondaryLabel && typeof secondaryLabel === 'string' ? (
                            <Typography sx={{ color: 'text.secondary' }}>{secondaryLabel}</Typography>
                        ) : (
                            secondaryLabel
                        )}
                    </>
                )}
            </AccordionSummary>
            <AccordionDetails
                useCustomStyle={useCustomStyle}
                bgColorDetails={bgColorDetails}
                disabledContentPadding={disabledContentPadding}
                sx={detailsStyles}
            >
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
    disabledContentPadding: undefined,
    expanded: undefined,
    expandedIcon: 'ExpandMore',
    hideLabel: 'Hide',
    id: undefined,
    label: undefined,
    labelColor: undefined,
    onChange: undefined,
    secondaryLabel: undefined,
    showMoreLabel: 'Show More',
    textColor: undefined,
    unmountDetailsOnClose: false,
    useCustomStyle: false,
};

export type { AccordionProps } from '../../decs';
export default Accordion;
