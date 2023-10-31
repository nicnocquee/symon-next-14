'use client';

import { getProbesType } from '@/usecases/probes';
import { ReactNode, createContext, useState } from 'react';

export const DashboardContext = createContext({
  isSideBarOpen: true,
  toggleSideBar: () => {},
  probes: [] as getProbesType
});

export const DashboardLayoutProvider = ({
  children,
  probes = []
}: {
  children: ReactNode;
  probes: getProbesType;
}) => {
  const [isSideBarOpen, setSideBarOpen] = useState(false);

  return (
    <DashboardContext.Provider
      value={{
        probes,
        isSideBarOpen,
        toggleSideBar: () => setSideBarOpen((curr) => !curr)
      }}>
      {children}
    </DashboardContext.Provider>
  );
};
