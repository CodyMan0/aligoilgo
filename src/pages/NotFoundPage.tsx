import { useNavigate } from 'react-router-dom';

import QuestionError from '@/assets/icon/QuestionError';
import AngryLogo from '@/assets/logo/AngryLogo';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';
import { ROUTER_PATHS } from '@/constants/routerPath';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <main className="relative w-full h-dvh flex justify-center items-start">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
          <div className="relative w-full flex justify-center gap-6">
            <AngryLogo width={50} />
            <AngryLogo width={50} />
            <AngryLogo width={50} />
            <div className="absolute left-5">
              <QuestionError width={100} />
            </div>
            <div className="absolute right-5">
              <QuestionError width={100} />
            </div>
          </div>
        </div>
        <h2 className="flex flex-col items-center flex-1 text-gray-10 font-jalnan gap-4">
          <Typography type="body1">존재하지 않는 페이지예요!</Typography>
          <Typography>URL에 문제가 있어요</Typography>
        </h2>
      </div>

      <div className="absolute bottom-5 text-xl w-[90%] bg-gray-100 rounded-xl">
        <Button
          className="w-full h-16 duration-300"
          variant="secondary"
          onClick={() => navigate(ROUTER_PATHS.ROOT)}
        >
          홈으로
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
