import { createContext } from "react";

export const Theme = {
  DARK: "dark-theme",
  LIGHT: "light-theme",
} as const;

export type ThemeType = (typeof Theme)[keyof typeof Theme];

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}

export const LOCAL_STORAGE_THEME_KEY = "theme";

export const ThemeContext = createContext<ThemeContextProps>({});
