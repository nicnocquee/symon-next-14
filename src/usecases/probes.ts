'use server';

import { prismaClient } from '@/prisma/prisma-client';
import { unstable_cache as cache } from 'next/cache';
import 'server-only';

const _getProbes = async (userId: string) => {
  const probes = await prismaClient.probe.findMany({
    where: {
      project: {
        user: {
          id: userId
        }
      }
    }
  });

  return probes;
};

export const getProbes = cache(_getProbes, ['user-probes']);
