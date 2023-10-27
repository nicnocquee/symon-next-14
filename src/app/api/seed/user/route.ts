import { generateHash } from '@/lib/password';
import { prismaClient } from '@/prisma/prisma-client';
import { faker } from '@faker-js/faker';
import { NextResponse } from 'next/server';

export async function POST(_request: Request) {
  const password = faker.internet.password();
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

  return NextResponse.json({ result: user });
}
