import { getProbe } from '@/usecases/probes';
import { notFound } from 'next/navigation';
import { EditProbeDialogButton } from './components/save-dialog-button';

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
      <EditProbeDialogButton
        initialData={{
          name: probe.name,
          id: probe.id,
          description: probe.description || ''
        }}
      />
    </div>
  );
};

export default ProbePage;
