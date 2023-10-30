'use client';

import { useParams } from 'next/navigation';
import { ReactNode } from 'react';

export const NavigationTitle = ({
  renderItem
}: {
  renderItem: (nanoid: string) => ReactNode;
}) => {
  const params = useParams();

  if (!params.nanoid) {
    return null;
  }

  const nanoid = Array.isArray(params.nanoid)
    ? params.nanoid[0]
    : params.nanoid;

  return renderItem(nanoid);
};
