import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import { BottomSheet } from '@/components/common/bottomSheet';
import { Typography } from '@/components/common/typography/Typography';
import { CheerEmptyItem } from './CheerEmptyItem';
import { CheerItem } from './CheerItem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CheerUpBottomSheet = ({ isOpen, onClose: closeSheetHandler }: Props) => {
  const { id } = useParams();
  const { data } = useSuspenseQuery(seedOptions.getCheeringUserList(Number(id)));

  return (
    <BottomSheet open={isOpen} onDismiss={closeSheetHandler}>
      <div className="flex flex-col gap-2 px-4 py-4 max-h-[50vh] overflow-y-scroll">
        <div className="flex justify-between items-center">
          <Typography type="heading1">응원해준 친구 목록</Typography>
          {data.cheerCount === 0 || <Typography type="heading3">{data?.cheerCount}명</Typography>}
        </div>

        {data.cheerUsers.length === 0 ? (
          <CheerEmptyItem />
        ) : (
          <>
            {data.cheerUsers.map((user) => (
              <CheerItem cheererInfo={user.cheererInfo} key={user.id} />
            ))}
          </>
        )}
      </div>
    </BottomSheet>
  );
};

export default CheerUpBottomSheet;
