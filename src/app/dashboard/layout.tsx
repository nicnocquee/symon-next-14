import Link from 'next/link';
import { DashboardProvider } from './components/dashboard-context';
import { NavLeft, NavMid, NavRight, Navigation } from './components/navigation';
import { SidebarToggleButton, SidebarWithSheet } from './components/sidebar';
import SidebarContent from './components/sidebar-content';
import { EditProbeDialogButton } from './probe/[nanoid]/components/save-probe-button';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardProvider>
      <div className="flex h-screen flex-col">
        <div className="flex flex-col w-full">
          <Navigation>
            <NavLeft>
              <SidebarToggleButton />
            </NavLeft>
            <NavMid>This is the title</NavMid>
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
        <div className="flex flex-row flex-1 max-h-full">
          <SidebarWithSheet>
            <SidebarContent />
          </SidebarWithSheet>
          <div>{children}</div>
        </div>
      </div>
    </DashboardProvider>
  );
};

export default DashboardLayout;
