import { useSuspenseQuery } from '@tanstack/react-query';

import targetOptions from '@/api/target/queryOptions';
import { Tag } from '@/components/common/tag';
import { ToolTip } from '@/components/common/toolTip';
import { Typography } from '@/components/common/typography/Typography';
import { detailSeedStateObj } from '@/components/target/\bseedCard';
import { getDateFromDiff } from '@/utils/date';
import ObserverExitEvent from '../../detail/animatedBox/OpacityBox';
import TaskList from '../../detail/TaskList';

type DetailProps = {
  seedId: number;
  isDeleted: boolean;
  isShared: boolean;
};

const SeedDetailPageBody = ({ seedId, isDeleted, isShared }: DetailProps) => {
  const { data: seed } = useSuspenseQuery(targetOptions.detailTarget(Number(seedId), !isDeleted));
  const totalRoutineCount =
    getDateFromDiff(seed.endDate, seed.startDate) * seed.routineDetails.length;
  return (
    <>
      <Typography type="heading1" className="pointer-events-none text-white text-left w-full">
        {seed.seed}
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

          <div>{detailSeedStateObj[seed.seedState]}</div>
        </div>
        <TaskList tasks={seed.routineDetails} isShared={isShared} />
      </div>
    </>
  );
};

export default SeedDetailPageBody;
