import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import { Typography } from '@/components/common/typography/Typography';
import { monthFormatDate } from '../../../../utils/formatDate';

interface Props {
  date: Date;
  decreaseMonth(): void;
  increaseMonth(): void;
}

const CalenderHeader = ({ date, decreaseMonth, increaseMonth }: Props) => {
  const dateToString = monthFormatDate(date);

  return (
    <div className="p-2 flex justify-evenly items-center">
      <button type="button" onClick={decreaseMonth} className="text-3xl text-white">
        <FiChevronsLeft />
      </button>
      <Typography type="body1" className="text-white">
        {dateToString}
      </Typography>

      <button type="button" onClick={increaseMonth} className="text-3xl text-white">
        <FiChevronsRight />
      </button>
    </div>
  );
};

export default CalenderHeader;
