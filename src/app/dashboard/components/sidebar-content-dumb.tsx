import Link from 'next/link';
import { SidebarContentLink } from './sidebar-content-link';
import { getProbesType } from './data-probes';

const SidebarContent = async ({ probes }: { probes: getProbesType }) => {
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
