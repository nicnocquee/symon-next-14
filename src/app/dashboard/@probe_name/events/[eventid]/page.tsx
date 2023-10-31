import { prismaClient } from '@/prisma/prisma-client';
import { getLoggedInUser } from '@/usecases/user';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const EventName = async ({
  params: { eventid }
}: {
  params: { eventid: string };
}) => {
  // get the probe of the event from db, for now just get the first probe
  const user = await getLoggedInUser();
  if (!user) {
    notFound();
  }
  const probe = await prismaClient.probe.findFirst({
    where: {
      project: {
        owner: user?.id
      }
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });
  if (!probe) {
    return null;
  }

  return (
    <div className="flex flex-row space-x-2">
      <Link className="underline" href={`/dashboard/probe/${probe.nanoId}`}>
        {probe.name}
      </Link>
      <span>{`>`}</span>
      <p>{eventid}</p>
    </div>
  );
};

export default EventName;
