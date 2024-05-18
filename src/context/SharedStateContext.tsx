import { createContext, PropsWithChildren, useContext } from 'react';
import { useLocation } from 'react-router-dom';

const SharedStateContext = createContext<{
  isShared: boolean;
} | null>(null);

export const SharedStateProvider = ({ children }: PropsWithChildren) => {
  //TODO: 상태가 있어야함.
  const locations = useLocation();
  const searchParams = new URLSearchParams(locations.search);
  const shareValue = searchParams.get('share');
  const isShared = typeof shareValue === 'string' ? true : false;

  return <SharedStateContext.Provider value={{ isShared }}>{children}</SharedStateContext.Provider>;
};

export const useSharedStateContext = () => {
  const context = useContext(SharedStateContext);

  if (!context) {
    throw new Error('SharedStateContext must be used within a SharedStateContext');
  }

  return context;
};
