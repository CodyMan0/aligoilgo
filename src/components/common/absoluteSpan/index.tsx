import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type RainProps = {
  position: { x: string; y: string };
  children: ReactNode;
};

const AbsoluteSpan = ({ position, children }: RainProps) => {
  return (
    <motion.span
      className={`absolute ${position.x} ${position.y}`}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      animate={{
        x: 0,
        y: 100,
        height: '100%',
      }}
    >
      {children}
    </motion.span>
  );
};

export default AbsoluteSpan;
