'use server';

import 'server-only';
import { prismaClient } from '@/prisma/prisma-client';
import { compareHash } from '@/lib/password';
import { serverActionError } from '@/lib/utils';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export const authenticate = async (data: {
  email: string;
  password: string;
}) => {
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

  cookies().set(`user`, JSON.stringify({ id, name, email }));
  redirect(`/dashboard`);
};

export const logout = async () => {
  cookies().delete(`user`);
  redirect(`/`);
};
