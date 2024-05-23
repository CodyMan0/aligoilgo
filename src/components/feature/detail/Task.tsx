import { useRef, useState } from 'react';
import { useBeforeUnload, useParams } from 'react-router-dom';

import CheckedIcon from '@/assets/icon/CheckedIcon';
import EllipsisVerticalIcon from '@/assets/icon/EllipsisVerticalIcon';
import Submit from '@/assets/icon/Submit';
import UnCheckedIcon from '@/assets/icon/UnCheckedIcon';
import Logo from '@/assets/logo/Logo';
import { Typography } from '@/components/common/typography/Typography';
import { DELAY_SECOND } from '@/constants/contants';
import useRoutineTitleMutation from '@/hooks/seed/routine/useRoutineTitleMutation';
import { useInput } from '@/hooks/useInput';
import useQueryString from '@/hooks/useQueryString';
import useMusicStore from '@/store/useMusicStore';
import SharedTask from './SharedTask';
import { TaskEditInput } from './TaskEditInput';

export type TaskProps = {
  routineTitle: string;
  routineId: number;
  completedRoutineToday: boolean;
  onDone: VoidFunction;
  onRainBgClose: VoidFunction;
  onRainBgOpen: VoidFunction;
  //TODO : 다른 페이지에서 사용할때 수정이 불가해야하는 요구사항때문에 임시 추가 해당 컴포넌트는 반드시 리팩터링 필요
  disableEditing?: boolean;
};

const Task = ({
  routineTitle,
  routineId,
  completedRoutineToday,
  onDone,
  onRainBgOpen,
  onRainBgClose,
  disableEditing,
}: TaskProps) => {
  const toggleMusicPlaying = useMusicStore((s) => s.toggleRainPlaying);
  const isPlaying = useMusicStore((s) => s.isRainPlaying);

  const { isShared } = useQueryString('share');

  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const EditInputRef = useRef<HTMLInputElement>(null);
  const { updateRoutineTitle } = useRoutineTitleMutation(Number(id));
  const { value: editText, handleChange: handleEditText } = useInput(routineTitle);
  const CheckIcon = completedRoutineToday ? CheckedIcon : UnCheckedIcon;
  const isEditedInputValue = routineTitle !== editText;

  useBeforeUnload(() => {
    if (!isPlaying) return;
    toggleMusicPlaying();
    onRainBgClose();
  });

  const routineClickEventHandler = () => {
    if (completedRoutineToday) return;
    if (isPlaying) return;
    toggleMusicPlaying();
    onRainBgOpen();
    // 지정된 시간 이전에 다른 페이지로 가면 왜 아래 코드는 실행이 안될까?!
    setTimeout(() => {
      toggleMusicPlaying();
      onRainBgClose();
    }, DELAY_SECOND);
    onDone();
  };

  return (
    <>
      {isShared ? (
        <SharedTask routineTitle={routineTitle} />
      ) : (
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
                    disabled={disableEditing}
                  >
                    <EllipsisVerticalIcon width={20} />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Task;
