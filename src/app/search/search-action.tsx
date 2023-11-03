// import { AlertCircle } from 'lucide-react';

// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
// import { randomBool, sleepRandom } from '@/lib/utils';
import { faker } from '@faker-js/faker';
import { SearchResult } from './search-result';

export const searchAction = async (keyword: string) => {
  'use server';

  console.log(keyword);
  // await sleepRandom();

  //   if (!randomBool()) {
  //     // throw new Error('some error'); // throw error that will be picked up by ErrorBoundary
  //     return (
  //       <Alert variant="destructive">
  //         <AlertCircle className="h-4 w-4" />
  //         <AlertTitle>Error</AlertTitle>
  //         <AlertDescription>
  //           Cannot search the {keyword}. Please try again later.
  //         </AlertDescription>
  //       </Alert>
  //     );
  //   }

  // search definition here via API or something

  return <SearchResult keyword={keyword} result={faker.lorem.paragraph()} />;
};
