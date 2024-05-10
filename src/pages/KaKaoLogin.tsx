import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import useAuth from '@/hooks/auth/useAuth';

const KakaoLoginPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code') as string;
  const { login } = useAuth();

  useEffect(() => {
    login(code);
  }, [code, login]);

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
