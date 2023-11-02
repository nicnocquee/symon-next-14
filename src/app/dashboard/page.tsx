import { getProbes } from '@/usecases/probes';
import { getLoggedInUser } from '@/usecases/user';
import { notFound } from 'next/navigation';
import { MonitorsTable } from './components/monitors-table';
import * as z from 'zod';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

const DashboardPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const user = await getLoggedInUser();
  if (!user) {
    notFound();
  }

  const { from, perPage } = z
    .object({
      from: z.optional(z.coerce.number()).default(0),
      perPage: z.optional(z.coerce.number()).default(20)
    })
    .parse(searchParams);

  const probes = await getProbes(user?.id);
  return (
    <ScrollArea className="h-full">
      <div className="w-full p-4">
        <Pagination total={probes.length} from={from} perPage={perPage} />
        <MonitorsTable probes={probes} from={from} perPage={perPage} />
        <Pagination total={probes.length} from={from} perPage={perPage} />
      </div>
    </ScrollArea>
  );
};

const Pagination = ({
  total,
  perPage,
  from
}: {
  total: number;
  perPage: number;
  from: number;
}) => {
  return total > perPage ? (
    <div className="flex flex-row [&>a]:underline space-x-4">
      {from > 0 ? (
        <Link href={`/dashboard/?from=${from - perPage}`}>Previous</Link>
      ) : null}
      {from + perPage <= total ? (
        <Link href={`/dashboard/?from=${from + perPage}`}>Next</Link>
      ) : null}
    </div>
  ) : null;
};

export default DashboardPage;
