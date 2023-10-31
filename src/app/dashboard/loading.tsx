import { Skeleton } from '@/components/ui/skeleton';

const DashboardLoading = () => {
  return (
    <div className="w-full p-4 space-y-2">
      <Skeleton className="h-20 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
};

export default DashboardLoading;
