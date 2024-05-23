import dayjs from 'dayjs';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import useCreateSeedMutation from '@/hooks/seed/create/useCreateSeedMutation';
import { SeedValidationInferType } from '@/pages/SeedCreatePage';
import 'react-datepicker/dist/react-datepicker.css';
import { DURATION_DESCRIPTION, DURATION_TITLE } from '../../../constants/target';
import Validation from '../../auth/Validation';
import Button from '../../common/button/Button';
import SeedCreateLayout from '../../layout/SeedCreateLayout';
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
      endDate: dayjs.utc(data.endDate).tz('Asia/Seoul').format('YYYY-MM-DDTHH:MM:ss'),
    };
    submitSeed(updateEndDateData);
  };

  return (
    <SeedCreateLayout title={DURATION_TITLE} description={DURATION_DESCRIPTION}>
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
    </SeedCreateLayout>
  );
};

export default Duration;
