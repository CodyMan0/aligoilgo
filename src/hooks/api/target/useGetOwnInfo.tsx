import { useSuspenseQuery } from '@tanstack/react-query';

import seedOptions from '@/api/seed/queryOptions';
import { SeedStateType } from '@/types/target/type';

const useGetOwnInfo = () => {
  const { data: myInfo } = useSuspenseQuery(seedOptions.getMyInfo());
  const sortedStatistics: Record<SeedStateType, number> = {
    SEED: 0,
    STEM: 0,
    TREE: 0,
    FRUITS: 0,
  };

  myInfo.stateStatisticsList.forEach(
    (statistic) => (sortedStatistics[statistic.state] = statistic.stateCount),
  );
  return { myInfo, sortedStatistics };
};

export default useGetOwnInfo;
