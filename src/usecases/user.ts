'use server';

import { prismaClient } from '@/prisma/prisma-client';
import { cookies } from 'next/headers';
import { experimental_taintObjectReference as taint } from 'react';

import 'server-only';

export const getLoggedInUser = async () => {
  const userJsonString = cookies().get('user')?.value;
  if (!userJsonString) {
    return null;
  }
  try {
    const userJson = JSON.parse(userJsonString);
    const user = await prismaClient.user.findFirst({
      where: { id: userJson.id }
    });
    if (!user) {
      return null;
    }
    taint(`Don't send to client`, user);
    return user;
  } catch (error) {
    console.log(`cookie user cannot be parsed`);
  }
  return null;
};
