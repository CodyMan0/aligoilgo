import Profile from '@/assets/icon/Profile';
import SunIcon from '@/assets/icon/SunIcon';
import { Typography } from '@/components/common/typography/Typography';

export const CheerEmptyItem = () => {
  return (
    <div className="flex gap-4xs justify-center items-center">
      <Profile width={32} color="#52681D" />

      <div className="w-full flex flex-col justify-between ml-4">
        <div className="w-full flex justify-between">
          <div className="flex gap-6xs items-center">
            <Typography type="heading3">친구에게 씨앗을 공유해보세요</Typography>
          </div>
        </div>
      </div>
      <SunIcon width={80} />
    </div>
  );
};
