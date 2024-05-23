
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import updateLocale from 'dayjs/plugin/updateLocale';
import utc from 'dayjs/plugin/utc';



dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('ko');
dayjs.tz.setDefault('Asia/Seoul');
dayjs.updateLocale('ko', {
  relativeTime: {
    future: '%s 남음',
    past: '%s 전',
    s: '몇 초',
    m: '1분',
    mm: '%d분',
    h: '1시간',
    hh: '%d시간',
    d: '1일',
    dd: '%d일',
    M: '한 달',
    MM: '%d달',
    y: '1년',
    yy: '%d년',
  },
});

export const fromNowOf = (endDate: string | number | Date | dayjs.Dayjs | null | undefined) => {
  return dayjs(endDate).fromNow();
};

