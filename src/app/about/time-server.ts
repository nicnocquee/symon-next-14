'use server';

import { unstable_cache as cache } from 'next/cache';
import { cache as memoize } from 'react';
import { nanoid } from 'nanoid';

const _getServerTime = async (userId: string) => {
  console.log(`_getServerTime`);
  return `_getServerTime with userId: ${new Date().toISOString()}: ${userId}`;
};

export const getServerTime = cache(
  memoize(_getServerTime),
  ['get-server-time'],
  {
    tags: ['get-server-time'],
    revalidate: 10
  }
);

const _getNanoId = async () => {
  return `_getNanoId: ${nanoid()}`;
};

export const getNanoId = cache(memoize(_getNanoId), ['get-nano-id'], {
  tags: ['get-nano-id'],
  revalidate: 10
});
