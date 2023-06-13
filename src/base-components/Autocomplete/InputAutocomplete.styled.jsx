import React from "react";
import { styled, lighten, darken } from "@mui/material/styles";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import {
  Autocomplete as MuiAutocomplete,
  Box as MuiBox,
  Stack as MuiStack,
} from "@mui/material";

import { Close as CloseIcon } from "@mui/icons-material";

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

export const renderHighlightOptionCB =
  (_field) =>
  (props, option, { inputValue }) => {
    const optionValue = typeof _field === "function" ? _field(option) : _field;
    const matches = match(optionValue, inputValue);
    const parts = parse(optionValue, matches);

    return (
      <li {...props}>
        <div>
          {parts.map((part, index) => (
            <span
              key={index}
              style={{ fontWeight: part.highlight ? 700 : 400 }}
            >
              {part.text}
            </span>
          ))}
        </div>
      </li>
    );
  };
