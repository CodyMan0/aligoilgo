import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useFunnel = <T extends readonly string[]>(steps: T) => {
  const [step, setStep] = useState<T[number]>(steps[0]);
  const currentIdx = steps.indexOf(step);
  const navigate = useNavigate()

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = useCallback(() => {
    if (!hasPrev) {
      navigate(-1)
      return;
    }
    setStep(steps[currentIdx - 1]);
  }, [currentIdx, hasPrev, steps,navigate]);

  const toNext = useCallback(() => {
    if (!hasNext) {
      return;
    }

    setStep(steps[currentIdx + 1]);
  }, [currentIdx, hasNext, steps]);


  return { step, setStep, hasPrev, hasNext, toPrev, toNext };
};

export default useFunnel;
