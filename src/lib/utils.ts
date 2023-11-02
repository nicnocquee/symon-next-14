import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { parseISO, format as formatFNS } from 'date-fns';

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

export const sleepRandom = async (max: number = 5) => {
  return sleep(Math.floor(Math.random() * max));
};

export const format = (input: Date | string, fmt: string) => {
  if (typeof input === 'string') {
    return formatFNS(parseISO(input), fmt);
  }

  return formatFNS(input as Date, fmt);
};

export type DateToString<T> = {
  [P in keyof T]: T[P] extends Date
    ? string
    : T[P] extends object
    ? DateToString<T[P]>
    : T[P];
};
