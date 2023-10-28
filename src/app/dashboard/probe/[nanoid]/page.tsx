import { getProbe } from '@/usecases/probes';
import { notFound } from 'next/navigation';

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
    <div className="py-4">
      <span>Monitor {nanoid}</span>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {probe.name}
      </h1>
    </div>
  );
};

export default ProbePage;
