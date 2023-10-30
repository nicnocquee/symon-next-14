'use client';

import { ReactNode, createContext, useState } from 'react';

export const DashboardLayoutContext = createContext({
  isSideBarOpen: true,
  toggleSideBar: () => {}
});

export const DashboardLayoutProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <DashboardLayoutContext.Provider
      value={{
        isSideBarOpen,
        toggleSideBar: () => setSideBarOpen((curr) => !curr)
      }}>
      {children}
    </DashboardLayoutContext.Provider>
  );
};
