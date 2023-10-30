'use client';

import { useParams } from 'next/navigation';
import React, { ReactNode, useEffect, useState } from 'react';

const NavTitle = () => {
  const params = useParams();

  const nanoid = params.nanoid
    ? Array.isArray(params.nanoid)
      ? params.nanoid[0]
      : params.nanoid
    : null;

  const [title, setTitle] = useState<ReactNode | null>(null);

  useEffect(() => {
    if (nanoid) {
      // need to fix this
      fetch(`/api/v1/probe/${nanoid}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.result.name);
        });
    }
  }, [nanoid]);

  return <>{title}</>;
};

export default NavTitle;
