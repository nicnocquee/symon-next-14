import Link from 'next/link';
import { DashboardProvider } from './components/dashboard-context';
import { NavLeft, NavMid, NavRight, Navigation } from './components/navigation';
import { SidebarToggleButton, SidebarWithSheet } from './components/sidebar';
import { getLoggedInUser } from '@/usecases/user';
import { redirect } from 'next/navigation';
import SidebarContent from './sidebar-content';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getLoggedInUser();
  if (!user) {
    redirect(`/login`);
  }
  return (
    <div className="flex min-h-screen flex-row">
      <DashboardProvider>
        <SidebarWithSheet>
          <SidebarContent />
        </SidebarWithSheet>
        <div className="flex flex-col flex-1">
          <Navigation>
            <NavLeft>
              <SidebarToggleButton />
            </NavLeft>
            <NavMid>This is the title</NavMid>
            <NavRight>
              <Link className="[&>a]:underline" href="/api/logout">
                Logout
              </Link>
            </NavRight>
          </Navigation>
          <div className="p-4">{children}</div>
        </div>
      </DashboardProvider>
    </div>
  );
};

export default DashboardLayout;
