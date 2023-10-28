import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const serverActionError = (message: string) => {
  return {
    error: {
      message
    },
    data: null
  };
};

export const sleep = async (durationSeconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, durationSeconds * 1000);
  });
};
