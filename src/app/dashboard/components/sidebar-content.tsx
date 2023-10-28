import { getProbes } from '@/usecases/probes';
import { getLoggedInUser } from '@/usecases/user';
import Link from 'next/link';

const SidebarContent = async () => {
  const user = await getLoggedInUser();
  if (!user) {
    return null;
  }
  const probes = await getProbes(user.id);
  return (
    <div className="flex flex-col p-4">
      <div className="">
        <Link className="font-bold text-lg" href={'/dashboard'}>
          Monitors
        </Link>
      </div>
      {probes.map((p) => {
        return (
          <Link
            href={`/probe/${p.nanoId}`}
            key={p.id}
            className="px-4 py-2 hover:bg-slate-100 hover:px-4 hover:py-2 hover:rounded-lg">
            {p.name}
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarContent;
