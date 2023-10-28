import { getProbe } from '@/usecases/probes';
import { notFound } from 'next/navigation';
import { EditProbeDialogButton } from './components/save-dialog-button';
import { DeleteProbeDialog } from './components/delete-probe-button';

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
    <div className="py-4 space-y-2">
      <span>Monitor {nanoid}</span>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {probe.name}
      </h1>
      {probe.description ? (
        <p className="text-lg text-muted-foreground">{probe.description}</p>
      ) : null}
      <div className="flex flex-col space-y-2 items-start">
        <EditProbeDialogButton
          initialData={{
            name: probe.name,
            id: probe.id,
            description: probe.description || ''
          }}
        />

        <DeleteProbeDialog id={probe.id} name={probe.name} />
      </div>
    </div>
  );
};

export default ProbePage;
