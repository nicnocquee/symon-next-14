'use client';

import { Label } from '@/components/ui/label';
import LoadingSpinner from '@/components/ui/loading';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import { getProbeType, toggleProbe } from '@/usecases/probes';
import { startTransition, useOptimistic } from 'react';
import { useFormStatus } from 'react-dom';

export function ToggleEnable({ probe }: { probe: NonNullable<getProbeType> }) {
  const [probeEnabled, setProbeEnabled] = useOptimistic(
    probe.isEnabled,
    (_current, optimVa: boolean) => {
      return optimVa;
    }
  );

  const { toast } = useToast();
  return (
    <div>
      <form
        action={async (formData) => {
          await toggleProbe(formData);
          toast({
            title: 'Monitor updated',
            description: `Monitor ${probe.name} is ${
              probeEnabled ? 'enabled' : 'disabled'
            }`
          });
        }}
        className="flex items-center space-x-2">
        <EnableToggle
          probeEnabled={probeEnabled}
          setProbeEnabled={setProbeEnabled}
        />
        <input type="hidden" value={probeEnabled ? 1 : 0} name="isEnabled" />
        <input type="hidden" value={probe.id} name="probeId" />
      </form>
    </div>
  );
}

const EnableToggle = ({
  probeEnabled,
  setProbeEnabled
}: {
  probeEnabled: boolean;
  setProbeEnabled: (action: boolean) => void;
}) => {
  const { pending } = useFormStatus();
  return (
    <>
      <Switch
        disabled={pending}
        id="probe-enabled"
        type="submit"
        checked={probeEnabled}
        onCheckedChange={(checked) => {
          startTransition(() => {
            setProbeEnabled(checked);
          });
        }}
      />
      {pending ? (
        <LoadingSpinner text="Updating ..." className="w-auto" />
      ) : (
        <Label htmlFor="probe-enabled">
          {probeEnabled ? 'Active' : 'Disabled'}
        </Label>
      )}
    </>
  );
};

/*
export function ToggleEnable({ probe }: { probe: NonNullable<getProbeType> }) {
  const [checked, setChecked] = useState(probe.isEnabled);
  return (
    <div>
      <form
        action={async (formData: FormData) => {
          formData.set('isEnabled', checked ? '1' : '0');
          const theDate = new Date().toISOString();
          formData.set('description', theDate);
          console.log({
            isEnabled: checked,
            description: theDate
          });
          await toggleProbe(formData);
        }}
        className="flex items-center space-x-2">
        <Switch
          id="probe-enabled"
          type="submit"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <input type="hidden" value={probe.id} name="probeId" />
        <Label htmlFor="probe-enabled">
          {probe.isEnabled ? 'Active' : 'Disabled'}
        </Label>
      </form>
    </div>
  );
}
*/
