import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

import { ToolTip } from '@/components/common/toolTip';
import SeedList from '@/components/target/seedList';
import useAnimationWithTimeout from '@/hooks/useAnimationWithTimeout';
import useFilteringSeed from '@/hooks/useGetPaginatedTarget';
import { SeedSwiper } from './SeedSwiper';

const SEED_PAGE_VALUES = [
  {
    isActive: true,
  },
  {
    isActive: false,
  },
];

const SeedPageBody = () => {
  const { activeSeeds, inactiveSeeds, fetchNextPage } = useFilteringSeed();
  const { controls } = useAnimationWithTimeout();
  const lastTargetElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!lastTargetElementRef.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    });

    io.observe(lastTargetElementRef.current);
    return () => io.disconnect();
  }, [fetchNextPage]);

  return (
    <>
      <SeedSwiper>
        {SEED_PAGE_VALUES.map(({ isActive }, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="pb-4 flex justify-end">
                <AnimatePresence>
                  <ToolTip
                    controls={controls}
                    title={
                      isActive
                        ? `종료 상태의 씨앗은 \n 오른쪽으로 쑝`
                        : `진행중인 씨앗은 \n 왼쪽으로 쑝`
                    }
                  />
                </AnimatePresence>
              </div>
              <SeedList seeds={isActive ? activeSeeds : inactiveSeeds} isActive={isActive} />
            </SwiperSlide>
          );
        })}
      </SeedSwiper>
      <div className="flex justify-center" ref={lastTargetElementRef}></div>
    </>
  );
};

export default SeedPageBody;
