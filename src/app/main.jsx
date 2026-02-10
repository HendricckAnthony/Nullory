import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeModeProvider } from "@/app/providers";
import { NulloryLanding } from "@/features/landing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeModeProvider>
      <NulloryLanding />
    </ThemeModeProvider>
  </React.StrictMode>
);
