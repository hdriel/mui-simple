import React, { useState } from 'react';
import type { SyntheticEvent, PropsWithChildren, ReactElement } from 'react';
//	import PropTypes from 'prop-types';
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, ShowMoreWrapper } from './Accordion.styled';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import { ArrowForwardIosSharp as ArrowForwardIosSharpIcon, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { useCustomColor } from '../../utils/helpers';

interface AccordionProps {
    id?: string;
    expanded?: boolean | string;
    onChange?: (event: SyntheticEvent<unknown>, expanded: boolean | string) => void;
    disabled?: boolean;
    label?: string;
    secondaryLabel?: string;
    details?: string;
    detailsMaxRows?: number;
    showMoreLabel?: string;
    hideLabel?: string;
    bgColor?: string;
    textColor?: string;
    titleColor?: string;
    buttonsColor?: string;
    unmountDetailsOnClose?: boolean;
    useCustomStyle?: boolean;
    [key: string]: any;
}
export default function Accordion(props: PropsWithChildren<AccordionProps>): ReactElement {
    const {
        id,
        expanded,
        onChange,
        disabled,
        label,
        secondaryLabel,
        details,
        detailsMaxRows,
        showMoreLabel,
        hideLabel,
        unmountDetailsOnClose,
        useCustomStyle,
        bgColor: _bgColor,
        titleColor: _titleColor,
        textColor,
        buttonsColor,
        children,
        ...rest
    } = props;

    const [showMore, setShowMore] = useState(false);
    const [isEllipsis, setIsEllipsis] = useState(false);
    const [bgColor] = useCustomColor(_bgColor);
    const [titleColor] = useCustomColor(_titleColor);

    return (
        <MuiAccordion
            disabled={disabled}
            expanded={typeof expanded === 'string' ? expanded === id : expanded}
            // Todo: check if necessary to send event to onChange
            onChange={(event, isExpanded) => onChange?.(event, isExpanded ? id : false)}
            useCustomStyle={useCustomStyle}
            TransitionProps={{ unmountOnExit: unmountDetailsOnClose }}
            {...rest}
        >
            <AccordionSummary
                id={id}
                useCustomStyle={useCustomStyle}
                bgColor={bgColor}
                titleColor={titleColor}
                expandIcon={
                    useCustomStyle ? <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} /> : <ExpandMoreIcon />
                }
            >
                <Typography
                    tooltip={false}
                    wrap={!secondaryLabel}
                    sx={{
                        ...(secondaryLabel && {
                            width: '33%',
                            flexShrink: 0,
                        }),
                    }}
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
                            // Todo: check value type to send event to onChange
                            onEllipsisChange={(value) => setIsEllipsis(value)}
                            color={textColor}
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
}

//	Accordion.propTypes = {
//	    id: PropTypes.string,
//	    expanded: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//	    onChange: PropTypes.func,
//	    disabled: PropTypes.bool,
//	    label: PropTypes.string,
//	    secondaryLabel: PropTypes.string,
//	    details: PropTypes.string,
//	    detailsMaxRows: PropTypes.number,
//	    showMoreLabel: PropTypes.string,
//	    hideLabel: PropTypes.string,
//	    bgColor: PropTypes.string,
//	    textColor: PropTypes.string,
//	    titleColor: PropTypes.string,
//	    buttonsColor: PropTypes.string,
//	    unmountDetailsOnClose: PropTypes.bool,
//	    useCustomStyle: PropTypes.bool,
//	};

Accordion.defaultProps = {
    id: undefined,
    expanded: undefined,
    onChange: undefined,
    disabled: undefined,
    label: undefined,
    secondaryLabel: undefined,
    details: undefined,
    detailsMaxRows: undefined,
    showMoreLabel: 'Show More',
    hideLabel: 'Hide',
    bgColor: undefined,
    textColor: undefined,
    titleColor: undefined,
    buttonsColor: undefined,
    unmountDetailsOnClose: false,
    useCustomStyle: false,
};
