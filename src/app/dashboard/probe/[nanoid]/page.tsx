import { getProbe } from '@/usecases/probes';
import { notFound } from 'next/navigation';
import { EditProbeDialogButton } from './components/save-probe-button';
import { DeleteProbeDialog } from './components/delete-probe-button';
import Locations from './components/locations';
import RefreshButton from './components/refresh-button';
import { ToggleEnable } from './components/toggle-enable';
import { format } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    <ScrollArea className="h-full">
      <div className="py-4 space-y-8 px-4 w-full">
        <div className="flex flex-row justify-between">
          <div className="space-y-2">
            <span>Monitor {nanoid}</span>
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              {probe.name}
            </h1>
            {probe.description ? (
              <p className="text-lg text-muted-foreground">
                {probe.description}
              </p>
            ) : null}
            <p className="text-slate-400">
              Updated at: {format(probe.updatedAt, 'dd-MM-yyyy HH:mm:ss')}
            </p>

            <ToggleEnable probe={probe} />
          </div>

          <div className="flex flex-row space-x-2 items-start">
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
        </div>

        <div>
          <Locations probe={probe} />
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProbePage;
