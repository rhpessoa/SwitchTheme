import GlobalStyle from "@/styles/GlobalStyles";
import React, { useEffect } from "react";
import { themes } from "@/styles/theme";
import { setCookie, parseCookies } from "nookies";
import { ThemeProvider } from "styled-components";
export default function App({ Component, pageProps }) {
  const cookies = parseCookies();
  if (cookies.USER_THEME === undefined) {
    cookies.USER_THEME = "light";
  }
  const [userTheme, setUserTheme] = React.useState(cookies.USER_THEME);
  const activeThemeStyles = themes[userTheme];
  useEffect(() => {
    setUserTheme(parseCookies().USER_THEME || "light");
  }, []);

  function SwitchTheme() {
    if (userTheme === "light") {
      setUserTheme("dark");
      setCookie(null, "USER_THEME", "dark", {
        path: "/",
        maxAge: 86400 * 7,
        sameSite: "strict",
      });
    }
    if (userTheme === "dark") {
      setUserTheme("light");
      setCookie(null, "USER_THEME", "light", {
        path: "/",
        maxAge: 86400 * 7,
        sameSite: "strict",
      });
    }
  }
  return (
    <>
      <ThemeProvider theme={activeThemeStyles}>
        <GlobalStyle />
        <button
          onClick={() => {
            SwitchTheme();
          }}
        >
          Troca o tema
        </button>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
