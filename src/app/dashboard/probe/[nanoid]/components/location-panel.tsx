import { probeSummaryForLocation } from './location-summary';
import { Skeleton } from '@/components/ui/skeleton';

const LocationPanel = async ({
  probeId,
  locationId,
  city
}: {
  probeId: string;
  locationId: string;
  city: string;
}) => {
  const summary = await probeSummaryForLocation(probeId, locationId);

  return <LocationPanelContent city={city} {...summary} />;
};

const LocationPanelContent = ({
  city,
  status,
  lastCheck,
  responseTime
}: {
  city: string;
  status: string;
  lastCheck: string;
  responseTime: number;
}) => {
  return (
    <div className="p-2 border border-gray-200 rounded-md space-y-2">
      <div className="flex flex-row justify-between">
        <p className="font-bold">{city}</p>
        <p>{status}</p>
      </div>
      <p>Last check</p>
      <p className="text-gray-400">{lastCheck}</p>
      <p>Response time</p>
      <p className="text-gray-400">{responseTime}</p>
    </div>
  );
};

export default LocationPanel;

export const LocationPanelSkeleton = () => {
  return (
    <div className="p-2 pb-24 border border-gray-200 rounded-md space-y-2 flex flex-col">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};
