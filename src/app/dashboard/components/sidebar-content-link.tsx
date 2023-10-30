'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SidebarContentLink = ({
  name,
  nanoid,
  enabled
}: {
  nanoid: string;
  name: string;
  enabled: boolean;
}) => {
  const pathname = usePathname();
  const href = `/dashboard/probe/${nanoid}`;
  return (
    <Link
      href={href}
      className={cn(
        `px-4 py-2 hover:bg-slate-100 hover:px-4 hover:py-2 hover:rounded-lg`,
        pathname === href ? 'bg-slate-100 px-4 py-2 rounded-lg' : '',
        enabled ? `` : `text-slate-500 italic`
      )}>
      {name}
    </Link>
  );
};
