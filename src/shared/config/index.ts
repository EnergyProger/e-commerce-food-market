import { ENGLISH_LANGUAGE, UKRAINIAN_LANGUAGE } from "./i18n/constants";
import {
  languageIconList,
  type SupportedLngsType,
} from "./i18n/LanguageIconList";
import { AppRoutes, routePaths } from "./router/routePaths";
import {
  Theme,
  ThemeContext,
  type ThemeType,
  LOCAL_STORAGE_THEME_KEY,
} from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";

export {
  AppRoutes,
  routePaths,
  Theme,
  ThemeContext,
  type ThemeType,
  LOCAL_STORAGE_THEME_KEY,
  useTheme,
  languageIconList,
  type SupportedLngsType,
  ENGLISH_LANGUAGE,
  UKRAINIAN_LANGUAGE,
};
