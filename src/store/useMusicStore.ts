import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import STORAGE_KEYS from '@/constants/storageKeys';

interface SoundState {
  isRainPlaying: boolean;
  isSunPlaying: boolean;
  toggleRainPlaying: VoidFunction;
  toggleSunPlaying: VoidFunction;
}

const useMusicStore = create<SoundState>()(
  persist(
    (set) => ({
      isRainPlaying: false,
      isSunPlaying: false,
      toggleRainPlaying: () => set((state) => ({ isRainPlaying: !state.isRainPlaying })),
      toggleSunPlaying: () => set((state) => ({ isSunPlaying: !state.isSunPlaying })),
    }),
    {
      name: STORAGE_KEYS.isPlayingMusic,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useMusicStore;
