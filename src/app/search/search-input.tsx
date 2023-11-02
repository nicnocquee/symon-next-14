'use client';

import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading';
import { ReactNode, Suspense, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SearchInput = ({
  search
}: {
  search: (keyword: string) => Promise<ReactNode>;
}) => {
  const [data, setData] = useState<string | null>(null);
  return (
    <div className="flex flex-col space-y-2 max-w-lg mx-auto w-full">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col space-y-4">
            <Input
              type="text"
              placeholder="search something ..."
              onChange={(e) => {
                setData(e.currentTarget.value);
              }}
            />
            {data ? (
              <Suspense fallback={<LoadingSpinner text="Searching ..." />}>
                {search(data)}
              </Suspense>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchInput;
