import { useFieldArray, useFormContext } from 'react-hook-form';

import Add from '@/assets/icon/Add';
import Remove from '@/assets/icon/Remove';
import { ROUTINE_DESCRIPTION, ROUTINE_TITLE } from '../../../constants/target';
import Validation from '../../auth/Validation';
import Button from '../../common/button/Button';
import { Typography } from '../../common/typography/Typography';
import SeedCreateLayout from '../../layout/SeedCreateLayout';

type RoutineProps = {
  toNext: () => void;
};

const Routine = ({ toNext }: RoutineProps) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const {
    fields: routines,
    append: routineAppend,
    remove: routineRemove,
  } = useFieldArray({
    name: 'routines',
  });

  const routineWatch = watch('routines');
  const minRoutineCount = routineWatch.length === 1;
  const maxRoutineCount = routineWatch.length < 3;

  return (
    <SeedCreateLayout title={ROUTINE_TITLE} description={ROUTINE_DESCRIPTION}>
      <div className="flex items-center justify-between">
        <Typography type="heading3">열매 맺기 위한 루틴 (최대 3개)</Typography>
        {maxRoutineCount && (
          <button
            className="text-2xl text-mainDeep pl-4"
            type="button"
            onClick={() => {
              routineAppend({});
            }}
          >
            <Add width={16} height={16} color="#ffffff" />
          </button>
        )}
      </div>
      {routines.map((routine, index) => (
        <div className="flex items-center justify-center mt-5" key={routine.id}>
          <input
            type="text"
            className="placeholder:text-s placeholder:text-gray-100 w-full h-10 outline-none text-white border-b border-gray-200 bg-transparent"
            placeholder="루틴을 작성해보세요"
            autoComplete="off"
            {...register(`routines.${index}.value` as const)}
          />

          {!minRoutineCount && (
            <button
              className="text-2xl text-mainDeep"
              type="button"
              onClick={() => routineRemove(index)}
            >
              <Remove width={16} height={16} color="#ffffff" />
            </button>
          )}
        </div>
      ))}
      <div className="text-center">
        <Validation>{!!errors?.routines && '루틴 작성은 필수예요'}</Validation>
      </div>

      <div className="absolute bottom-5 text-xl w-full bg-slate-50 text-white rounded-xl">
        <Button
          className=" w-full h-16  duration-300"
          variant="secondary"
          onClick={async () => {
            const isValid = await trigger(['routines']);
            if (!isValid) return;
            toNext();
          }}
        >
          다음
        </Button>
      </div>
    </SeedCreateLayout>
  );
};

export default Routine;
