export const API_PATHS = {
  USER_INFO: '/api/init',

  AUTH_LOGIN_KAKAO: '/api/auth/kakao',
  AUTH_REISSUE: '/api/auth/reissue',

  All_TARGET: '/api/seed',
  SEED_DETAIL: (seedId: number) => `/api/seed/${seedId}`,
  SEED_DETAIL_NO_CREDENTIAL: (seedId: number) => `/api/seed/share/${seedId}`,
  SEED_DETAIL_ROUTINE_DONE: (routineId: number) => `/api/seed/routine/end/${routineId}`,
  SEED_DETAIL_ROUTINE_TITLE: (routineId: number) => `/api/seed/routine/${routineId}`,
  SEED_DELETE: (seedId: number) => `/api/seed/${seedId}`,
  SEED_LIKE: (seedId: number) => `/api/seed/${seedId}/cheer`,
  CREATE_SEED: '/api/seed',

  SEED_MINE: '/api/seed/my',

  MEMBER_SIGN_OUT: '/api/auth',
} as const;

export const ROUTER_PATHS = {
  ROOT: '/',
  SIGNIN_REDIRECT_KAKAO: '/kakao',
  TAGET_DETAIL: `/seed/:id`,
  TARGET: '/seed',
  CREATE_TARGET: '/seed/create',
  MYPAGE: '/mypage',
  ONBOARDING: '/onboarding',
} as const;
