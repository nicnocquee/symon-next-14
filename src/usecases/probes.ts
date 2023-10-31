'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import {
  unstable_cache as cache,
  revalidatePath,
  revalidateTag
} from 'next/cache';
import { cache as memoize } from 'react';

import { DateToString, serverActionError, sleep } from '@/lib/utils';
import { getLoggedInUser } from './user';
import { saveProbeSchema } from '@/app/dashboard/probe/[nanoid]/components/save-probe-form';
import { nanoid } from 'nanoid';
import { redirect } from 'next/navigation';
import * as z from 'zod';

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
  tags: ['user-probes']
});
export type getProbesType = Awaited<ReturnType<typeof getProbes>>;

const _getProbe = async (nanoid: string) => {
  console.log(`_getProbe`);
  const user = await getLoggedInUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  const probe = await prismaClient.probe.findFirst({
    where: {
      nanoId: nanoid,
      project: {
        owner: user.id
      }
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

  if (!probe) return null;

  return JSON.parse(JSON.stringify(probe)) as DateToString<typeof probe>;
};

export const getProbe = cache(memoize(_getProbe), ['current-probe'], {
  tags: ['current-probe']
});
export type getProbeType = Awaited<ReturnType<typeof getProbe>>;

export const deleteProbe = async (formData: FormData) => {
  // await sleep(5);
  const user = await getLoggedInUser();
  if (!user) {
    throw new Error('Not authenticated');
  }
  const id = formData.get('id')?.toString();
  await prismaClient.probe.delete({
    where: {
      id,
      project: {
        owner: user.id
      }
    }
  });

  revalidatePath(`/dashboard`);
  redirect(`/dashboard`);
};

export const saveProbe = async (
  data: ReturnType<typeof saveProbeSchema.parse>
) => {
  const user = await getLoggedInUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  let redirectTo = '';
  //  await sleep(5);
  try {
    const { id, ...rest } = data;
    if (id) {
      const result = await prismaClient.probe.update({
        where: {
          id,
          project: {
            owner: user.id
          }
        },
        data: {
          ...rest
        }
      });
      revalidateTag(`current-probe`); // to refresh the main area of probe page
      revalidateTag(`user-probes`); // to refresh the sidebar
      return { data: result, error: null };
    } else {
      let project = await prismaClient.project.findFirst({
        where: {
          owner: user.id
        }
      });

      if (!project) {
        const organization = await prismaClient.organization.create({
          data: {
            name: 'Organization 1',
            user: {
              connect: {
                id: user.id
              }
            }
          }
        });
        project = await prismaClient.project.create({
          data: {
            name: 'Project 1',
            owner: user.id,
            organizationID: organization.id
          }
        });
      }

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

      const locations = await prismaClient.location.findMany();
      await Promise.all(
        locations.map((l) => {
          return prismaClient.locationProbe.create({
            data: {
              locationId: l.id,
              probeId: result.id
            }
          });
        })
      );

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

const _getProbesHealth = async (probeIdStrings: string) => {
  console.log(`_getProbesHealth`);

  const user = await getLoggedInUser();
  if (!user) {
    throw new Error('Not authenticated');
  }

  await sleep(4);

  // get the healths of the probes from db

  const statuses = ['Healthy', 'Incident'];

  const probeIds = probeIdStrings.split(',');
  return probeIds.map((p) => {
    const random = Math.floor(Math.random() * statuses.length);
    return {
      id: p,
      status: statuses[random]
    };
  });
};

export const getProbesHealth = cache(
  memoize(_getProbesHealth),
  ['probes-health'],
  { tags: ['probes-health'], revalidate: 3 }
);

export const toggleProbe = async (formData: FormData) => {
  const { probeId } = z
    .object({ probeId: z.string().min(1) })
    .parse(Object.fromEntries(formData.entries()));
  const user = await getLoggedInUser();
  // const probe = await prismaClient.probe.findFirst({
  // where: {
  //   id: probeId,
  //   project: {
  //     owner: user?.id
  //   }
  // }
  // });
  // if (!probe) {
  //   return serverActionError(`Probe not found`);
  // }
  // await prismaClient.probe.update({
  //   where: {
  //     id: probe?.id
  //   },
  //   data: {
  //     isEnabled: !probe.isEnabled
  //   }
  // });

  // use single query
  await prismaClient.$executeRaw`
  UPDATE probe
  SET "isEnabled" = NOT "isEnabled",
  "updated_at" = CURRENT_TIMESTAMP  -- Sets the created_at to the current date and time
  FROM project
  WHERE
    probe.id = ${probeId} AND
    probe.project_id = project.id AND
    project.owner = ${user?.id}
  `;

  revalidateTag('current-probe');
  revalidateTag('user-probes'); // for the sidebar
};
