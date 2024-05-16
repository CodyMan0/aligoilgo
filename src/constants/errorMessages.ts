const ERROR_RESPONSES = {
    unknown: '알 수 없는 오류가 발생했습니다.',
    authenticationEntryPoint: '로그인이 필요한 요청입니다.',
    accessExpired: "액세스 토큰이 만료되었습니다.",
    reissueFailed: '리프레시 토큰이 올바르지 않습니다. 다시 로그인해주세요.',
  } as const;
  
export default ERROR_RESPONSES;

