import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import Submit from '@/assets/icon/Submit';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import Logo from '@/assets/logo/Logo';
import { Typography } from '@/components/common/typography/Typography';
import { DELAY_SECOND } from '@/constants/contants';
import { useRoutineContext } from '@/context/RoutineContext';
import { useInput } from '@/hooks/useInput';
import useRoutineTitleMutation from '@/hooks/useRoutineTitleMutation';
import useMusicStore from '@/store/useMusicStore';
import { TaskEditInput } from './TaskEditInput';
interface TaskProps {
  initialIsDone?: boolean;
  routineTitle: string;
  routineId: number;
  completedRoutineToday: boolean;
  onFinishRoutine: VoidFunction;
  isShared: boolean;
}

const Task = ({
  routineTitle,
  routineId,
  completedRoutineToday,
  onFinishRoutine,
  isShared,
}: TaskProps) => {
  const toggleMusicPlaying = useMusicStore((s) => s.togglePlaying);
  const { onRainBgOpen, onRainBgClose } = useRoutineContext();

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const EditInputRef = useRef<HTMLInputElement>(null);
  const { updateRoutineTitle } = useRoutineTitleMutation(Number(id));
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;
  const isEditedInputValue = routineTitle !== editText;

  const routineClickEventHandler = () => {
    if (completedRoutineToday) return;
    // 루틴이 체크되어있지 않은 것만
    // 클릭하면 음익이 켜지고 비내리는 상태가 켜지고
    toggleMusicPlaying();
    onRainBgOpen();
    // 지정된 시간 이후 비내리는 상태가 꺼진다.
    setTimeout(() => {
      toggleMusicPlaying();
      onRainBgClose();
    }, DELAY_SECOND);
    // 지정된 시간 이내에 클릭이 이루어지면 상태를 false로 바꿔야 에러가 안생김.
    onFinishRoutine();
  };

  return (
    <div className="w-full flex gap-1 items-start px-4 py-3 rounded-[8px] border-gray-20 bg-white shadow-thumb">
      {isEditing ? (
        <>
          <button className="w-[24px] h-[24px]">
            <Logo width={24} height={24} />
          </button>
          <TaskEditInput value={editText} onChange={handleEditText} ref={EditInputRef} />
          <button
            onClick={() => {
              if (isEditedInputValue) updateRoutineTitle({ routineId, routineTitle: editText });
              setIsEditing(false);
            }}
          >
            <Submit width={24} color="#BACB91" />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={routineClickEventHandler}
            className="w-[24px] h-[24px]"
            disabled={isShared}
          >
            <CheckIcon width={24} height={24} />
          </button>
          <div className="flex w-full justify-between items-center">
            <Typography
              type="body2"
              className={`${completedRoutineToday && 'line-through text-gray-400'}`}
            >
              {routineTitle}
            </Typography>
            {!completedRoutineToday && (
              <button
                onClick={() => {
                  setIsEditing(true);
                  setTimeout(() => {
                    if (EditInputRef.current !== null) {
                      EditInputRef.current.focus();
                    }
                  }, 0);
                }}
                disabled={isShared}
              >
                <EllipsisVerticalIcon width={20} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
