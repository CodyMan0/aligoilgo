import { useState } from 'react';

import SunIcon from '@/assets/icon/SunIcon';
import Button from '@/components/common/button/Button';
import { Typography } from '@/components/common/typography/Typography';
import useMusicStore from '@/store/useMusicStore';
import SunBackground from '../../detail/background/SunBackGround';
import { detailSeedStateObj } from '../../seed/SeedCard';

const OnboardingSun = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isPlaying = useMusicStore((s) => s.isSunPlaying);
  const toggleMusicPlaying = useMusicStore((s) => s.toggleSunPlaying);

  const onClickHandler = async () => {
    if (isPlaying) return;

    toggleMusicPlaying();
    setIsOpen(true);
    setTimeout(() => {
      toggleMusicPlaying();
      setIsOpen(false);
    }, 5000);
  };

  return (
    <section>
      <div className="mt-20 flex justify-center items-center">{detailSeedStateObj.SEED}</div>

      <div className="absolute bottom-20 text-xl w-[92%] text-white">
        <div className="flex flex-col justify-center items-center ">
          <Typography type="heading3">친구의 씨앗 응원하기</Typography>
          <div className=" flex size-[60px] justify-center gap-3 mt-3">
            <Button
              width="full"
              onClick={onClickHandler}
              Icon={<SunIcon width={60} height={60} />}
              iconOnly
              className="rounded-[100%] bg-gray-10"
            />
          </div>
        </div>
      </div>
      <SunBackground isOpen={isOpen} />
    </section>
  );
};

export default OnboardingSun;
