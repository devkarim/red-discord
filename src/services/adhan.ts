import axios from 'axios';
import { to12H } from '../helpers/utils';

interface TimingsResponse {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}

interface PrayerTiming {
  prayer: string;
  time: string;
}

const client = axios.create({
  baseURL: 'https://api.aladhan.com/v1',
  timeout: 5000,
});

const getPrayerTimesByCity = async (
  city: string,
  country: string = 'Egypt',
  method: number = 5
) => {
  const res = await client.get('/timingsByCity', {
    params: { city, country, method },
  });
  const timings = res.data['data']['timings'];
  return parseTimings(timings as TimingsResponse);
};

const parseTimings = (timingsRes: TimingsResponse) => {
  const timings: PrayerTiming[] = [];
  for (const [prayer, time] of Object.entries(timingsRes)) {
    timings.push({ prayer, time });
  }
  return timings;
};

export const parseReadableTimings = (timings: PrayerTiming[]) => {
  let msg = '';
  for (const p of timings) {
    if (
      ['fajr', 'dhuhr', 'asr', 'sunrise', 'maghrib', 'isha'].includes(
        p.prayer.toLowerCase()
      )
    ) {
      msg += `${p.prayer.toLowerCase() != 'sunrise' ? 'Al-' : ''}${
        p.prayer
      }: ${to12H(p.time)}\n`;
    }
  }
  return msg;
};

export default getPrayerTimesByCity;
