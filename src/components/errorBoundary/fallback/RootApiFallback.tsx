import { isAxiosError } from 'axios';
import { type FallbackProps } from 'react-error-boundary';

import AngryLogo from '@/assets/logo/\bAngryLogo';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';
import ERROR_RESPONSES from '@/constants/errorMessages';

const RootApiFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const shouldSkip =
    !isAxiosError(error) ||
    error.response?.data.message === ERROR_RESPONSES.accessExpired ||
    error.response?.data.message === ERROR_RESPONSES.reissueFailed ||
    error.response?.data.message === ERROR_RESPONSES.authenticationEntryPoint;

  if (shouldSkip) {
    throw error;
  }
  return (
    <main className="relative w-full h-dvh flex justify-center items-start">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="flex gap-6">
            <AngryLogo width={50} />
            <AngryLogo width={50} />
            <AngryLogo width={50} />
          </div>
        </div>
        <h2 className="flex-1 text-gray-10 font-jalnan">
          <Typography>{error.response?.data.error}</Typography>
        </h2>
      </div>

      <div className="absolute bottom-5 text-xl w-[90%] bg-gray-100 rounded-xl">
        <Button
          className="w-full h-16 duration-300"
          variant="secondary"
          onClick={resetErrorBoundary}
        >
          재시도
        </Button>
      </div>
    </main>
  );
};

export default RootApiFallback;
