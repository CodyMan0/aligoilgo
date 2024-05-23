import { createContext, PropsWithChildren, useContext, useState } from 'react';

const CheerContext = createContext<{
  isSunOpen: boolean;
  onSunBgOpen: VoidFunction;
  onSunBgClose: VoidFunction;
} | null>(null);

export const CheerProvider = ({ children }: PropsWithChildren) => {
  const [isSunOpen, setisSunOpen] = useState(false);
  const onSunBgOpen = () => setisSunOpen(true);
  const onSunBgClose = () => setisSunOpen(false);

  return (
    <CheerContext.Provider value={{ isSunOpen, onSunBgOpen, onSunBgClose }}>
      {children}
    </CheerContext.Provider>
  );
};

export const useCheerContext = () => {
  const context = useContext(CheerContext);

  if (!context) {
    throw new Error('useCheerContext must be used within a CheerContext');
  }

  return context;
};
