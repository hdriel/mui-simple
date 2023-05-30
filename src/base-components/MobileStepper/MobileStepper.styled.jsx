import { styled, css } from "@mui/material/styles";
import {
  MobileStepper as MuiMobileStepper,
  Box as MuiBox,
} from "@mui/material";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Check,
} from "@mui/icons-material";

import MuiButton from "../Button/Button";
import MuiTypography from "../Typography/Typography";
import MuiPaper from "../Paper/Paper";

export const MobileStepper = styled(MuiMobileStepper, {
  shouldForwardProp: (propName) => !["forceFixedDirection"].includes(propName),
})`
  &.MuiMobileStepper-root {
    ${(props) =>
      props.forceFixedDirection
        ? css`
            /* @noflip */
            direction: ltr;
          `
        : css``}
  }
`;

export const Box = MuiBox;

export const Paper = MuiPaper;

export const Button = MuiButton;

export const Typography = MuiTypography;

export const KeyboardArrowLeftIcon = KeyboardArrowLeft;
export const KeyboardArrowRightIcon = KeyboardArrowRight;
export const CheckIcon = Check;
