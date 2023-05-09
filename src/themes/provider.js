import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { DirectionWrapper } from "../wrappers/direction.wrapper";

import lightTheme from "./light.theme";
import darkTheme from "./dark.theme";

export const ThemeProvider = ({ dir, theme, children }) => {
  const themeLS = theme || localStorage.getItem("theme");
  let muiTheme;

  switch (themeLS) {
    case "light":
      muiTheme = lightTheme;
      break;
    case "dark":
      muiTheme = darkTheme;
      break;
    default:
      muiTheme = lightTheme;
      break;
  }

  return (
    <DirectionWrapper direction={dir || muiTheme.direction}>
      <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
    </DirectionWrapper>
  );
};
