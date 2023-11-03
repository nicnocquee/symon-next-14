import { cn } from '@/lib/utils';

const LoadingSpinner = ({
  text = 'Loading ...',
  className
}: {
  text?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'w-full h-full flex flex-row justify-center items-center p-4 space-x-2',
        className
      )}>
      <Spinner />
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
};

export const Spinner = () => {
  return (
    <span className="h-6 w-6 block rounded-full border-4 border-t-slate-600 animate-spin"></span>
  );
};

export default LoadingSpinner;
