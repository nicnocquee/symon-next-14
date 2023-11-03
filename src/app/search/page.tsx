import { searchAction } from './search-action';
import SearchInput from './search-input';

const SearchPage = async () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <SearchInput search={searchAction} />
    </div>
  );
};

export default SearchPage;
