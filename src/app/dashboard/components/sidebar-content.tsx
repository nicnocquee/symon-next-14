import { getProbes } from '@/usecases/probes';
import { getLoggedInUser } from '@/usecases/user';
import Link from 'next/link';
import { SidebarContentLink } from './sidebar-content-link';

const SidebarContent = async () => {
  const user = await getLoggedInUser();
  if (!user) {
    return null;
  }
  const probes = await getProbes(user.id);
  // console.log(`getting new probes in SidebarContent`);
  // console.log(probes.find((p) => p.nanoId === 'M57eK7d'));
  return (
    <div className="flex flex-col p-4">
      <div className="">
        <Link className="font-bold text-lg" href={'/dashboard'}>
          Monitors ({probes.length})
        </Link>
      </div>
      {probes.map((p) => {
        return (
          <SidebarContentLink
            enabled={p.isEnabled}
            key={p.id}
            name={p.name}
            nanoid={p.nanoId!}
          />
        );
      })}
    </div>
  );
};

export default SidebarContent;
