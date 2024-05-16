import { Suspense, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LinkIcon from '@/assets/icon/Link';
import TrashIcon from '@/assets/icon/TrashIcon';
import Button from '@/components/common/button/Button';
import Header from '@/components/common/header/Header';
import { Spinner } from '@/components/common/spinner/Spinner';
import { Typography } from '@/components/common/typography/Typography';
import useBottomSheetState from '@/hooks/useBottomSheetState';
import useDeleteSeedMutation from '@/hooks/useDeleteSeedMutation';
import useToast from '@/hooks/useToast';
import { shareLink } from '@/utils/share';
import ConfirmBottomSheet from '../../detail/ConfirmBottomSheet';
import RainBackGround from '../../detail/RainBackGround';
import SeedDetailPageBody from './SeedDetailPageBody';

type BottomSheetType = 'askDelete';

const UserDetatilPage = () => {
  const isShared = false;
  const { id } = useParams();
  const { onOpenSheet, openedSheet, onCloseSheet } = useBottomSheetState<BottomSheetType>();
  const [isDeleted, setIsDeleted] = useState(false);
  const navigate = useNavigate();
  const { mutate } = useDeleteSeedMutation();
  const toast = useToast();

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

      <Suspense
        fallback={
          <div className="flex justify-center">
            <Spinner />
          </div>
        }
      >
        {/* //TODO : isShared에 따라 컴포넌트 UI 및 기능 변경에 대해 처리 방법 고민 */}
        <SeedDetailPageBody seedId={Number(id)} isDeleted={isDeleted} isShared={isShared} />
      </Suspense>

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
              navigate('/target');
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
