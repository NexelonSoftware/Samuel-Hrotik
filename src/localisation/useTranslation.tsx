"use client";

import { createContext, useContext, useDebugValue, useMemo } from "react";
import { usePathname } from "next/navigation";

import type { Locale } from "../i18n.config";
import { i18n } from "../i18n.config";
import { translations } from "./lang";
import type { Translation } from "./lang";

const TranslationContext = createContext<Translation>({
  ...translations.en,
});

export function useLocale(): Locale {
  const pathname = usePathname();
  const pathnameItems = pathname.split("/");
  const lang: Locale =
    pathnameItems[1]?.length === 2
      ? (pathnameItems[1] as Locale)
      : i18n.defaultLocale;

  return lang;
}

export default function useTranslation(): Translation {
  useDebugValue(`useTranslation`);
  return useContext(TranslationContext);
}

type TranslationProviderProps = {
  children: React.ReactNode;
};

export function TranslationProvider({ children }: TranslationProviderProps) {
  const lang = useLocale();

  const translationData = useMemo(() => {
    return { ...translations[lang] };
  }, [lang]);

  return (
    <TranslationContext.Provider value={translationData}>
      {children}
    </TranslationContext.Provider>
  );
}
