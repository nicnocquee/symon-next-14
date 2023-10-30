import { cn } from '@/lib/utils';

const MonitorHealth = async ({
  getProbesHealths,
  probeId
}: {
  probeId: string;
  getProbesHealths: Promise<{ id: string; status: string }[]>;
}) => {
  const healths = await getProbesHealths;
  const health = healths.find((h) => h.id === probeId);

  return (
    <p
      className={cn(
        health?.status === 'Healthy' ? 'text-green-500' : 'text-red-600'
      )}>
      {health?.status}
    </p>
  );
};

export default MonitorHealth;
