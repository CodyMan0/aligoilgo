import { Outlet } from 'react-router-dom';

import BackgroundMusic from '@/assets/background.mp3';
import Background from './components/Background';
import { ToastContainer } from './components/common/toast';
import ApiErrorBoundary from './components/errorBoundary/ApiErrorBoundary';
import UnknownErrorBoundary from './components/errorBoundary/UnknownErrorBoundary';
import RootApiFallback from './components/errorBoundary/fallback/RootApiFallback';
import RootUnknownFallback from './components/errorBoundary/fallback/RootUnknownFallback';
import Audio from './components/feature/detail/Audio';

function App() {
  return (
    <Background>
      <div>
        <UnknownErrorBoundary FallbackComponent={RootUnknownFallback}>
          <ApiErrorBoundary FallbackComponent={RootApiFallback}>
            <Outlet />
          </ApiErrorBoundary>
        </UnknownErrorBoundary>
      </div>
      <Audio src={BackgroundMusic} />
      <ToastContainer />
    </Background>
  );
}

export default App;
