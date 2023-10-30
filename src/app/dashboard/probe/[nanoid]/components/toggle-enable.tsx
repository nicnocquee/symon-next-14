import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { getProbeType, toggleProbe } from '@/usecases/probes';

export function ToggleEnable({ probe }: { probe: NonNullable<getProbeType> }) {
  return (
    <div>
      <form action={toggleProbe} className="flex items-center space-x-2">
        <Switch id="probe-enabled" type="submit" checked={probe.isEnabled} />
        <input type="hidden" value={probe.id} name="probeId" />
        <Label htmlFor="probe-enabled">
          {probe.isEnabled ? 'Active' : 'Disabled'}
        </Label>
      </form>
    </div>
  );
}
