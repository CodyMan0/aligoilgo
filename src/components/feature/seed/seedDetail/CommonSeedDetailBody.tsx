import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';
import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import useToast from '@/hooks/useToast';
import { DetailSeedType } from '@/types/target/type';
import { getDateFromDiff } from '@/utils/date';
import ObserverExitEvent from '../../detail/animatedBox/OpacityBox';
import TaskList from '../../detail/TaskList';
import { detailSeedStateObj } from '../SeedCard';
import { Sticker } from './Sticker';

type CommonSeedDetailBodyType = {
  seed: DetailSeedType;
};

/** 유저와 게스트 공통으로 사용하는 컴포넌트 */
const CommonSeedDetailBody = ({ seed }: CommonSeedDetailBodyType) => {
  const toast = useToast();
  const totalRoutineCount =
    getDateFromDiff(seed.endDate, seed.startDate) * seed.routineDetails.length;

  return (
    <>
      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        {seed.seedName}
      </Typography>

      <div className="flex flex-col w-full h-full">
        <div className=" h-[50%] flex flex-col justify-center items-center">
          <div className="relative flex w-full justify-end">
            <Tag>{`${seed.completedRoutineCount}/${totalRoutineCount}`}</Tag>
            <div className="absolute w-full justify-end flex -top-14 -right-3">
              <ObserverExitEvent>
                <ToolTip title={`${totalRoutineCount - seed.completedRoutineCount}번만 더!`} />
              </ObserverExitEvent>
            </div>
          </div>
          <Sticker>{detailSeedStateObj[seed.seedState]}</Sticker>

          <div className="flex w-full justify-end">
            <Sticker>
              <Button
                className="bg-gray-10"
                onClick={() => {
                  toast({
                    type: 'default',
                    message: '응원해준 친구을 볼 수 있는 기능 준비중입니다!',
                  });
                }}
              >
                <SunIcon width={30} height={30} />
              </Button>
            </Sticker>
          </div>
        </div>
        {/* //TODO : 좋아요 UI 표현 고민해보자 */}
        <TaskList tasks={seed.routineDetails} />
      </div>
    </>
  );
};

export default CommonSeedDetailBody;
