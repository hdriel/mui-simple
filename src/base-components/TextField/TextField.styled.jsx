import React from "react";
import { styled, css } from "@mui/material/styles";
import CommitRoundedIcon from "@mui/icons-material/CommitRounded";

import {
  TextField as MuiTextField,
  Box as MuiBox,
  Stack as MuiStack,
} from "@mui/material";
import { getCustomColor } from "../../utils/helpers";
import Button from "../Button/Button";

export const Stack = MuiStack;
export const Box = MuiBox;
export const SliderIcon = (props) => (
  <Button icon={<CommitRoundedIcon />} {...props} />
);

export const TextField = styled(MuiTextField, {
  shouldForwardProp: (propName) =>
    !["colorText", "colorLabel", "colorActive"].includes(propName),
})`
  ${(props) => {
    const colorText = getCustomColor(props, { field: "colorText" });
    const colorLabel = getCustomColor(props, { field: "colorLabel" });
    const hoverColorLabel = getCustomColor(props, {
      field: "colorLabel",
      darken: 0.3,
    });
    const colorActive = getCustomColor(props, { field: "colorActive" });

    return css`
      & input {
        color: ${colorText} !important;
      }
      & label{
        color: ${colorLabel};
      }
      & label.Mui-focused {
        color: ${colorActive};
      } 
      & .MuiInputBase-root:after {
        border-bottom-color: ${colorActive};
      }
      & .MuiInput-underline:after {
        border-bottom-color: ${colorLabel};
      }
      & .MuiInputBase-root .MuiFilledInput-root:after {
        border-bottom-color: ${colorLabel};
      }
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: ${colorLabel};
        }
        &:hover fieldset {
          border-color: ${hoverColorLabel};
        }
        &.Mui-focused fieldset {
          border-color: ${colorActive};
        }
    `;
  }}
`;