import App from '@/App';
import { ROUTER_PATHS } from '@/constants/routerPath';
import { RoutineProvider } from '@/context/RoutineContext';
import { SharedStateProvider } from '@/context/SharedStateContext';
import KakaoLoginPage from '@/pages/KaKaoLogin';
import LandingPage from '@/pages/LandingPage';
import NotFoundPage from '@/pages/NotFoundPage';
import SeedDetailPage from '@/pages/seedDetailPage';
import SeedPage from '@/pages/seedPage';
import { default as Mypage } from '../pages/Mypage';
import SeedCreatePage from '../pages/TargetCreatePage';

export const routerChildrenInfo = [
  {
    index: true,
    element: <LandingPage />,
  },
  {
    path: ROUTER_PATHS.SIGNIN_REDIRECT_KAKAO,
    element: <KakaoLoginPage />,
  },
  {
    path: ROUTER_PATHS.TARGET,
    element: <SeedPage />,
  },
  {
    path: ROUTER_PATHS.TAGET_DETAIL,
    element: (
      <SharedStateProvider>
        <RoutineProvider>
          <SeedDetailPage />
        </RoutineProvider>
      </SharedStateProvider>
    ),
  },
  {
    path: ROUTER_PATHS.CREATE_TARGET,
    element: <SeedCreatePage />,
  },
  {
    path: ROUTER_PATHS.MYPAGE,
    element: <Mypage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
export const routerInfo = [
  {
    path: '/',
    element: <App />,
    children: routerChildrenInfo,
  },
];
