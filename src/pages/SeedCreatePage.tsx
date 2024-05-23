import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { InferType } from 'yup';

import ChevronLeft from '@/assets/icon/ChevronLeft';
import Duration from '@/components/feature/create/Duration';
import ProgressBar from '@/components/feature/create/ProgressBar';
import Seed from '@/components/feature/create/Seed';
import { FUNNEL_LIST, seedSchema } from '@/constants/contants';
import useFunnel from '@/hooks/seed/create/useFunnel';
import Routine from '../components/feature/create/Routine';

export type SeedValidationInferType = InferType<typeof seedSchema>;

const SeedCreatePage = () => {
  const { step, toNext, toPrev } = useFunnel(FUNNEL_LIST);

  const methods = useForm<SeedValidationInferType>({
    defaultValues: {
      seed: '',
      routines: [{ value: '' }],
      endDate: '',
    },
    resolver: yupResolver(seedSchema),
  });

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6">
      <FormProvider {...methods}>
        <section className="relative w-full h-dvh">
          <header className="h-[68px] flex w-full items-center justify-between" onClick={toPrev}>
            <ChevronLeft width={20} height={20} color="white" />
          </header>
          <ProgressBar step={step} />
          {step === 'seed' && <Seed toNext={toNext} />}
          {step === 'routines' && <Routine toNext={toNext} />}
          {step === 'duration' && <Duration />}
        </section>
      </FormProvider>
    </div>
  );
};

export default SeedCreatePage;
