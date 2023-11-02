import { sleep } from '@/lib/utils';

export const getEvent = async (eventId: string) => {
  await sleep(Math.floor(Math.random() * 5));

  return {
    id: eventId,
    name: `Event ${eventId}`,
    description: `Some detail about the event`
  };
};

export type getEventType = Awaited<ReturnType<typeof getEvent>>;
