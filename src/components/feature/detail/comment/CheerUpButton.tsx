import type { ButtonHTMLAttributes } from 'react';

import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';

interface CheerUpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onOpen: VoidFunction;
}

export const CheerUpButton = ({ onOpen, ...props }: CheerUpButtonProps) => {
  const handleOpenComments = () => {
    // open(({ isOpen, close }) => <CommentsBottomSheet open={isOpen} onClose={close} goalId={targetGoalId} />);
    onOpen();
  };

  return (
    <Button className="items-center bg-gray-10" onClick={handleOpenComments} {...props}>
      <SunIcon width={30} height={30} />
      <Typography type="section1" className="text-gray-40">
        {/* {numberOfComments > 0 ? `${numberOfComments}개의 댓글` : '댓글 작성하기'} */}
      </Typography>
    </Button>
  );
};
