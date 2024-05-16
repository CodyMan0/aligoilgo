import { Link } from 'react-router-dom';

import ChevronRight from '@/assets/icon/ChevronRight';
import FruitsStage from '@/assets/icon/FruitsStage';
import SeedStage from '@/assets/icon/SeedStage';
import StemStage from '@/assets/icon/StemStage';
import TreeStage from '@/assets/icon/TreeStage';
import Header from '@/components/common/header/Header';
import { Typography } from '@/components/common/typography/Typography';
import UserProfile from '@/components/feature/my/userProfile/UserProfile';
import { USER_FEEDBACK_GOOGLE_FORM_URL } from '@/constants/extarnelUrl';
import useGetOwnInfo from '@/hooks/api/target/useGetOwnInfo';
import useAuth from '@/hooks/auth/useAuth';

const Mypage = () => {
  const { myInfo, sortedStatistics } = useGetOwnInfo();
  const { logout } = useAuth();

  return (
    <div className="relative flex flex-col px-6 h-dvh">
      <Header>
        <Header.Previous />
        <Typography type="heading1" className="text-white">
          마이페이지
        </Typography>
        <p></p>
      </Header>
      <UserProfile name={myInfo.name} email={myInfo.email} />
      <div className="flex justify-center w-full ">
        <div className="flex flex-col w-full mt-4 px-4 py-2 bg-white rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)] divide-y">
          <div className="w-full h-[48px] flex gap-[36px] items-center justify-center">
            <Typography type="heading3" className="text-gray-800">
              내가 심은 씨앗 현황
            </Typography>
          </div>
          <div className="flex">
            <div className="flex-1 flex flex-col items-center pt-4 gap-2">
              <div className="w-12 h-12">
                <SeedStage width={48} height={48} />
              </div>
              <Typography>{sortedStatistics.SEED}</Typography>
            </div>

            <div className="flex-1 flex flex-col items-center pt-4 gap-2">
              <div className="w-12 h-12">
                <StemStage width={48} height={48} />
              </div>
              <Typography>{sortedStatistics.STEM}</Typography>
            </div>
            <div className="flex-1 flex flex-col items-center pt-4 gap-2">
              <div className="w-12 h-12">
                <TreeStage width={48} height={48} />
              </div>
              <Typography>{sortedStatistics.TREE}</Typography>
            </div>
            <div className="flex-1 flex flex-col items-center pt-4 gap-2">
              <div className="w-12 h-12">
                <FruitsStage width={48} height={48} />
              </div>
              <Typography>{sortedStatistics.FRUITS}</Typography>
            </div>
          </div>
        </div>
      </div>
      {/* MyPageBody */}
      <div className="w-full flex justify-center">
        <div className="mt-4 px-4 py-2 w-full flex flex-col bg-white rounded-lg shadow-[0_1.001px_40px_0_rgba(197,229,255,0.3)]">
          <button className="h-12 text-left border-b" onClick={() => {}}>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Link to={USER_FEEDBACK_GOOGLE_FORM_URL}>
                  <Typography type="body2" className="text-gray-800">
                    씨앗 모아에게 피드백 보내기
                  </Typography>
                </Link>
              </div>
              <ChevronRight fill="#8490A0" width={8} />
            </div>
          </button>
          <button className="h-12 text-left " onClick={() => {}}>
            <Typography type="body2" className="text-gray-800" onClick={logout}>
              로그아웃
            </Typography>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
