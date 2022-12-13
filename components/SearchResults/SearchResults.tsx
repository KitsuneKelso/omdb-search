import { SearchResults } from "../../types";
import SearchResultItem from "../SearchResultItem";

interface Props {
  searchResults: SearchResults;
}

const SearchResults: React.FC<Props> = ({ searchResults }) => {
  if (!searchResults) {
    return null;
  }

  if (searchResults?.Response === "False") {
    return (
      <span>
        <i>No search result found.</i>
      </span>
    );
  }

  if (searchResults?.Response === "True" && searchResults.Search.length > 0) {
    return (
      <>
        {searchResults.Search.map((result) => (
          <SearchResultItem key={result?.imdbID} searchResult={result} />
        ))}
      </>
    );
  }

  return null;
};

export default SearchResults;
