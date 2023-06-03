import t, { Locale } from './i18n';

export const getCurrentDateTime = () => {
  return new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
};

export const dbg = (msg: string, tag: string = 'Debug') => {
  console.log(`[${getCurrentDateTime()}] [${tag}] ${msg}`);
};

export const dbgErr = (msg: string | Error) => {
  dbg(msg instanceof Error ? msg.message : msg, 'Error');
};

export const capatlize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const to12H = (time: string) => {
  const hours = +time.split(':')[0];
  const minutes = time.split(':')[1];
  return `${hours > 12 ? hours - 12 : hours}:${minutes}`;
};

export const getRandomFromArgs = <T>(...arr: T[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const tr = (...arr: string[]) => {
  return getRandomFromArgs(...t(Locale.EG, getRandomFromArgs(...arr)));
};
