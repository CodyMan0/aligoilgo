export const API_PATHS = {
  USER_INFO: '/api/init',

  AUTH_LOGIN_KAKAO: '/api/auth/kakao',
  AUTH_REISSUE: '/api/auth/reissue',

  All_TARGET: '/api/seed',
  SEED_DETAIL: (seedId: number) => `/api/seed/${seedId}`,
  SEED_DETAIL_ROUTINE_DONE: (routineId: number) => `/api/seed/routine/end/${routineId}`,
  SEED_DETAIL_ROUTINE_TITLE: (routineId: number) => `/api/seed/routine/${routineId}`,
  SEED_DELETE: (seedId: number) => `/api/seed/${seedId}`,
  CREATE_SEED: '/api/seed',
  TARGET_SUBGOAL: 'target/update',

  SEED_MINE: '/api/seed/my',
} as const;

export const ROUTER_PATHS = {
  ROOT: '/',
  TEST_CONSTANT: '/test/const',
  MODAL_TEST: '/modal-test',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  SIGNIN_REDIRECT_KAKAO: '/kakao',
  TAGET_DETAIL: `/target/:id`,
  TARGET: '/target',
  CREATE_TARGET: '/target/create',
  MYPAGE: '/mypage',
} as const;
