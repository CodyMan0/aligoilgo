import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import Button from '@/components/common/button/Button';
import { Lottie } from '@/components/common/lottie';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { OnboardingLayout } from '../onboardingLayout';
import type { OnboardingLayoutProps } from '../onboardingLayout/onboardingLayout';
import OnboardingRain from '../OnboardingRain';
import OnboardingSeedCard from '../OnboardingSeedCard';
import OnboardingSun from '../OnboardingSun';
import { OnboardingSwiper } from '../onboardingSwiper';

const ONBOARDING_VALUES: OnboardingLayoutProps[] = [
  {
    title: '씨앗 모아는 \n 작은 성취를 쌓아 \n 큰 성취를 얻길 원해요',
    content: <Lottie src="/lottie/growSeed.json" />,
  },
  {
    title: '목표를 위해 \n 씨앗을 심어봐요 ',
    content: <OnboardingSeedCard />,
  },
  {
    title: '물을 줘서 \n 씨앗을 키워봐요',
    content: <OnboardingRain />,
  },
  {
    title: '친구들의 씨앗도 \n  응원할 수 있다니  \n  이거 완전 럭키비키자낭!',
    content: <OnboardingSun />,
  },
  {
    title: '씨앗 모아는 \n결실을 맺을\n 여러분을 응원해요',
    content: (
      <div className="relative">
        <Lottie src="/lottie/growSeed.json" />
        <div className="absolute top-0">
          <Lottie src="/lottie/bless.json" />
        </div>
      </div>
    ),
  },
  // 열매 추가
];

export const OnboardingBody = () => {
  const prevPath = sessionStorage.getItem('savedPathBeforeLogin');
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (prevPath?.startsWith('/') && prevPath !== '/') {
      console.log('실행');
      navigate(prevPath);
      sessionStorage.removeItem('savedPathBeforeLogin');
      return;
    } else {
      navigate(ROUTER_PATHS.TARGET);
    }
  };

  return (
    <div className="w-full h-full flex flex-col pt-[68px]">
      <div className="h-full">
        <OnboardingSwiper>
          {ONBOARDING_VALUES.map(({ title, content }, index) => (
            <SwiperSlide key={index}>
              <OnboardingLayout title={title} content={content} />
            </SwiperSlide>
          ))}
        </OnboardingSwiper>
      </div>

      <Button
        width="full"
        variant="secondary"
        className={`w-full h-16 bg-none`}
        onClick={onClickHandler}
      >
        시작하기
      </Button>
    </div>
  );
};
