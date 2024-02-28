import { createContext, PropsWithChildren, useReducer } from 'react';

interface DrawerContextProps {
  isDrawerOpen: boolean;
  toggle: () => void;
}

export const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps,
);

export function DrawerContextProvider({ children }: PropsWithChildren) {
  const [isDrawerOpen, toggle] = useReducer((state) => !state, false);

  return (
    <DrawerContext.Provider value={{ isDrawerOpen, toggle }}>
      {children}
    </DrawerContext.Provider>
  );
}
