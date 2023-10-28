import { ReactNode } from 'react';

export const Navigation = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-row justify-between [&>div]:flex [&>div]:flex-row [&>div]:space-x-2 [&>div]:items-center">
      {children}
    </div>
  );
};

export const NavLeft = ({ children }: { children?: ReactNode }) => {
  return <div>{children}</div>;
};

export const NavMid = ({ children }: { children?: ReactNode }) => {
  return <div>{children}</div>;
};

export const NavRight = ({ children }: { children?: ReactNode }) => {
  return <div>{children}</div>;
};
