import * as en from "./en.json";
import * as sk from "./sk.json";

type Translation = typeof en;
type Translations = {
  sk: Translation;
  en: Translation;
};

const translations: Translations = { sk, en };

export { translations };
export type { Translations, Translation };
