import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import { ROUTER_PATHS } from '@/constants/routerPath';
import useAuth from '@/hooks/auth/useAuth';

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code') as string;
  const { isLoggedIn, login } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      login(code);
    } else {
      navigate(ROUTER_PATHS.TARGET);
    }
  }, [isLoggedIn, code, login, navigate]);

  return (
    <section className="flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col items-center justify-center">
        <Typography type="heading1" className="text-white mb-4">
          LOADING...
        </Typography>
        <Spinner color="text-white" />
      </div>
    </section>
  );
};

export default KakaoLoginPage;
