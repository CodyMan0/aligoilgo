import { Outlet } from 'react-router-dom';

import BackgroundMusic from '@/assets/background.mp3';
import SunBackgroundMusic from '@/assets/sun.mp3';
import { ToastContainer } from './components/common/toast';
import ApiErrorBoundary from './components/errorBoundary/ApiErrorBoundary';
import UnknownErrorBoundary from './components/errorBoundary/UnknownErrorBoundary';
import RootApiFallback from './components/errorBoundary/fallback/RootApiFallback';
import RootUnknownFallback from './components/errorBoundary/fallback/RootUnknownFallback';
import Audio from './components/feature/detail/Audio';
import Background from './components/layout/Background';
import useMusicStore from './store/useMusicStore';

function App() {
  const isRainPlaying = useMusicStore((s) => s.isRainPlaying);
  const isSunPlaying = useMusicStore((s) => s.isSunPlaying);

  return (
    <Background>
      <div>
        <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
          <ApiErrorBoundary FallbackComponent={RootApiFallback}>
            <Outlet />
          </ApiErrorBoundary>
        </UnknownErrorBoundary>
      </div>
      <Audio src={BackgroundMusic} isPlaying={isRainPlaying} />
      <Audio src={SunBackgroundMusic} isPlaying={isSunPlaying} />
      <ToastContainer />
    </Background>
  );
}

export default App;
