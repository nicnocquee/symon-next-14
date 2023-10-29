import { prismaClient } from '@/prisma/prisma-client';
import { faker } from '@faker-js/faker';
import z from 'zod';
import { NextResponse } from 'next/server';
import { notFound } from 'next/navigation';

export async function POST(request: Request) {
  const formData = (await request.json()) || {};
  const validated = z
    .object({
      count: z.coerce.number().min(1).default(5)
    })
    .safeParse(formData || {});

  if (!validated.success) {
    notFound();
  }

  const { count } = validated.data;
  const locations = await Promise.all(
    Array.from(Array(count).keys()).map((i) => {
      return prismaClient.location.create({
        data: {
          city: faker.location.city(),
          country: faker.location.country(),
          isp: faker.company.name(),
          code: faker.string.alphanumeric(3)
        }
      });
    })
  );

  return NextResponse.json({ result: locations });
}
