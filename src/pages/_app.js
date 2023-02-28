import GlobalStyle from "@/styles/GlobalStyles";
import React from "react";
import { ThemeProvider } from "styled-components";
import {
  ThemeContext,
  ThemeProvider as CustomThemeProvider,
} from "@/context/ColorThemeContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CustomThemeProvider>
        <ThemeContext.Consumer>
          {({ activeThemeStyles }) => (
            <>
              <ThemeProvider theme={activeThemeStyles}>
                <GlobalStyle />
                <Component {...pageProps} />
              </ThemeProvider>
            </>
          )}
        </ThemeContext.Consumer>
      </CustomThemeProvider>
    </>
  );
}
