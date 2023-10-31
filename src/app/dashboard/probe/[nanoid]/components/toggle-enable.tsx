'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { getProbeType, toggleProbe } from '@/usecases/probes';
import { useOptimistic } from 'react';

export function ToggleEnable({ probe }: { probe: NonNullable<getProbeType> }) {
  const [probeEnabled, setProbeEnabled] = useOptimistic(
    probe.isEnabled,
    (current, _optimVal) => {
      return !current;
    }
  );
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          setProbeEnabled(!probeEnabled);
          await toggleProbe(formData);
        }}
        className="flex items-center space-x-2">
        <Switch id="probe-enabled" type="submit" checked={probeEnabled} />
        <input type="hidden" value={probe.id} name="probeId" />
        <Label htmlFor="probe-enabled">
          {probeEnabled ? 'Active' : 'Disabled'}
        </Label>
      </form>
    </div>
  );
}
