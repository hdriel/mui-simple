import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { DirectionWrapper } from "../wrappers/direction.wrapper";

import lightTheme from "./light.theme";
import darkTheme from "./dark.theme";

export const ThemeProvider = ({ dir, theme, children }) => {
  const themeLS = theme || localStorage.getItem("theme");
  let muiTheme;

  switch (themeLS) {
    case "dark":
      muiTheme = darkTheme;
      break;
    case "light":
    default:
      muiTheme = lightTheme;
      break;
  }
  muiTheme.direction = dir;

  return (
    <DirectionWrapper direction={muiTheme.direction}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </DirectionWrapper>
  );
};
