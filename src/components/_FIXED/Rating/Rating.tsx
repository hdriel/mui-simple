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
    activeColor: _activeColor = '#ffd700',
    boxSx,
    color: _color = '#ffd700',
    disabled = false,
    emptyIcon: _emptyIcon = 'StarBorder',
    filledIcon: _filledIcon = 'Star',
    halfIcon: _halfIcon = 'StarHalf',
    isHalf = true,
    name,
    onChange,
    showLabel = true,
    size = 30,
    stars = 5,
    SCORE_LABELS = {
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
    value = 0,
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
                isHalf={isHalf}
                size={size}
                {...props}
            />
            {showLabel && value !== null && SCORE_LABELS?.[value] && (
                <MuiBox sx={{ ml: '16px /* @noflip */' }}>{SCORE_LABELS?.[value]}</MuiBox>
            )}
        </MuiBox>
    );
};

Rating.displayName = 'Rating';

export type { RatingProps } from '../../decs';
export default Rating;
