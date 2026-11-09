export type Lang = 'ru' | 'en';

export const LANGS: Lang[] = ['ru', 'en'];

// Each language has its own URL, so both versions are prerendered and can be
// shared and indexed separately. Russian stays on the root.
export const LANG_PATH: Record<Lang, string> = {
  ru: '/',
  en: '/en/',
};

// Written in the target language: the switch is read by someone who wants it.
export const LANG_SWITCH_TITLE: Record<Lang, string> = {
  ru: 'Русская версия',
  en: 'English version',
};

export const otherLang = (lang: Lang): Lang => (lang === 'ru' ? 'en' : 'ru');
