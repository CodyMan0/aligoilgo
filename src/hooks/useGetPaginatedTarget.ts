import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

import targetAPI from '@/api/target/apis';


const INITIAL_PAGE_NO = 0;
const COMMENT_COUNT_PER_PAGE = 5;

const useFilteringSeed = () => {
  const { data: seeds, fetchNextPage }  =  useSuspenseInfiniteQuery({
    queryKey: ['seed'],
    initialPageParam: { page: INITIAL_PAGE_NO, size: COMMENT_COUNT_PER_PAGE },
    queryFn: ({ pageParam }) =>
      targetAPI.getAllPaginatedTargets({
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

  return { seeds, fetchNextPage}  
};

export default useFilteringSeed;
