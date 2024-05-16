import { createContext, PropsWithChildren, useContext, useState } from 'react';

const RoutineContext = createContext<{
  isRainOpen: boolean;
  onRainBgOpen: VoidFunction;
  onRainBgClose: VoidFunction;
} | null>(null);

export const RoutineProvider = ({ children }: PropsWithChildren) => {
  const [isRainOpen, setIsRainOpen] = useState(false);
  const onRainBgOpen = () => setIsRainOpen(true);
  const onRainBgClose = () => setIsRainOpen(false);

  return (
    <RoutineContext.Provider value={{ isRainOpen, onRainBgOpen, onRainBgClose }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutineContext = () => {
  const context = useContext(RoutineContext);

  if (!context) {
    throw new Error('useRoutineContext must be used within a RoutineContext');
  }

  return context;
};
