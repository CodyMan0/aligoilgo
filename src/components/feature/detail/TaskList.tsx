import { useParams } from 'react-router-dom';

import { useRoutineContext } from '@/context/RoutineContext';
import useRoutineMutation from '@/hooks/seed/routine/useRoutineMutation';
import { RoutineDetailType } from '@/types/target/type';
import Task from './Task';

type TaskListProps = {
  tasks: RoutineDetailType[];
};

const TaskList = ({ tasks }: TaskListProps) => {
  const { id } = useParams();
  const { checkRotine } = useRoutineMutation(Number(id));
  const { onRainBgOpen, onRainBgClose } = useRoutineContext();

  return (
    <div className={`flex-1 w-full flex flex-col gap-4 `}>
      {tasks.map((routine, index) => {
        return (
          <Task
            key={index}
            {...routine}
            onDone={() => checkRotine(routine.routineId)}
            onRainBgOpen={onRainBgOpen}
            onRainBgClose={onRainBgClose}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
