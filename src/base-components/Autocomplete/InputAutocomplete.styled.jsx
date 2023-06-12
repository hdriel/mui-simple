import { styled, lighten, darken } from "@mui/material/styles";

import {
  Autocomplete as MuiAutocomplete,
  Box as MuiBox,
  Stack as MuiStack,
} from "@mui/material";

export const Autocomplete = MuiAutocomplete;

export const Box = MuiBox;

export const Stack = MuiStack;

export const GroupHeader = styled("div")(({ theme, color }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: color,
  backgroundColor:
    theme.palette.mode === "light"
      ? color && lighten(color, 0.85)
      : color && darken(color, 0.8),
}));

export const GroupItems = styled("ul")`
  padding: 0;
`;
