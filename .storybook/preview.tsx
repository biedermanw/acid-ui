import React from "react";
import { ThemeProvider } from "../src/context/themeContext";
import { GlobalStyle } from "../src/styles/GlobalStyles";
import { MemoryRouter } from "react-router-dom";
import { RoutesConfigProvider } from "../src/context/routesConfigContext";

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <RoutesConfigProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </RoutesConfigProvider>
    </ThemeProvider>
  ),
];
