import { ReactNode } from 'react';

export const Navigation = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-gray-800 text-white p-4 flex flex-row justify-between ">
      {children}
    </div>
  );
};

export const NavLeft = ({ children }: { children?: ReactNode }) => {
  return <div className="flex flex-row space-x-2 items-center">{children}</div>;
};

export const NavMid = ({ children }: { children?: ReactNode }) => {
  return <div className="flex flex-row space-x-2 items-center">{children}</div>;
};

export const NavRight = ({ children }: { children?: ReactNode }) => {
  return <div className="flex flex-row space-x-2 items-center">{children}</div>;
};
