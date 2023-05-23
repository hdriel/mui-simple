import _ from "lodash";
import { Divider as MuiDivider } from "@mui/material";
import { styled, css } from "@mui/material/styles";
import { numberToPx } from "../../utils/helpers";

function getCustomBorderStyle({ color, thicknessValue, borderPosition }) {
  const customColorStyle =
    color &&
    css`
      ${borderPosition}-color: ${color};
    `;

  const thicknessStyle =
    thicknessValue &&
    css`
      ${borderPosition}-width: ${thicknessValue};
    `;

  return css`
    ${customColorStyle};
    ${thicknessStyle};
  `;
}

function getCustomColorStyle({ color }) {
  if (!color) return css``;

  return css`
    color: ${color};
  `;
}

function verticalStyle(props) {
  if (props.orientation !== "vertical") return css``;

  const { thickness, muiColor, customColor } = props;

  const thicknessValue =
    (thickness !== undefined && numberToPx(thickness)) || "thin";

  const color = _.get(props, `theme.palette.${muiColor}.main`, customColor);

  return css`
    & .MuiDivider-wrapper {
      ${getCustomColorStyle({ color })};     
    }
    
    &::before,
    &::after {
      ${getCustomBorderStyle({
        color,
        thicknessValue,
        borderPosition: "border-left",
      })}   
  `;
}

function horizontalStyle(props) {
  if (props.orientation !== "horizontal") return css``;

  const { thickness, muiColor, customColor } = props;

  const thicknessValue =
    (thickness !== undefined && numberToPx(thickness)) || "thin";

  const color = _.get(props, `theme.palette.${muiColor}.main`, customColor);

  return css`
    & .MuiDivider-wrapper {
      ${getCustomColorStyle({ color })};
    }

    &::before,
    &::after {
      ${getCustomBorderStyle({
        color,
        thicknessValue,
        borderPosition: "border-top",
      })}
    }
  `;
}

export const Divider = styled(MuiDivider, {
  shouldForwardProp: (propName) =>
    !["muiColor", "customColor"].includes(propName),
})`
  ${verticalStyle}
  ${horizontalStyle}
`;
