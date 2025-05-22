export const i18n = {
  defaultLocale: "sk",
  locales: ["en", "sk"],
} as const;

//generate object with language labels for eac language
export const languagesLabels = {
  en: "English",
  sk: "Slovenčina",
};

export const dateFnsCodes = {
  en: "en",
  sk: "sk",
  cz: "cs",
  de: "de",
};

export type Locale = (typeof i18n)["locales"][number];
export type I18nConfig = typeof i18n;
