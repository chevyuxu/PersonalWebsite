import { zhTW } from './zh-TW';
import { en } from './en';
import type { Language } from '../types';

export const translations = {
  'zh-TW': zhTW,
  en: en,
} as const;

export type TranslationKeys = typeof zhTW;

/**
 * Get a nested translation value by dot-notation key
 * Example: getTranslation('zh-TW', 'nav.home') => '首頁'
 */
export function getTranslation(
  lang: Language,
  keyPath: string
): string {
  const keys = keyPath.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let result: any = translations[lang];

  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      console.warn(`Translation missing: ${keyPath} for language ${lang}`);
      return keyPath;
    }
  }

  return typeof result === 'string' ? result : keyPath;
}

