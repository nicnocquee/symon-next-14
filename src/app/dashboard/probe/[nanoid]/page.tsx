import { getProbe } from '@/usecases/probes';
import { notFound } from 'next/navigation';
import { EditProbeDialogButton } from './components/save-probe-button';
import { DeleteProbeDialog } from './components/delete-probe-button';
import Locations from './components/locations';
import RefreshButton from './components/refresh-button';
import { ToggleEnable } from './components/toggle-enable';
import { format } from '@/lib/utils';

const ProbePage = async ({
  params: { nanoid }
}: {
  params: { nanoid: string };
}) => {
  const probe = await getProbe(nanoid);
  if (!probe) {
    notFound();
  }

  return (
    <div className="py-4 space-y-2 px-4 w-full">
      <span>Monitor {nanoid}</span>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {probe.name}
      </h1>
      {probe.description ? (
        <p className="text-lg text-muted-foreground">{probe.description}</p>
      ) : null}
      <p className="text-slate-400">
        Updated at: {format(probe.updatedAt, 'dd-MM-yyyy HH:mm:ss')}
      </p>

      <ToggleEnable probe={probe} />

      <div className="flex flex-col space-y-2 items-start">
        <EditProbeDialogButton
          initialData={{
            name: probe.name,
            id: probe.id,
            description: probe.description || ''
          }}
        />

        <DeleteProbeDialog id={probe.id} name={probe.name} />
        <RefreshButton />
      </div>

      <div>
        <Locations probe={probe} />
      </div>
    </div>
  );
};

export default ProbePage;
