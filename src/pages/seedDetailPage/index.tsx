import GuestDetailPage from '@/components/feature/seed/seedDetail/GuestDetailPage';
import UserDetatilPage from '@/components/feature/seed/seedDetail/UserDetatilPage';
import { useSharedStateContext } from '@/context/SharedStateContext';

const SeedDetailPage = () => {
  const { isShared } = useSharedStateContext();
  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6 overflow-hidden">
      {!isShared ? <UserDetatilPage /> : <GuestDetailPage />}
    </div>
  );
};

export default SeedDetailPage;
