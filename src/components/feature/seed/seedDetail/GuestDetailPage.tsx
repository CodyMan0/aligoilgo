import { useSuspenseQuery } from '@tanstack/react-query';
import { useRef } from 'react';
import { Link, useBeforeUnload, useNavigate, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import ChevronLeft from '@/assets/icon/ChevronLeft';
import Profile from '@/assets/icon/Profile';
import SunIcon from '@/assets/icon/SunIcon';
import Logo from '@/assets/logo/Logo';
import ReversedLogo from '@/assets/logo/ReversedLogo';
import KakaoLoginButton from '@/components/auth/KakaoLoginButton';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import Modal from '@/components/common/modal';
import { Typography } from '@/components/common/typography/Typography';
import { ROUTER_PATHS } from '@/constants/routerPath';
import STORAGE_KEYS from '@/constants/storageKeys';
import { useCheerContext } from '@/context/CheerContext';
import useCheerMutation from '@/hooks/like/useCheerMutation';
import useStateBoolean from '@/hooks/useStateBoolean';
import useToast from '@/hooks/useToast';
import useMusicStore from '@/store/useMusicStore';
import SunBackground from '../../detail/background/SunBackGround';
import CommonSeedDetailBody from './CommonSeedDetailBody';

const GuestDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: seed } = useSuspenseQuery(seedOptions.detailTargetWithoutAuth(Number(id)));
  const toggleMusicPlaying = useMusicStore((s) => s.toggleSunPlaying);
  const isPlaying = useMusicStore((s) => s.isSunPlaying);
  const isMember = !!localStorage.getItem(STORAGE_KEYS.accessToken);
  const { isSunOpen, onSunBgOpen, onSunBgClose } = useCheerContext();
  const { likes } = useCheerMutation(Number(id));
  const toast = useToast();

  const { value: isOpen, on: open, off: close } = useStateBoolean(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // TODO : 중복된 코드이므로 빠르게 기능 확인 후, 리팩터링
  const APP_KEY = import.meta.env.VITE_KAKAO_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}${ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO}`;

  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${APP_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // TODO : beforunload에 대해 정확히 학습한 후, 리팩터링
  useBeforeUnload(() => {
    if (!isPlaying) return;
    toggleMusicPlaying();
    onSunBgClose();
  });

  const onClickHandler = async () => {
    if (isPlaying) return;
    try {
      await likes();
      toggleMusicPlaying();
      onSunBgOpen();
      setTimeout(() => {
        toggleMusicPlaying();
        onSunBgClose();
      }, 5000);
    } catch {
      open();
      toast({ type: 'default', message: '로그인 후 응원할 수 있어요' });
    }
  };

  console.log('backgroundRef.current', backgroundRef.current);
  return (
    <>
      <Header>
        {isMember ? (
          <Button variant="empty" onClick={() => navigate(ROUTER_PATHS.TARGET)}>
            <ChevronLeft width={20} height={20} color="white" />
          </Button>
        ) : (
          <Header.Logo />
        )}
        <Link to={isMember ? '/mypage' : '/'}>
          <Profile width={32} />
        </Link>
      </Header>

      <CommonSeedDetailBody seed={seed} />
      <div className="absolute bottom-5 text-xl w-full text-white">
        <div className="flex flex-col justify-center items-center ">
          <Typography type="heading3">친구의 씨앗 응원하기</Typography>
          <div className="flex size-[60px] justify-center gap-3 mt-3">
            <Button
              width="full"
              onClick={onClickHandler}
              Icon={<SunIcon width={60} height={60} />}
              iconOnly
              className="rounded-[100%] bg-gray-10"
            />
          </div>
        </div>
      </div>
      <Modal close={close} isOpen={isOpen}>
        <section className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10  bg-[rgb(0 0 0 / 0.6)]">
          <div
            ref={backgroundRef}
            onClick={(e) => e.currentTarget === backgroundRef.current && close()}
            className="relative w-[360px] h-full bg-gray-10 min-h-64 rounded-2xl border shadow-thumb p-4 cursor-pointer"
          >
            <div className="flex flex-col items-center gap-1">
              <Typography type="title1" className="font-jalnan text-gray-800">
                씨앗 모아
              </Typography>
              <div className="flex flex-col items-center">
                <Typography type="heading4" className="text-gray-800 text-center">
                  {`심는대로 거두는 \n 놀라운 경험을`}
                </Typography>
              </div>

              <div className="w-full flex justify-center items-center gap-8">
                <Logo width={120} />
                <ReversedLogo width={120} />
              </div>
            </div>

            <KakaoLoginButton href={KAKAO_AUTH_URI} />
          </div>
        </section>
      </Modal>

      <SunBackground isOpen={isSunOpen} />
    </>
  );
};

export default GuestDetailPage;
