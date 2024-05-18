import { useNavigate } from 'react-router-dom';

import LogoSVG from '@/assets/logo/Logo';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { Typography } from '../common/typography/Typography';

const SeedEmptyCard = ({ isActive }: { isActive: boolean }) => {
  const navigate = useNavigate();

  return (
    <>
      {isActive ? (
        <li
          className="flex flex-col size-full rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10"
          onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
        >
          <div className="flex w-full h-full py-2">
            <div className="flex flex-col justify-center items-center w-[50%]">
              <LogoSVG width={80} height={80} className="ml-1" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-evenly ">
              <Typography type="heading2" className="font-jalnan">
                씨앗 생성하기
              </Typography>
            </div>
          </div>
        </li>
      ) : (
        <li className="relative flex flex-col size-full rounded-xl border border-gray-100 p-3 bg-gray-10 min-h-48">
          <div className="flex w-full h-full py-2">
            <div className="flex flex-col justify-center items-center w-[50%]">
              <LogoSVG width={80} height={80} className="ml-1" />
            </div>
            <div className="flex flex-col justify-center items-center w-[50%]">
              <LogoSVG width={80} height={80} className="ml-1" />
            </div>
            <div className="flex flex-col justify-center items-center w-[50%]">
              <LogoSVG width={80} height={80} className="ml-1" />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-evenly ">
            <Typography type="heading3" className="text-primary-400 font-jalnan">
              종료 씨앗이 아직 없네요?
            </Typography>
          </div>
        </li>
      )}
    </>
  );
};

export default SeedEmptyCard;
