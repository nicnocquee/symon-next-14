import { prismaClient } from '@/prisma/prisma-client';
import { faker } from '@faker-js/faker';
import { notFound } from 'next/navigation';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoId';
import z from 'zod';

export async function POST(request: Request) {
  const formData = await request.json();
  const validated = z
    .object({
      userId: z.string().min(1),
      count: z.coerce.number().min(1).default(1)
    })
    .safeParse(formData);

  if (!validated.success) {
    notFound();
  }

  const { userId, count } = validated.data;

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

  const probes = await Promise.allSettled(
    Array.from(Array(count).keys()).map((i) => {
      const website = faker.internet.domainName();
      return prismaClient.probe.create({
        data: {
          name: website,
          projectId: project!.id,
          nanoId: nanoid(7)
        }
      });
    })
  );

  return NextResponse.json({
    result: probes.map((p) => (p.status === 'fulfilled' ? p.value : null))
  });
}
