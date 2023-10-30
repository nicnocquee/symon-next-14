'use server';

import { sleep } from '@/lib/utils';
import 'server-only';
import { unstable_cache as cache } from 'next/cache';
import { cache as memoize } from 'react';
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
    responseTime: (Math.random() * 10 + 1).toFixed(2),
    lastCheck: format(subHours(new Date(), Math.random() * 5 + 1), 'PPP HH:mm')
  };
};

export const probeSummaryForLocation = cache(
  memoize(_probeSummaryForLocation),
  ['probe-summary-location'],
  {
    revalidate: 5, // seconds
    tags: ['probe-summary-location']
  }
);
