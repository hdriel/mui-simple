import React from "react";
import _ from "lodash";
import { ThemeProvider, lightTheme, darkTheme } from "../src/themes";

const LightTheme = _.clone(_.merge({}, lightTheme, { themeName: "light" }));
const DarkTheme = _.clone(_.merge({}, darkTheme, { themeName: "dark" }));

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const { theme } = context.globals;

      return (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme",
      defaultValue: LightTheme.themeName,
      toolbar: {
        icon: "paintbrush",
        items: [LightTheme.themeName, DarkTheme.themeName],
        title: "Theme",
      },
    },
  },
};

export default preview;
