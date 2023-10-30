import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { getProbesType } from '@/usecases/probes';
import Link from 'next/link';

export function MonitorsTable({
  probes = [],
  from = 0,
  perPage = 20
}: {
  probes: getProbesType;
  from: number;
  perPage: number;
}) {
  return (
    <Table>
      <TableCaption>
        Showing monitors {from + 1} - {from + 1 + perPage} out of{' '}
        {probes.length}.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {probes
          .filter((p, i) => i >= from && i < from + perPage)
          .map((p, index) => {
            return (
              <TableRow key={p.id}>
                <TableCell>{index + from + 1}</TableCell>
                <TableCell className="font-medium underline">
                  <Link href={`/dashboard/probe/${p.nanoId}`}>{p.name}</Link>
                </TableCell>
                <TableCell>Healthy</TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
