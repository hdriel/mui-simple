import _ from "lodash";
import { alpha, darken, lighten } from "@mui/material";

export function getCapitalLetters(str) {
  const chars =
    str
      ?.split(" ")
      .filter((v) => !!v)
      .map((word) => word[0].toUpperCase()) ?? undefined;

  if (!chars) return undefined;

  const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
  return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export function stringToColor(string) {
  if (!string) return undefined;

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

export function numberToPx(field) {
  return typeof field === "number" ? `${field}px` : field;
}

export function isDefined(value) {
  return value !== undefined && value !== null;
}

export function getCustomColor(
  props,
  {
    field = undefined,
    muiLevel = "main",
    opacity = 1,
    darken: _darken,
    lighten: _lighten,
  } = {}
) {
  const customColor = props?.[field] ?? props?.customColor;
  if (!customColor) return undefined;

  let color =
    _.get(props, `theme.palette.${customColor}.${muiLevel}`) ??
    _.get(props, `theme.palette.${customColor}`) ??
    customColor;

  if (!isValidColor(color)) return undefined;

  color = isDefined(opacity) ? alpha(color, opacity) : color;
  color = isDefined(_darken) ? darken(color, _darken) : color;
  color = isDefined(_lighten) ? alpha(color, _lighten) : color;

  return color;
}

const isValidColor = (color) => CSS.supports("color", color);
