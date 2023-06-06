import { styled, css } from "@mui/material/styles";

import { TextField as MuiTextField, Box as MuiBox } from "@mui/material";
import { getCustomColor } from "../../utils/helpers";

export const Box = MuiBox;

export const TextField = styled(MuiTextField, {
  shouldForwardProp: (propName) =>
    !["colorText", "colorLabel", "activeColor"].includes(propName),
})`
  ${(props) => {
    const colorText = getCustomColor(props, { field: "colorText" });
    const colorLabel = getCustomColor(props, { field: "colorLabel" });
    const hoverColorLabel = getCustomColor(props, {
      field: "colorLabel",
      darken: 0.3,
    });
    const activeColor = getCustomColor(props, { field: "activeColor" });

    return css`
      & label{
        color: ${colorLabel};
      }
      & label.Mui-focused {
        color: ${activeColor};
      }
      & .MuiInput-underline:after {
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
          border-color: ${activeColor};
        }
    `;
  }}
`;
