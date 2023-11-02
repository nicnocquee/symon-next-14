import { sleepRandom } from '@/lib/utils';
import { faker } from '@faker-js/faker';
import { SearchResult } from './search-result';

export const search = async (keyword: string) => {
  'use server';

  console.log(keyword);
  await sleepRandom();

  // search definition here via API or something

  return <SearchResult keyword={keyword} result={faker.lorem.paragraph()} />;
};
