import type { PropsWithChildren } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const settings = {
  slidesPerView: 1,
  pagination: { clickable: true },
  spaceBetween: 50,
  module: [Pagination],
};

export const SeedSwiper = ({ children }: PropsWithChildren) => {
  return (
    <Swiper {...settings} className="w-full" autoHeight>
      {children}
    </Swiper>
  );
};
