import { TargetStepType } from '@/types/TargetTypes';

type ProgressbarProps = {
  step: TargetStepType[number];
};
const getPercentFormStep: Record<string, string> = {
  seed: `scale-x-[33%]`,
  routines: `scale-x-[66%]`,
  duration: `scale-x-100`,
};

const ProgressBar = ({ step }: ProgressbarProps) => {
  return (
    <div className="sticky top-0overflow-x-hidden overflow-y-hidden z-10 w-full">
      <div className="h-2 w-full bg-gray-50 rounded-md relative">
        <div
          className={`h-full bg-main rounded-md text-xs ${getPercentFormStep[step]} origin-left transition-transform duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
