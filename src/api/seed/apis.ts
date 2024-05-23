import { API_PATHS } from '@/constants/routerPath';
import { authInstance, baseInstance } from '@/libs/api';
import {
  DetailSeedType,
  GetAllPaginatedTargetRequest,
  SeedPaginatedResponseType,
  SeedResponseType,
} from '@/types/target/type';
import { CheerUserResponseType, OwnSeedType } from '@/types/user/type';

const seedAPI = {
  /** 모든 목표 페이지 네이션 전체 조회 */
  getAllPaginatedTargets: async ({ page, size }: GetAllPaginatedTargetRequest) => {
    const { data } = await authInstance.get<SeedPaginatedResponseType>(API_PATHS.All_TARGET, {
      params: { page, size },
    });
    return data;
  },

  /** 상세 씨앗 정보 조회 */
  getSeedDetails: async (seedId: number) => {
    const { data } = await authInstance.get<DetailSeedType>(API_PATHS.SEED_DETAIL(seedId));
    return data;
  },

  /** 씨앗 생성 */
  postSeed: async ({ seed, routines, endDate }: SeedResponseType) => {
    const { data } = await authInstance.post(API_PATHS.CREATE_SEED, {
      seed,
      routines,
      endDate,
    });
    return data;
  },

  /** 마이 페이지에 보일 데이터 조회 */
  getMyInfo: async () => {
    const { data } = await authInstance.get<OwnSeedType>(API_PATHS.SEED_MINE);
    return data;
  },

  /** 씨앗 삭제 */
  deleteSeed: async (seeedId: number) => {
    const { data } = await authInstance.delete(API_PATHS.SEED_DELETE(seeedId));
    return data;
  },

  /** 루틴 완료 상태 수정 */
  patchRoutineDone: async (routineId: number) => {
    const { data } = await authInstance.patch(API_PATHS.SEED_DETAIL_ROUTINE_DONE(routineId));
    return data;
  },

  /** 루틴 내용 수정 */
  patchRoutineTitle: async (routineId: number, routineTitle: string) => {
    const { data } = await authInstance.patch(API_PATHS.SEED_DETAIL_ROUTINE_TITLE(routineId), {
      routineTitle,
    });
    return data;
  },

  /** 공유시 사용할 유저 정보 없이 상세 씨앗 정보 조회 */
  getDetailSeedAsGuest: async (seedId: number) => {
    const { data } = await baseInstance.get<DetailSeedType>(
      API_PATHS.SEED_DETAIL_NO_CREDENTIAL(seedId),
    );
    return data;
  },

  /** 좋아요 (응원하기) 생성 */
  patchSeedLikes: async (seedId: number) => {
    const { data } = await authInstance.patch(API_PATHS.SEED_LIKE(seedId));
    return data;
  },

    /** 응원한 친구 목록 요청 */
  getSeedLikesUserList: async (seedId: number) => {
      const { data } = await authInstance.get<CheerUserResponseType>(API_PATHS.SEED_LIKE(seedId));
      return data;
    },
};

export default seedAPI;
