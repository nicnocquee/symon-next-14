'use client';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { getProbeType, toggleProbe } from '@/usecases/probes';
import { startTransition, useOptimistic } from 'react';

export function ToggleEnable({ probe }: { probe: NonNullable<getProbeType> }) {
  const [probeEnabled, setProbeEnabled] = useOptimistic(
    probe.isEnabled,
    (_current, optimVa: boolean) => {
      return optimVa;
    }
  );

  console.log({
    optimisticValue: probeEnabled,
    realValue: probe.isEnabled
  });

  return (
    <div>
      <form
        action={async (formData: FormData) => {
          await toggleProbe(formData);
        }}
        className="flex items-center space-x-2">
        <Switch
          id="probe-enabled"
          type="submit"
          checked={probeEnabled}
          onCheckedChange={(checked) => {
            startTransition(() => {
              setProbeEnabled(checked);
            });
          }}
        />
        <input type="hidden" value={probeEnabled ? 1 : 0} name="isEnabled" />
        <input type="hidden" value={probe.id} name="probeId" />
        <Label htmlFor="probe-enabled">
          {probeEnabled ? 'Active' : 'Disabled'}
        </Label>
      </form>
    </div>
  );
}
