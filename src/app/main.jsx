import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { nulloryTheme } from "@/core/theme";
import { NulloryLanding } from "@/features/landing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={nulloryTheme}>
      <CssBaseline />
      <NulloryLanding />
    </ThemeProvider>
  </React.StrictMode>
);
