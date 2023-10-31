import { getProbeType } from '@/usecases/probes';
import { Suspense } from 'react';
import LocationPanel, { LocationPanelSkeleton } from './location-panel';

const Locations = async ({ probe }: { probe: getProbeType }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {probe?.locations.map((l) => {
        return (
          <Suspense key={l.id} fallback={<LocationPanelSkeleton />}>
            <LocationPanel
              probeId={probe?.id}
              locationId={l.id}
              city={l.location.city}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default Locations;
