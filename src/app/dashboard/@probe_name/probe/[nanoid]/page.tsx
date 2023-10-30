import { getProbe } from '@/usecases/probes';

const ProbeName = async ({
  params: { nanoid }
}: {
  params: { nanoid: string };
}) => {
  const probe = await getProbe(nanoid);

  return <>{probe?.name || 'My Monitors'}</>;
};

export default ProbeName;
