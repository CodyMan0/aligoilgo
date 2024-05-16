import { useLocation } from 'react-router-dom';

import GuestDetailPage from '@/components/feature/seed/seedDetail/GuestDetailPage';
import UserDetatilPage from '@/components/feature/seed/seedDetail/UserDetatilPage';

const SeedDetailPage = () => {
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);

  //TODO: 공유를 통해 들어온 유저 분별하는 로직 깔끔하게 분리하는 방법 찾아보자
  //THINKING: 공유로 들어온 사람을 로컬 스토리지에 이름이 있는지 없는지를 파악해서 판별하면 어떨까?!
  const shareValue = searchParams.get('share');
  const isShared = typeof shareValue === 'string' ? true : false;

  return (
    <div className="relative flex flex-col items-center w-full h-dvh px-6 overflow-hidden">
      {!isShared ? <UserDetatilPage /> : <GuestDetailPage />}
    </div>
  );
};

export default SeedDetailPage;
