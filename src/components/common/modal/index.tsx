import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  /** 모달이 열려있는지 여부입니다. */
  isOpen: boolean;
  /** 모달을 닫을 때 호출되는 함수입니다. */
  close: () => void;
  /** 모달 컨텐츠 영역에 보여줄 컨텐츠입니다. */
  children: React.ReactNode;
}

const Modal = ({ isOpen, close, children }: ModalProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          ref={containerRef}
          onClick={(e) => e.target === containerRef.current && close()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>{children}</div>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;

// const styles = {
//   container: css`
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 2;
//     width: 100%;
//     min-height: 100%;
//     background-color: rgb(0 0 0 / 0.6);
//   `,
//   content: css`
//     max-width: 600px;
//     margin: 0 auto;
//   `,
// };
