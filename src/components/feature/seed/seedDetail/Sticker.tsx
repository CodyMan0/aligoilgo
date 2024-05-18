import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const Sticker = ({ children }: PropsWithChildren) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition}>
      {children}
    </motion.div>
  );
};

const initial = {
  opacity: 0,
  scale: 0.3,
};

const animate = {
  opacity: 1,
  scale: 1,
};

const transition = {
  duration: 0.1,
  scale: { type: 'spring', damping: 8, stiffness: 100, restDelta: 0.001 },
};
