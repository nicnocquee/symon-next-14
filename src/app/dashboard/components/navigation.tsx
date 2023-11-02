import { ReactNode } from 'react';

export const Navigation = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="text-foreground p-1 flex flex-row justify-between border-b-slate-300 border-b shadow-md">
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
