import React, { forwardRef } from 'react';

import SvgKakaoLogo from '@/assets/logo/KakaoLogo';

interface KakaoLoginButtonProps extends React.ComponentProps<'a'> {}

const KakaoLoginButton = forwardRef<HTMLAnchorElement, KakaoLoginButtonProps>(
  ({ children = '3초만에 카카오 로그인', ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className="relative flex justify-center items-center w-full text-md font-bold mt-5 hover:opacity-80 rounded-xl border-none px-4 py-5 bg-[#fee500] cursor-pointer"
      >
        <SvgKakaoLogo className="absolute left-0 ml-5" />
        {children}
      </a>
    );
  },
);

KakaoLoginButton.displayName = 'Button';

export default KakaoLoginButton;
