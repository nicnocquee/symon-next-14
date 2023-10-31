import { Button } from '@/components/ui/button';
import { revalidateTag } from 'next/cache';

const RefreshButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        revalidateTag('probe-summary-location');
        revalidateTag('dashboard');
      }}>
      <Button type="submit">Refresh</Button>
    </form>
  );
};

export default RefreshButton;
