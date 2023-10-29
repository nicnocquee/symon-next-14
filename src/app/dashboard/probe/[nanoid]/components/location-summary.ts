'use server';

import { sleep } from '@/lib/utils';
import 'server-only';
import { unstable_cache as cache } from 'next/cache';
import { subHours, format } from 'date-fns';

const _probeSummaryForLocation = async (
  probeId: string,
  locationId: string
) => {
  const sleepDuration = Math.ceil(Math.random() * 5 + 1);
  await sleep(sleepDuration); // fake long process
  // get the real data here

  return {
    status: 'Healthy',
    responseTime: 4.5,
    lastCheck: format(subHours(new Date(), Math.random() * 5 + 1), 'PPP HH:mm')
  };
};

export const probeSummaryForLocation = cache(
  _probeSummaryForLocation,
  ['probe-summary-location'],
  {
    revalidate: 10, // seconds
    tags: ['probe-summary-location']
  }
);
