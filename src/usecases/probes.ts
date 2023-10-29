'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import { unstable_cache as cache, revalidatePath } from 'next/cache';
import { serverActionError } from '@/lib/utils';
import { getLoggedInUser } from './user';
import { saveProbeSchema } from '@/app/dashboard/(with-params)/probe/[nanoid]/components/save-probe-form';
import { nanoid } from 'nanoId';
import { redirect } from 'next/navigation';

const _getProbes = async (userId: string) => {
  const probes = await prismaClient.probe.findMany({
    where: {
      project: {
        user: {
          id: userId
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return probes;
};

export const getProbes = cache(_getProbes, ['user-probes']);
export type getProbesType = Awaited<ReturnType<typeof getProbes>>;

const _getProbe = async (nanoid: string) => {
  // console.log(`_getProbe`);
  //const start = performance.now();
  const probe = prismaClient.probe.findFirst({
    where: {
      nanoId: nanoid
    },
    include: {
      locations: {
        include: {
          location: {
            select: {
              id: true,
              city: true,
              country: true
            }
          }
        }
      }
    }
  });
  // const end = performance.now();
  // console.log(`Execution time: ${end - start} ms`);

  return probe;
};

export const getProbe = cache(_getProbe, ['current-probe'], {
  tags: ['current-probe']
});
export type getProbeType = Awaited<ReturnType<typeof getProbe>>;

export const deleteProbe = async (formData: FormData) => {
  // await sleep(5);
  const id = formData.get('id')?.toString();
  await prismaClient.probe.delete({
    where: {
      id
    }
  });

  revalidatePath(`/dashboard`);
  redirect(`/dashboard`);
};

export const saveProbe = async (
  data: ReturnType<typeof saveProbeSchema.parse>
) => {
  let redirectTo = '';
  //  await sleep(5);
  try {
    const { id, ...rest } = data;
    if (id) {
      const result = await prismaClient.probe.update({
        where: {
          id
        },
        data: {
          ...rest
        }
      });
      revalidatePath(`/dashboard/probe/${result.nanoId}`);
      return { data: result, error: null };
    } else {
      const user = await getLoggedInUser();
      if (!user) return serverActionError(`Need authentication`);

      const project = await prismaClient.project.findFirst({
        where: {
          owner: user.id
        }
      });

      if (!project) return serverActionError(`Project not found`);

      const result = await prismaClient.probe.create({
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
      revalidatePath(`/dashboard/probe/${result.nanoId}`);
      redirectTo = `/dashboard/probe/${result.nanoId}`;
    }
  } catch (error) {
    console.log(error);
    return serverActionError(`Cannot save probe`);
  }

  // redirect need to be outside try catch
  // https://github.com/vercel/next.js/issues/49298#issuecomment-1537433377

  if (redirectTo) {
    redirect(redirectTo);
  }
};
