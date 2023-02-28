import React from "react";
import { themes } from "@/styles/theme";
import { setCookie, parseCookies } from "nookies";

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const cookies = parseCookies();
  if (cookies.USER_THEME === undefined) {
    cookies.USER_THEME = "light";
  }
  const [userTheme, setUserTheme] = React.useState(cookies.USER_THEME);
  const activeThemeStyles = themes[userTheme];
  function toggleTheme() {
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
    <ThemeContext.Provider value={{ activeThemeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
