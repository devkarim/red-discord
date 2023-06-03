import fs from 'fs';

export enum Locale {
  US = 'en-US',
  EG = 'ar-EG',
}

interface LocaleStrings {
  'en-US': { [key: string]: string | string[] };
  'ar-EG': { [key: string]: string | string[] };
}

const texts: LocaleStrings = JSON.parse(
  fs.readFileSync('./assets/i18n/texts.json', 'utf-8')
);

const t = (lang: Locale, textKey: string) => {
  return texts[lang][textKey];
};

export default t;
