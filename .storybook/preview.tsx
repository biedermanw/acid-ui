import React from "react";
import { ThemeProvider } from "../src/context/themeContext";
import { GlobalStyle } from "../src/styles/GlobalStyles";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
