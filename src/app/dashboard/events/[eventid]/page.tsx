const EventDetailPage = async ({
  params: { eventid }
}: {
  params: { eventid: string };
}) => {
  // .. get the events

  return (
    <div className="p-4">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        Event {eventid}
      </h1>
      <p>Details of the event here</p>
    </div>
  );
};

export default EventDetailPage;
