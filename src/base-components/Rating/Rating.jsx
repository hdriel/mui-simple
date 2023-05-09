import React, { useState } from "react";
import { Box as MuiBox, Rating as MuiRating } from "@mui/material";
import {
  Star as StarIcon,
  StarHalf as StarHalfIcon,
  StarBorder as StarBorderIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import { useTheme, styled } from "@mui/material/styles";
import ReactStars from "react-rating-stars-component";

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

const LABELS = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function Rating({ value, onChange, disabled, showLabel, size }) {
  const theme = useTheme();

  return (
    <MuiBox
      sx={{
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(2, 4),
        direction: "ltr /* @noflip */",
        width: "max-content",
      }}
    >
      <ReactStars
        count={5}
        size={size}
        value={value}
        edit={!disabled && !!onChange}
        onChange={(value) => onChange?.(value)}
        isHalf={true}
        emptyIcon={
          <StarBorderIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
        halfIcon={<StarHalfIcon style={{ opacity: 1 }} fontSize="inherit" />}
        fullIcon={<StarIcon style={{ opacity: 1 }} fontSize="inherit" />}
        activeColor="#ffd700"
      />
      {showLabel && value !== null && (
        <MuiBox sx={{ ml: "16px /* @noflip */" }}>{LABELS[value]}</MuiBox>
      )}
    </MuiBox>
  );
}

Rating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  showLabel: PropTypes.bool,
  size: PropTypes.number,
};

Rating.defaultProps = {
  value: 0,
  onChange: undefined,
  disabled: false,
  showLabel: true,
  size: 30,
};
