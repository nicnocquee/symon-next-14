'use client';

import { useParams } from 'next/navigation';
import React, { useContext } from 'react';
import { DashboardContext } from './dashboard-context';

const NavTitle = () => {
  const params = useParams();

  const nanoid = params.nanoid
    ? Array.isArray(params.nanoid)
      ? params.nanoid[0]
      : params.nanoid
    : null;

  const { probes } = useContext(DashboardContext);
  const currentProbe = probes.find((p) => p.nanoId === nanoid);

  return <>{currentProbe?.name}</>;
};

export default NavTitle;
