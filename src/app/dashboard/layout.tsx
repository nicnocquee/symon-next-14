import Link from 'next/link';
import { DashboardProvider } from './components/dashboard-context';
import { NavLeft, NavMid, NavRight, Navigation } from './components/navigation';
import {
  Sidebar,
  SidebarToggleButton,
  SidebarWithSheet
} from './components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-row">
      <DashboardProvider>
        <SidebarWithSheet />
        <div className="flex flex-col flex-1">
          <Navigation>
            <NavLeft>
              <SidebarToggleButton />
            </NavLeft>
            <NavMid>This is the title</NavMid>
            <NavRight>
              <Link className="[&>a]:underline" href="/">
                Menu 1
              </Link>
              <Link className="[&>a]:underline" href="/">
                Menu 2
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
