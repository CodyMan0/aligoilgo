import { useEffect, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';

import SeedList from '@/components/target/seedList';
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
  const { seeds, fetchNextPage } = useFilteringSeed();

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
              <SeedList isActive={isActive} seeds={seeds} />
            </SwiperSlide>
          );
        })}
      </SeedSwiper>
      <div className="flex justify-center" ref={lastTargetElementRef}></div>
    </>
  );
};

export default SeedPageBody;
