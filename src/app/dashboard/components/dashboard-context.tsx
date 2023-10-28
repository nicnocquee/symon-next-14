'use client';

import { ReactNode, createContext, useState } from 'react';

export const DashboardContext = createContext({
  isSideBarOpen: true,
  toggleSideBar: () => {}
});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar: () => setSideBarOpen((curr) => !curr)
      }}>
      {children}
    </DashboardContext.Provider>
  );
};
