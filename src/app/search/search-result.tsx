export const SearchResult = ({
  result,
  keyword
}: {
  keyword: string;
  result: string;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <h2 className="font-bold">Definition</h2>
      <p className="text-blue-500">
        {keyword}: {result}
      </p>
    </div>
  );
};
