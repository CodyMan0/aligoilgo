import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

import { TOOLTIP_DELAY_SECOND } from '@/constants/contants';

const useAnimationWithTimeout = () => {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({opacity:1});
    const timer = setTimeout(() => {
      controls.start({ opacity: 0 });
    }, TOOLTIP_DELAY_SECOND);

    return () => clearTimeout(timer);
  }, [controls]);
  return {controls};
};

export default useAnimationWithTimeout;