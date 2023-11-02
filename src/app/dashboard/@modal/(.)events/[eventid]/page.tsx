import { getEvent } from '@/app/dashboard/events/[eventid]/data-event';
import ModalEventDetailPage from './modal-event-detail';

const ModalEventPage = async ({
  params: { eventid }
}: {
  params: { eventid: string };
}) => {
  const event = await getEvent(eventid);

  return <ModalEventDetailPage event={event} />;
};

export default ModalEventPage;
