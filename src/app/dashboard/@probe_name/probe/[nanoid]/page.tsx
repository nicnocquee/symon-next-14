import { getProbe } from '@/usecases/probes';

const ProbeName = async ({
  params: { nanoid }
}: {
  params: { nanoid: string };
}) => {
  const probe = await getProbe(nanoid);

  return <div className="pl-4 lg:pl-0">{probe?.name || 'My Monitors'}</div>;
};

export default ProbeName;
