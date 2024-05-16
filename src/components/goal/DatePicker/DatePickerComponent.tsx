import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';

import { fromNowOfMaxDays, fromNowOfMinDays, getKrDateName } from '@/utils/date';
import CalenderHeader from './CalenderHeader';

const DatePickerComponent = () => {
  const { register, setValue, getValues } = useFormContext();
  const endDateValue = getValues('endDate');
  return (
    <DatePicker
      dateFormat={`yyyy년 MM월 dd일`}
      className="flex-1 placeholder:text-gray-100 h-10 outline-none border-b w-full border-gray-200 bg-transparent"
      {...register('endDate')}
      selected={endDateValue}
      onChange={(date) => setValue('endDate', date, { shouldValidate: true })}
      placeholderText="클릭해서 날짜를 선택해보세요"
      isClearable
      withPortal
      minDate={new Date(fromNowOfMinDays)}
      maxDate={new Date(fromNowOfMaxDays)}
      autoComplete="off"
      renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
        <CalenderHeader date={date} decreaseMonth={decreaseMonth} increaseMonth={increaseMonth} />
      )}
      dayClassName={(date) =>
        getKrDateName(date) === '토요일'
          ? 'saturday'
          : getKrDateName(date) === '일요일'
          ? 'sunday'
          : null
      }
    />
  );
};

export default DatePickerComponent;
