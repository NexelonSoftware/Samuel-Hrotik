import type { Locale } from "../i18n.config";
import type en from "./lang/en.json";

export type LangType = typeof en;

const dictionaries = {
  sk: () => import("./lang/sk.json").then((module) => module.default),
  en: () => import("./lang/en.json").then((module) => module.default),
};

export const availableLanguages: Locale[] = Object.keys(
  dictionaries,
) as Locale[];

export const localeFlagsNavbar = {
  en: "https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg",
  sk: "https://purecatamphetamine.github.io/country-flag-icons/3x2/SK.svg",
};

export const getLanguage = async (locale: Locale): Promise<LangType> => {
  const loader = dictionaries[locale];
  if (typeof loader === "function") {
    return loader();
  } else {
    return dictionaries.en();
  }
};
