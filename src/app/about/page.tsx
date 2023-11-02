import { getLoggedInUser } from '@/usecases/user';
import { getNanoId, getServerTime } from './time-server';
import { revalidateTag } from 'next/cache';
import { Button } from '@/components/ui/button';

const AboutPage = async () => {
  const user = await getLoggedInUser();
  const content = await getServerTime(user?.id || 'anon');
  const nanoid = await getNanoId();
  return (
    <div className="p-4 flex flex-col space-y-2">
      <h1>About page</h1>
      <p>{content}</p>
      <p>{nanoid}</p>
      <form
        id="refreshform"
        action={async () => {
          'use server';
          revalidateTag('get-nano-id');
          revalidateTag('get-server-time');
        }}>
        <Button form="refreshform">Refresh</Button>
      </form>
    </div>
  );
};

export default AboutPage;
