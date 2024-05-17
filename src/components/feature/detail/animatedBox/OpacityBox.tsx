import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

import { useRoutineContext } from '@/context/RoutineContext';

type OpacityBoxProps = {
  children: ReactNode;
};

const ObserverExitEvent = ({ children }: OpacityBoxProps) => {
  const { isRainOpen } = useRoutineContext();

  return <AnimatePresence>{isRainOpen && <>{children}</>}</AnimatePresence>;
};

export default ObserverExitEvent;
