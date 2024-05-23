import { Typography } from '@/components/common/typography/Typography';
import { TaskProps } from './Task';

type SharedTaskProps = Pick<TaskProps, 'routineTitle'>;

const SharedTask = ({ routineTitle }: SharedTaskProps) => {
  return (
    <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
      <Typography type="body2">{routineTitle}</Typography>
    </div>
  );
};

export default SharedTask;
