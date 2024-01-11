import React from 'react';
import { Box as MuiBox } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ReactStars from 'react-rating-stars-component';
import SVGIcon from '../SVGIcon/SVGIcon';
import { useCustomColor } from '../../../utils/helpers';
import type { RatingProps } from '../../decs';

// RTL - not working well with mui
// const MyRating = styled(MuiRating)`
//   &.MuiRating-root {
//     /* @noflip */
//     direction: ltr;
//     /* @noflip */
//     flex-direction: row;
//   }
//
//   /* @noflip */
//   text-align: left;
//
//   & .MuiRating-iconActive {
//     /* @noflip */
//     direction: ltr;
//     /* @noflip */
//     text-align: left;
//   }
//
//   &:hover {
//     /* @noflip */
//     direction: ltr;
//   }
// `;

const Rating: React.FC<RatingProps> = ({
    boxSx,
    color: _color,
    activeColor: _activeColor,
    disabled,
    emptyIcon: _emptyIcon,
    filledIcon: _filledIcon,
    halfIcon: _halfIcon,
    name,
    onChange,
    SCORE_LABELS,
    showLabel,
    stars,
    value,
    ...props
}): React.ReactElement | React.ReactNode => {
    const theme = useTheme();
    const [color] = useCustomColor(_color);
    const [activeColor] = useCustomColor(_activeColor);

    const emptyIcon =
        typeof _emptyIcon === 'string' ? (
            <SVGIcon sx={{ fontSize: 'inherit', opacity: 0.55 }}>{_emptyIcon}</SVGIcon>
        ) : (
            _emptyIcon
        );

    const halfIcon =
        typeof _halfIcon === 'string' ? (
            <SVGIcon sx={{ fontSize: 'inherit', opacity: 1 }}>{_halfIcon}</SVGIcon>
        ) : (
            _halfIcon
        );

    const filledIcon =
        typeof _filledIcon === 'string' ? (
            <SVGIcon sx={{ fontSize: 'inherit', opacity: 1 }}>{_filledIcon}</SVGIcon>
        ) : (
            _filledIcon
        );

    return (
        // @ts-expect-error
        <MuiBox
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: theme.spacing(2, 4),
                direction: 'ltr /* @noflip */',
                width: 'max-content',
                ...boxSx,
            }}
        >
            <ReactStars
                count={stars}
                value={value}
                edit={!disabled && !!onChange}
                onChange={(value) => onChange?.({ target: { name, value } }, value)}
                emptyIcon={emptyIcon}
                halfIcon={halfIcon}
                filledIcon={filledIcon}
                color={color}
                activeColor={activeColor}
                {...props}
            />
            {showLabel && value !== null && SCORE_LABELS?.[value] && (
                <MuiBox sx={{ ml: '16px /* @noflip */' }}>{SCORE_LABELS?.[value]}</MuiBox>
            )}
        </MuiBox>
    );
};

Rating.defaultProps = {
    color: '#ffd700',
    activeColor: '#ffd700',
    disabled: false,
    emptyIcon: 'StarBorder',
    filledIcon: 'Star',
    halfIcon: 'StarHalf',
    isHalf: true,
    onChange: undefined,
    SCORE_LABELS: {
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
    },
    showLabel: true,
    size: 30,
    stars: 5,
    value: 0,
};

export type { RatingProps } from '../../decs';
export default Rating;
