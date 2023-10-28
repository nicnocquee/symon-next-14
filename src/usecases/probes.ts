'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import { unstable_cache as cache, revalidatePath } from 'next/cache';
import { serverActionError } from '@/lib/utils';
import { getLoggedInUser } from './user';
import { saveProbeSchema } from '@/app/dashboard/probe/[nanoid]/components/save-probe-form';
import { nanoid } from 'nanoId';

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

export const getProbe = async (nanoid: string) => {
  return prismaClient.probe.findFirst({
    where: {
      nanoId: nanoid
    }
  });
};

export const saveProbe = async (
  data: ReturnType<typeof saveProbeSchema.parse>
) => {
  try {
    const { id, ...rest } = data;
    if (id) {
      await prismaClient.probe.update({
        where: {
          id
        },
        data: {
          ...rest
        }
      });
      revalidatePath(`/dashboard/probe/${id}`);
    } else {
      const user = await getLoggedInUser();
      if (!user) return serverActionError(`Need authentication`);

      const project = await prismaClient.project.findFirst({
        where: {
          owner: user.id
        }
      });

      if (!project) return serverActionError(`Project not found`);

      await prismaClient.probe.create({
        data: {
          ...rest,
          nanoId: nanoid(),
          project: {
            connect: {
              id: project.id
            }
          }
        }
      });
      revalidatePath(`/dashboard`);
    }
  } catch (error) {
    console.log(error);
    return serverActionError(`Cannot save probe`);
  }
};
