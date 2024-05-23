import { queryOptions } from '@tanstack/react-query';

import commonAPI from '@/api/common/apis';
import { GetAllPaginatedTargetRequest } from '@/types/target/type';
import seedAPI from './apis';

const seedOptions = {
  all: ['seed'] as const,

  targets: ({ page, size }: GetAllPaginatedTargetRequest) =>
    queryOptions({
      queryKey: [...seedOptions.all] as const,
      queryFn: () => seedAPI.getAllPaginatedTargets({ page, size }),
    }),
  detailTarget: (seedId: number, callQueryFn?: boolean) => {
    return queryOptions({
      queryKey: [...seedOptions.all, seedId] as const,
      queryFn: callQueryFn ? () => seedAPI.getSeedDetails(seedId) : undefined,
    });
  },

  totalInfo: () =>
    queryOptions({
      queryKey: ['total'],
      queryFn: commonAPI.getUserStatus,
    }),

  getMyInfo: () =>
    queryOptions({
      queryKey: ['my'],
      queryFn: seedAPI.getMyInfo,
    }),
  detailTargetWithoutAuth: (seedId: number) => {
    return queryOptions({
      queryKey: [...seedOptions.all, seedId, 'guest'] as const,
      queryFn: () => seedAPI.getDetailSeedAsGuest(seedId),
    });
  },

  /** 응원한 유저 정보 조회 */
  getCheeringUserList: (seedId: number) => {
    return queryOptions({
      queryKey: [...seedOptions.all, seedId, 'cheer'] as const,
      queryFn: () => seedAPI.getSeedLikesUserList(seedId),
    });
  },
};

export default seedOptions;
