import { useTranslation } from "react-i18next";

import {
  ENGLISH_LANGUAGE,
  languageIconList,
  UKRAINIAN_LANGUAGE,
  type SupportedLngsType,
} from "@/shared/config";
import { AppIcon, Button } from "@/shared/ui";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as SupportedLngsType;

  const toggleChangeLanguage = () =>
    i18n.changeLanguage(
      i18n.language === ENGLISH_LANGUAGE
        ? UKRAINIAN_LANGUAGE
        : ENGLISH_LANGUAGE,
    );

  return (
    <Button theme="ghost" onClick={toggleChangeLanguage}>
      <AppIcon Icon={languageIconList[currentLanguage]} />
    </Button>
  );
};
