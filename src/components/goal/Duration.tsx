import dayjs from 'dayjs';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import useCreateSeedMutation from '@/hooks/api/target/useCreateTarget';
import { SeedValidationInferType } from '@/pages/TargetCreatePage';
import 'react-datepicker/dist/react-datepicker.css';
import { DURATION_DESCRIPTION, DURATION_TITLE } from '../../constants/target';
import Validation from '../auth/Validation';
import Button from '../common/button/Button';
import TargetCreateLayout from '../layout/TargetCreateLayout';
import './DatePicker/css/react-datepicker.css';
import DatePickerComponent from './DatePicker/DatePickerComponent';

const Duration = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useFormContext<SeedValidationInferType>();
  const { submitSeed, isPending } = useCreateSeedMutation();

  const onSubmitHandler: SubmitHandler<SeedValidationInferType> = (data) => {
    const updateEndDateData = {
      ...data,
      endDate: dayjs(data.endDate).format('YYYY-MM-DD'),
    };
    submitSeed(updateEndDateData);
  };

  return (
    <TargetCreateLayout title={DURATION_TITLE} description={DURATION_DESCRIPTION}>
      <DatePickerComponent />
      <Validation>{errors?.endDate?.message?.toString()}</Validation>

      <div className={`absolute bottom-5 text-xl w-full bg-slate-50 text-white rounded-xl`}>
        <Button
          className={`w-full h-16 bg-none`}
          variant="secondary"
          type="submit"
          onClick={handleSubmit(onSubmitHandler)}
          disabled={isPending}
        >
          제출하기
        </Button>
      </div>
    </TargetCreateLayout>
  );
};

export default Duration;
