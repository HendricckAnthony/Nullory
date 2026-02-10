import { nulloryThemeDark } from "./themeDark";
import { nulloryThemeLight } from "./themeLight";

export { nulloryThemeDark } from "./themeDark";
export { nulloryThemeLight } from "./themeLight";
export { nulloryTheme } from "./theme";

export const THEME_MODES = Object.freeze({ DARK: "dark", LIGHT: "light" });

export function getTheme(mode) {
  return mode === "light" ? nulloryThemeLight : nulloryThemeDark;
}
