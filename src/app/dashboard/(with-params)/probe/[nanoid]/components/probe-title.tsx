import { getProbe } from '@/usecases/probes';

const ProbeTitle = async ({ nanoid }: { nanoid?: string }) => {
  if (!nanoid) {
    return <p>Neosense Monitors</p>;
  }
  const probe = await getProbe(nanoid);

  return <p className="text-white">{probe?.name || 'No title'}</p>;
};

export default ProbeTitle;
