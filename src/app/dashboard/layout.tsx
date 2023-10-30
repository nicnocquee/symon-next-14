import Link from 'next/link';
import { DashboardLayoutProvider } from './components/dashboard-context';
import { NavLeft, NavMid, NavRight, Navigation } from './components/navigation';
import { SidebarToggleButton, SidebarWithSheet } from './components/sidebar';
import SidebarContent from './components/sidebar-content';
import { EditProbeDialogButton } from './probe/[nanoid]/components/save-probe-button';
import { getProbes } from '@/usecases/probes';
import { getLoggedInUser } from '@/usecases/user';
import { ReactNode } from 'react';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getLoggedInUser();
  const probes = user ? await getProbes(user?.id) : [];

  return (
    <DashboardLayoutProvider probes={probes}>
      <div className="flex h-screen flex-col relative">
        <div className="flex flex-col w-full">
          <Navigation>
            <NavLeft>
              <SidebarToggleButton />
            </NavLeft>
            <NavMid>test</NavMid>
            <NavRight>
              <EditProbeDialogButton
                className={`text-white bg-transparent border-none hover:bg-transparent hover:text-white`}
              />
              <Link
                prefetch={false}
                className="[&>a]:underline"
                href="/api/logout">
                Logout
              </Link>
            </NavRight>
          </Navigation>
        </div>
        <div className="flex flex-row flex-1 h-full">
          <SidebarWithSheet>
            <SidebarContent />
          </SidebarWithSheet>
          <div className="w-full h-full overflow-y-scroll">{children}</div>
        </div>
      </div>
    </DashboardLayoutProvider>
  );
};

export default DashboardLayout;
