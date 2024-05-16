import { Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Add from '@/assets/icon/Add';
import Profile from '@/assets/icon/Profile';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import SeedPageBody from '@/components/feature/seed/SeedPageBody';
import { ROUTER_PATHS } from '@/constants/routerPath';

const SeedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col px-6 pb-10 h-dvh no-scrollbar scroll-smooth overflow-y-auto">
      <Header>
        <Header.Logo />
        <Link to={'/mypage'}>
          <Profile width={32} />
        </Link>
      </Header>
      <div className="flex-1">
        <h1 className="pointer-events-none mb-8 text-white">
          <Typography type="heading1">{`땅에 씨앗을 심고 \n 열매를 맺어봐요.`}</Typography>
        </h1>
        <Suspense
          fallback={
            <div className="flex justify-center">
              <Spinner />
            </div>
          }
        >
          <SeedPageBody />
        </Suspense>
      </div>
      <div className="sticky bottom-5 z-20 flex flex-col items-end pr-3xs">
        <Button
          onClick={() => navigate(ROUTER_PATHS.CREATE_TARGET)}
          variant="accent"
          Icon={<Add width={20} height={20} />}
          iconOnly
          className="size-[56px] w-xl rounded-[100%] bg-main"
        />
      </div>
    </div>
  );
};

export default SeedPage;
