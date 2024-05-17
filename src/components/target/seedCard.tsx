import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import FruitsStage from '@/assets/icon/FruitsStage';
import SeedStage from '@/assets/icon/SeedStage';
import StemStage from '@/assets/icon/StemStage';
import TreeStage from '@/assets/icon/TreeStage';
import FruitsDetailStage from '@/assets/images/FruitsDetailStage';
import StemDetailStage from '@/assets/images/StemDetailStage';
import TreeDetailStage from '@/assets/images/TreeDetailStage';
import { cn } from '@/libs/core';
import { PreviewSeedType } from '@/types/target/type';
import { checkActiveDuration } from '@/utils/date';
import { fromNowOf } from '@/utils/fromNowOf';
import { Tag } from '../common/tag';
import { Typography } from '../common/typography/Typography';

const SeedCard = ({ id, seed, seedState, endDate, routineInfos }: PreviewSeedType) => {
  const navigate = useNavigate();
  const isActive = checkActiveDuration(endDate);

  //TODO : startDate으로 정렬 구현!
  //TODO : SeedCard 컴포넌트 컴파운드로 추후 리팩터링
  return (
    <li
      className={cn(
        `flex flex-col w-full min-h-48 rounded-xl border border-gray-100 p-3 cursor-pointer bg-gray-10 `,
        `${!isActive && 'bg-[#EBF0FF] cursor-auto'}`,
      )}
      onClick={() => {
        if (!isActive) return;
        navigate(`/target/${id}`);
      }}
    >
      {/* CARD HEADER */}
      <div className="w-full flex justify-between">
        <Tag variant={isActive ? 'primary' : 'secondary'}>{isActive ? '진행중' : '종료'}</Tag>

        {isActive && (
          <Typography type="section1" className="text-gray-500">
            {fromNowOf(dayjs(endDate))}
          </Typography>
        )}
      </div>

      {/* CARD BODY */}
      <div className="flex w-full h-full py-2">
        <div className="flex flex-col justify-evenly w-[70%]">
          <Typography type="heading2" className="overflow-hidden whitespace-nowrap truncate">
            {seed}
          </Typography>
          <div>
            {routineInfos.map((routine, index) => {
              return (
                <Typography
                  type="section1"
                  className="text-gray-700 overflow-hidden whitespace-nowrap truncate"
                  key={index}
                >
                  {routine.value}
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-evenly ">
          <div className="w-16">{seedStateObj[seedState]}</div>
        </div>
      </div>
      {/* CARD FOOTER */}
    </li>
  );
};

export default SeedCard;

//TODO : 어떻게 처리할지 고민해보자
export const seedStateObj: Record<string, JSX.Element> = {
  SEED: <SeedStage />,
  STEM: <StemStage />,
  TREE: <TreeStage />,
  FRUITS: <FruitsStage />,
};

export const detailSeedStateObj: Record<string, JSX.Element> = {
  SEED: <SeedStage width={192} />,
  STEM: <StemDetailStage width={192} />,
  TREE: <TreeDetailStage width={320} />,
  FRUITS: <FruitsDetailStage width={320} />,
};
