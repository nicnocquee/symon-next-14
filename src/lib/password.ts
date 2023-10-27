'use server';

import 'server-only';

import { hash, compare } from 'bcrypt';

export const generateHash = (str: string) => {
  const saltRounds = 10;
  return hash(str, saltRounds);
};

export const compareHash = (str: string, hash: string) => {
  return compare(str, hash);
};
