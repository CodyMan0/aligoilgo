import dayjs from 'dayjs';
import { createContext, HTMLAttributes, useContext } from 'react';

import CloseIcon from '@/assets/icon/CloseIcon';
import FruitsStage from '@/assets/icon/FruitsStage';
import SeedStage from '@/assets/icon/SeedStage';
import StemStage from '@/assets/icon/StemStage';
import SunIcon from '@/assets/icon/SunIcon';
import TreeStage from '@/assets/icon/TreeStage';
import FruitsDetailStage from '@/assets/images/FruitsDetailStage';
import StemDetailStage from '@/assets/images/StemDetailStage';
import TreeDetailStage from '@/assets/images/TreeDetailStage';
import { Tag } from '@/components/common/tag';
import { Typography } from '@/components/common/typography/Typography';
import { cn } from '@/libs/core';
import { PreviewSeedType } from '@/types/target/type';
import { fromNowOf } from '@/utils/fromNowOf';
import { seedCardVariant } from './index.variant';

export type SeedCardMode = 'active' | 'inactive';
const SeedCardContext = createContext<SeedCardMode>('active');

const SeedCard = ({
  mode,
  children,
  className,
  ...props
}: { mode: SeedCardMode } & HTMLAttributes<HTMLLIElement>) => {
  return (
    <SeedCardContext.Provider value={mode}>
      <li className={cn(seedCardVariant({ mode, className }))} {...props}>
        {children}
      </li>
    </SeedCardContext.Provider>
  );
};

/**
 * @description SeedCard Header에서 텍스트를 표현하기 위한 컴포넌트
 */
const Header = ({
  endDate,
  className,
  ...props
}: { endDate: string } & HTMLAttributes<HTMLSpanElement>) => {
  const mode = useContext(SeedCardContext);

  return (
    <div className={cn('w-full flex justify-between', className)} {...props}>
      <Tag variant={mode === 'active' ? 'primary' : 'secondary'}>
        {mode === 'active' ? '진행중' : '종료'}
      </Tag>

      {mode === 'active' && (
        <Typography type="section1" className="text-gray-500">
          {fromNowOf(dayjs(endDate))}
        </Typography>
      )}
    </div>
  );
};

/**
 * @description SeedCard Body UI를 표현하기 위한 컴포넌트
 */
const Body = ({
  seedName,
  routineInfos,
  seedState,
  className,
  ...props
}: Pick<PreviewSeedType, 'seedName' | 'routineInfos' | 'seedState'> &
  HTMLAttributes<HTMLSpanElement>) => {
  return (
    <div className={cn(`flex w-full h-full py-2`, className)} {...props}>
      <div className="flex flex-col justify-evenly w-[70%]">
        <Typography type="heading2" className="overflow-hidden whitespace-nowrap truncate">
          {seedName}
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
  );
};

/**
 * @description SeedCard 백그라운드 이미지를 위한 컴포넌트 추후 여러 애니메이션 기능 추가 예정
 */
const Background = ({ className, ...props }: HTMLAttributes<HTMLSpanElement>) => {
  const mode = useContext(SeedCardContext);
  return (
    <>
      {mode === 'inactive' ? (
        <div
          className={cn(
            `absolute w-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`,
            className,
          )}
          {...props}
        >
          <CloseIcon width={100} />
        </div>
      ) : null}
    </>
  );
};

/**
 * @description SeedCard 푸터로 좋아요 및 확장 가능한 슬롯 컴포넌트
 */
const Footer = ({
  likes,
  className,
  ...props
}: { likes?: number } & HTMLAttributes<HTMLSpanElement>) => {
  // const mode = useContext(SeedCardContext);

  // TODO (study) : Absolute 사용시 상위 엘리먼트의 width를 padding 크기를 포함하지 않고 거져오는 문제 정확히 알기
  return (
    <div className={cn('absolute bottom-0 w-[93%] flex justify-between', className)} {...props}>
      <div></div>
      <div className="flex justify-center items-center">
        <SunIcon width={50} />
        <Typography type="section1">{likes || 0}</Typography>
      </div>
    </div>
  );
};

export default Object.assign(SeedCard, { Header, Background, Body, Footer });

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
