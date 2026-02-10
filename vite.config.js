import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Use "/" se o site fica em https://hendricckanthony.github.io/
  // Use "/Nullory/" se o site fica em https://hendricckanthony.github.io/Nullory/
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
});
