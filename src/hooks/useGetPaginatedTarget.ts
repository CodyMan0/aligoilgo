import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import seedAPI from '@/api/seed/apis';
import { PreviewSeedType } from '@/types/target/type';
import { checkActiveDuration } from '@/utils/date';


const INITIAL_PAGE_NO = 0;
const COMMENT_COUNT_PER_PAGE = 5;

const useFilteringSeed = () => {
  const { data: seeds, fetchNextPage }  =  useSuspenseInfiniteQuery({
    queryKey: ['seed'],
    initialPageParam: { page: INITIAL_PAGE_NO, size: COMMENT_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      seedAPI.getAllPaginatedTargets({
        page: pageParam.page,
        size: pageParam.size,
      }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const hasNextPage = lastPage.pages.hasNext;
      if (hasNextPage) {
        return {
          page: lastPageParam.page + 1,
          size: lastPageParam.size,
        };
      }
      return null;
    },

    select: (data) => (data.pages ? data.pages.map((page) => page.seedInfo).flat() : []),
  });


  //** 필터를 통해 진행중인 씨앗 목록과 종료한 씨앗 목록 반환하는 로직 */
  const {
    activeSeeds,
    inactiveSeeds,
  }:
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { activeSeeds: PreviewSeedType[]; inactiveSeeds: PreviewSeedType[] } = seeds.reduce<any>(
    (acc, seed) => {
      const isDurationState = checkActiveDuration(seed.endDate);
      if (isDurationState) {
        acc.activeSeeds.push(seed);
      } else {
        acc.inactiveSeeds.push(seed);
      }
      return acc;
    },
    { activeSeeds: [], inactiveSeeds: [] },
  );


  return { activeSeeds,inactiveSeeds, fetchNextPage}  
};

export default useFilteringSeed;
