import { generateHash } from '@/lib/password';
import { prismaClient } from '@/prisma/prisma-client';
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function POST(_request: Request) {
  const password = `abcd`;
  console.log(password);
  const user = await prismaClient.user.create({
    data: {
      name: faker.person.fullName(),
      email: faker.internet.email().toLowerCase(),
      password: await generateHash(password),
      isEnabled: 1,
      isSuspended: 0
    }
  });

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

  const project = await prismaClient.project.create({
    data: {
      name: 'project 1',
      owner: user.id,
      organizationID: organization.id
    }
  });

  return NextResponse.json({ result: user });
}
