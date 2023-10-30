import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { getProbesHealth, getProbesType } from '@/usecases/probes';
import Link from 'next/link';
import MonitorHealth from './monitor-health';
import { Suspense } from 'react';

export function MonitorsTable({
  probes = [],
  from = 0,
  perPage = 20
}: {
  probes: getProbesType;
  from: number;
  perPage: number;
}) {
  const probesHealths = getProbesHealth(probes.map((p) => p.id));
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
                <TableCell>
                  <Suspense fallback={<>Loading</>}>
                    <MonitorHealth
                      probeId={p.id}
                      getProbesHealths={probesHealths}
                    />
                  </Suspense>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
}
