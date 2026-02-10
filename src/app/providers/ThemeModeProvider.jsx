import React, { createContext, useContext, useState, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { getTheme, THEME_MODES } from "@/core/theme";

const ThemeModeContext = createContext({
  mode: THEME_MODES.DARK,
  setMode: () => {},
});

const STORAGE_KEY = "nullory-theme-mode";

function readStoredMode() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === THEME_MODES.LIGHT || stored === THEME_MODES.DARK) return stored;
  } catch (_) {}
  return THEME_MODES.DARK;
}

export function ThemeModeProvider({ children }) {
  const [mode, setModeState] = useState(readStoredMode);

  const setMode = (next) => {
    const value = next === THEME_MODES.LIGHT ? THEME_MODES.LIGHT : THEME_MODES.DARK;
    setModeState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {}
  };

  const theme = useMemo(() => getTheme(mode), [mode]);
  const contextValue = useMemo(() => ({ mode, setMode }), [mode]);

  return (
    <ThemeModeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}

export { THEME_MODES };
