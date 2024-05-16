import { Link } from 'react-router-dom';

import Profile from '@/assets/icon/Profile';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';

const GuestDetailPage = () => {
  return (
    <>
      <Header>
        <Header.Logo />
        <Link to={'/'}>
          <Profile width={32} />
        </Link>
      </Header>
      <Typography className="font-jalnan text-gray-10">API 기다리는 중</Typography>
    </>
  );
};

export default GuestDetailPage;
