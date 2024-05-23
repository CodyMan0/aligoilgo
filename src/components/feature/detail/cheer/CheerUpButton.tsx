import type { ButtonHTMLAttributes } from 'react';

import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';

interface CheerUpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOpen: VoidFunction;
}

export const CheerUpButton = ({ onOpen, ...props }: CheerUpButtonProps) => {
  return (
    <Button className="items-center bg-gray-10" onClick={onOpen} {...props}>
      <SunIcon width={30} height={30} />
    </Button>
  );
};
