import { getLoggedInUser } from '@/usecases/user';
import { getNanoId, getServerTime } from './time-server';
import { revalidateTag } from 'next/cache';

const AboutPage = async () => {
  const user = await getLoggedInUser();
  const content = await getServerTime(user?.id || 'anon');
  const nanoid = await getNanoId();
  return (
    <div>
      <h1>About page</h1>
      <p>{content}</p>
      <p>{nanoid}</p>
      <form
        action={async () => {
          'use server';
          revalidateTag('get-nano-id');
          revalidateTag('get-server-time');
          revalidateTag('user-probes');
        }}>
        <button>Refresh</button>
      </form>
    </div>
  );
};

export default AboutPage;
