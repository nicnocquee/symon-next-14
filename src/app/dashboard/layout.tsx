import Link from 'next/link';
import { DashboardLayoutProvider } from './components/dashboard-context';
import { NavLeft, NavMid, NavRight, Navigation } from './components/navigation';
import { SidebarToggleButton, SidebarWithSheet } from './components/sidebar';
// import SidebarContent from './components/sidebar-content';
import SidebarContentDumb from './components/sidebar-content-dumb';
import { EditProbeDialogButton } from './probe/[nanoid]/components/save-probe-button';
import { getLoggedInUser } from '@/usecases/user';
import { ReactNode, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { ProbesProvider } from './components/data-probes';
import { Button } from '@/components/ui/button';
import Logout from './components/logout';

const DashboardLayout = async ({
  children,
  probe_name: probeName,
  modal
}: {
  children: ReactNode;
  probe_name: ReactNode;
  modal: ReactNode;
}) => {
  const user = await getLoggedInUser();
  if (!user) {
    notFound();
  }

  return (
    <DashboardLayoutProvider>
      <div className="flex h-screen flex-col relative">
        <div className="flex flex-col w-full">
          <Navigation>
            <NavLeft>
              <SidebarToggleButton />
              {probeName}
            </NavLeft>
            <NavRight>
              <EditProbeDialogButton
                className={`text-foreground bg-transparent border-none`}
              />
              <Logout />
            </NavRight>
          </Navigation>
        </div>
        <div
          className="flex flex-row space-x-4"
          style={{ height: 'calc(100% - 72px)' }}>
          <SidebarWithSheet>
            <Suspense fallback={<p>Loading ...</p>}>
              {/* <SidebarContent /> */}
              <ProbesProvider>
                {(probes) => <SidebarContentDumb probes={probes} />}
              </ProbesProvider>
            </Suspense>
          </SidebarWithSheet>
          <div className="w-full h-full overflow-y-scroll">{children}</div>
        </div>
      </div>
      <div>{modal}</div>
    </DashboardLayoutProvider>
  );
};

export default DashboardLayout;
