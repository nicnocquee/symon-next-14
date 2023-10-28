'use client';

import { ReactNode, useContext } from 'react';
import { DashboardContext } from './dashboard-context';
import { cn } from '@/lib/utils';

export const Sidebar = ({ children }: { children?: ReactNode }) => {
  const { isSideBarOpen } = useContext(DashboardContext);
  return (
    <>
      {/* Desktop sidebar */}
      <div className="bg-gray-100 w-64 p-4 hidden lg:block">{children}</div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          `bg-blue-200 w-64 p-4 block sm:hidden lg:hidden fixed left-0 top-0 bottom-0`,
          isSideBarOpen ? `sm:block` : `sm:hidden`
        )}>
        {children}
        <div className="absolute top-0 ">
          <SidebarToggleButton />
        </div>
      </div>
    </>
  );
};

export const SidebarToggleButton = () => {
  const { isSideBarOpen, toggleSideBar } = useContext(DashboardContext);
  return (
    <button className="ml-auto block lg:hidden" onClick={toggleSideBar}>
      {isSideBarOpen ? 'Close' : 'Open'}
    </button>
  );
};
