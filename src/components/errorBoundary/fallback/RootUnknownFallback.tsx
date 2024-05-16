import { isAxiosError } from 'axios';
import { type FallbackProps } from 'react-error-boundary';
import { Navigate, useNavigate } from 'react-router-dom';

import Logo from '@/assets/logo/Logo';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { ROUTER_PATHS } from '@/constants/routerPath';

const RootUnknownFallback = ({ error }: FallbackProps) => {
  const navigate = useNavigate();

  const shouldSkip =
    isAxiosError(error) &&
    (error.response?.data.error === ERROR_RESPONSES.reissueFailed ||
      error.response?.data.error === ERROR_RESPONSES.authenticationEntryPoint);

  if (shouldSkip) {
    return <Navigate to={ROUTER_PATHS.ROOT} />;
  }

  return (
    <main className="relative w-full h-dvh flex justify-center items-start">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="flex gap-6">
            <Logo width={50} />
            <Logo width={50} />
            <Logo width={50} />
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
          onClick={() => navigate(-1)}
        >
          이전 페이지로 돌아가기
        </Button>
      </div>
    </main>
  );
};

export default RootUnknownFallback;
