import { cn } from '@/lib/utils';
import { getProbes, getProbesHealth } from '@/usecases/probes';
import { getLoggedInUser } from '@/usecases/user';

const MonitorHealth = async ({ probeId }: { probeId: string }) => {
  const user = await getLoggedInUser();
  const probes = await getProbes(user?.id!);
  const healths = await getProbesHealth(probes.map((p) => p.id).join(','));
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
