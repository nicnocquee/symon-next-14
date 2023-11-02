import { sleepRandom } from '@/lib/utils';

export const getEvent = async (eventId: string) => {
  await sleepRandom();

  return {
    id: eventId,
    name: `Event ${eventId}`,
    description: `Some detail about the event`
  };
};

export type getEventType = Awaited<ReturnType<typeof getEvent>>;
