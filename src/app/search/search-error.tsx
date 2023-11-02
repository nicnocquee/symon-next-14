import { Button } from '@/components/ui/button';

export function fallbackRender({
  error,
  resetErrorBoundary
}: {
  error: any;
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert" className="w-full flex flex-col space-y-2">
      <p>Something went wrong:</p>
      <p className="text-red-400">{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}
