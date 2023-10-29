import { prismaClient } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoId';
import z from 'zod';
import { urls } from './urls';
import pLimit from 'p-limit';

const limit = pLimit(10);

export async function POST(request: Request) {
  const formData = await request.json();
  const validated = z
    .object({
      userId: z.string().min(1)
    })
    .safeParse(formData);

  if (!validated.success) {
    notFound();
  }

  const { userId } = validated.data;

  const user = await prismaClient.user.findFirst({
    where: {
      id: userId
    }
  });

  if (!user) {
    notFound();
  }

  let organization = await prismaClient.organization.findFirst({
    where: {
      user: {
        id: userId
      }
    }
  });
  if (!organization) {
    organization = await prismaClient.organization.create({
      data: {
        name: `Org1`,
        user: {
          connect: {
            id: userId
          }
        }
      }
    });
  }
  let project = await prismaClient.project.findFirst({
    where: {
      user: {
        id: userId
      }
    }
  });
  if (!project) {
    project = await prismaClient.project.create({
      data: {
        name: `Org1`,
        organizationID: organization.id,
        owner: user.id
      }
    });
  }

  const probes = await Promise.all(
    urls.map((website) => {
      return limit(() =>
        prismaClient.probe.create({
          data: {
            name: website,
            projectId: project!.id,
            nanoId: nanoid(7)
          }
        })
      );
    })
  );

  const locations = await prismaClient.location.findMany({});
  const result = await Promise.all(
    locations.flatMap((l) => {
      return probes.map((p) => {
        return limit(() =>
          prismaClient.locationProbe.create({
            data: {
              locationId: l.id,
              probeId: p.id
            }
          })
        );
      });
    })
  );

  return NextResponse.json({
    result: probes
  });
}
