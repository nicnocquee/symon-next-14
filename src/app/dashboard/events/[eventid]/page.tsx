import { getEvent } from './data-event';

const EventDetailPage = async ({
  params: { eventid }
}: {
  params: { eventid: string };
}) => {
  const event = await getEvent(eventid);

  return (
    <div className="p-4">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {event.name}
      </h1>
      <p>{event.description}</p>
    </div>
  );
};

export default EventDetailPage;
