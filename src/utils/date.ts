import dayjs from 'dayjs';

import { MAX_DATE, MIN_DATE } from '@/constants/seed';
import { gaurdNagativeToZero } from './math';

const currentDate = new Date();
export const fromNowOfMinDays = new Date(currentDate).setDate(currentDate.getDate() + MIN_DATE);
export const fromNowOfMaxDays = new Date(currentDate).setDate(currentDate.getDate() + MAX_DATE);

export const checkActiveDuration = (endDate: string): boolean => dayjs(endDate).isAfter();

export const getKrDateName = (date: Date) => dayjs(date).format('dddd');

export const getDateFromDiff = (endDate: string, startDate: string) => {
  return gaurdNagativeToZero(dayjs(endDate).diff(startDate, 'day') - 1);
};
