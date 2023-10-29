'use server';

import { prismaClient } from '@/prisma/prisma-client';
import { cookies } from 'next/headers';
import { experimental_taintObjectReference } from 'react';
import * as jose from 'jose';

import 'server-only';

export const getLoggedInUser = async () => {
  const secretKey = process.env.USER_JWT_KEY;
  if (!secretKey) {
    throw new Error('USER_JWT_KEY is required');
  }

  const userJWT = cookies().get('user')?.value;
  if (!userJWT) {
    return null;
  }
  try {
    const userJson: any = await jose.jwtVerify(
      userJWT || '',
      new TextEncoder().encode(secretKey)
    );
    const user = await prismaClient.user.findFirst({
      where: { id: userJson.payload.id }
    });
    if (!user) {
      return null;
    }
    experimental_taintObjectReference(`Don't send to client`, user);
    return user;
  } catch (error) {
    console.log(error);
    console.log(`cookie user cannot be parsed`);
  }
  return null;
};
