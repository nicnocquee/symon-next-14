'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import { compareHash } from '@/lib/password';
import { serverActionError, sleepRandom } from '@/lib/utils';
import { RedirectType, redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import * as jose from 'jose';
import { revalidateTag } from 'next/cache';

export const authenticate = async (data: {
  email: string;
  password: string;
}) => {
  const secretKey = process.env.USER_JWT_KEY;
  if (!secretKey) {
    throw new Error('USER_JWT_KEY is required');
  }

  const { email, password } = data;
  const user = await prismaClient.user.findFirst({
    where: { email }
  });
  if (!user) {
    return serverActionError('User not found');
  }
  const isValid = await compareHash(password, user.password);
  if (!isValid) {
    return serverActionError(`E-mail & Password don't match`);
  }

  const { id, name } = user;
  const userJWt = await new jose.SignJWT({ id, name, email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(new TextEncoder().encode(secretKey));

  cookies().set(`user`, userJWt);
  revalidateTag('user-probes');
  revalidateTag('current-probe');
  revalidateTag('probes-health');
  redirect(`/dashboard`);
};

export const logout = async () => {
  await sleepRandom();
  cookies().delete(`user`);
  revalidateTag('user-probes');
  revalidateTag('current-probe');
  revalidateTag('probes-health');
  redirect(`/`, RedirectType.replace);
};
