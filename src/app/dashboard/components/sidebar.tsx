'use client';

import { ReactNode, useContext } from 'react';
import { DashboardContext } from './dashboard-context';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent } from '@/components/ui/sheet';

export const Sidebar = ({ children }: { children?: ReactNode }) => {
  const { isSideBarOpen } = useContext(DashboardContext);
  return (
    <>
      {/* Desktop sidebar */}
      <div className="bg-gray-100 w-64 p-4 hidden lg:block">{children}</div>

      {/* Mobile sidebar */}
      <div
        className={cn(
          'bg-black bg-opacity-50 block sm:hidden lg:hidden absolute top-0 left-0 right-0 bottom-0 w-full h-full',
          isSideBarOpen ? `sm:block` : `sm:hidden`
        )}>
        <div className={`bg-blue-200 w-64 p-4 fixed left-0 top-0 bottom-0`}>
          {children}
          <div className="absolute top-0 left-full ">
            <SidebarToggleButton />
          </div>
        </div>
      </div>
    </>
  );
};

export const SidebarWithSheet = ({ children }: { children?: ReactNode }) => {
  const { isSideBarOpen, toggleSideBar } = useContext(DashboardContext);

  return (
    <>
      {/* Desktop sidebar */}
      <div className="bg-gray-100 w-64 p-4 hidden lg:block">{children}</div>

      {/* Mobile sidebar */}
      <div className="block sm:hidden lg:hidden">
        <Sheet open={isSideBarOpen} onOpenChange={toggleSideBar}>
          <SheetContent side="left">{children}</SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export const SidebarToggleButton = () => {
  const { isSideBarOpen, toggleSideBar } = useContext(DashboardContext);
  return (
    <button
      className="ml-auto block lg:hidden text-white"
      onClick={toggleSideBar}>
      {isSideBarOpen ? 'Close' : 'Open'}
    </button>
  );
};
