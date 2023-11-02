'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import { DateToString, sleep } from '@/lib/utils';
import { getLoggedInUser } from '@/usecases/user';
import { unstable_cache as cache } from 'next/cache';
import { ReactNode, cache as memoize } from 'react';
import { notFound } from 'next/navigation';

const _getProbes = async (userId: string) => {
  console.log(`__getProbes`);
  // await sleep(10);
  const user = await getLoggedInUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  const probes = await prismaClient.probe.findMany({
    where: {
      project: {
        user: {
          id: userId
        }
      }
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });

  // need to turn it to JSON object so that Date type becomes string.
  // need to do this because unstable_cache returns serialized version of the cached data
  return JSON.parse(JSON.stringify(probes)) as DateToString<typeof probes>;
};

export const getProbes = cache(memoize(_getProbes), ['user-probes'], {
  tags: ['dashboard'],
  revalidate: 10
});
export type getProbesType = Awaited<ReturnType<typeof getProbes>>;

export const ProbesProvider = async ({
  children
}: {
  children: (probes: getProbesType) => ReactNode;
}) => {
  const user = await getLoggedInUser();
  if (!user) {
    notFound();
  }
  const probes = await getProbes(user?.id);

  return <>{children(probes)}</>;
};
