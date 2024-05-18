import { BottomSheet } from '@/components/common/bottomSheet';
import { Typography } from '@/components/common/typography/Typography';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CheerUpBottomSheet = ({ isOpen, onClose: closeSheetHandler }: Props) => {
  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      <div className="flex flex-col gap-2 px-4 py-4">
        <Typography type="heading1">응원해준 친구 목록</Typography>
        <Typography type="heading3" className="text-primary-300">
          기능 준비중
        </Typography>
      </div>
    </BottomSheet>
  );
};

export default CheerUpBottomSheet;
