import { useSuspenseQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import seedOptions from '@/api/seed/queryOptions';
import LinkIcon from '@/assets/icon/Link';
import TrashIcon from '@/assets/icon/TrashIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';
import useBottomSheetState from '@/hooks/useBottomSheetState';
import useDeleteSeedMutation from '@/hooks/useDeleteSeedMutation';
import useToast from '@/hooks/useToast';
import { shareLink } from '@/utils/share';
import ConfirmBottomSheet from '../../detail/ConfirmBottomSheet';
import RainBackGround from '../../detail/RainBackGround';
import CommonSeedDetailBody from './CommonSeedDetailBody';

type BottomSheetType = 'askDelete';

const UserDetatilPage = () => {
  const { id } = useParams();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();

  const navigate = useNavigate();
  const { mutate } = useDeleteSeedMutation();
  const toast = useToast();
  //씨앗 삭제 후 해당 상태를 기반으로 mutate으로 인한 리렌더링때 호출을 보내지 않도록 하기 위한 상태
  const [isDeleted, setIsDeleted] = useState(false);
  const { data: seed } = useSuspenseQuery(seedOptions.detailTarget(Number(id), !isDeleted));

  const handleCopyClipboard = async () => {
    try {
      await shareLink({ url: `${location.href}?share=true` });
      toast({ message: 'LINK_COPIED' });
    } catch (error) {
      toast({ message: 'LINK_COPIED_FAIL' });
    }
  };
  return (
    <>
      <Header>
        <Header.Previous />
        <button onClick={() => onOpenSheet('askDelete')}>
          <TrashIcon width={32} color="#fff" />
        </button>
      </Header>

      <CommonSeedDetailBody seed={seed} />

      <ConfirmBottomSheet
        isOpen={openedSheet === 'askDelete'}
        onClose={onCloseSheet}
        title="씨앗을 삭제하시겠어요?"
        description="씨앗을 삭제하면 되돌릴 수 없어요."
        PrimaryButton={
          <Button
            width="full"
            className="h-[52px]"
            onClick={() => {
              // 선 씨앗 체크 API
              mutate(Number(id));
              setIsDeleted(true);
              navigate('/seed');
            }}
          >
            확인
          </Button>
        }
        SecondaryButton={
          <Button variant="secondary" width="full" onClick={() => onCloseSheet()}>
            취소
          </Button>
        }
      />
      <div className="absolute bottom-5 text-xl w-full text-white">
        <div className="flex flex-col justify-center items-center ">
          <Typography type="heading3">키우고 있는 씨앗 공유하기</Typography>
          <div className="flex size-[52px] justify-center gap-3 mt-3">
            <Button
              onClick={handleCopyClipboard}
              width="full"
              Icon={<LinkIcon width={20} height={20} />}
              iconOnly
              className="rounded-[100%] bg-gray-600"
            />
          </div>
        </div>
      </div>
      <RainBackGround />
    </>
  );
};

export default UserDetatilPage;
