'use client';

import { Input } from '@/components/ui/input';
import LoadingSpinner from '@/components/ui/loading';
import { ReactNode, Suspense, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ErrorBoundary } from 'react-error-boundary';
import { fallbackRender } from './search-error';

const SearchInput = ({
  search
}: {
  search: (keyword: string) => Promise<ReactNode>;
}) => {
  const [keyword, setKeyword] = useState<string | null>(null);
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
                setKeyword(e.currentTarget.value);
              }}
            />
            {keyword ? (
              <ErrorBoundary
                fallbackRender={fallbackRender}
                onReset={() => {
                  setKeyword(`${keyword} `);
                }}>
                <Suspense fallback={<LoadingSpinner text="Searching ..." />}>
                  {search(keyword)}
                </Suspense>
              </ErrorBoundary>
            ) : null}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchInput;
