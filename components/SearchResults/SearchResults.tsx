import { SearchResults } from "../../types";
import SearchResultItem from "../SearchResultItem";
import styles from "../../styles/Search.module.css";

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
      <div>
        <span className={styles.totalResults}>
          Total search results: <b>{searchResults.totalResults}</b>
        </span>
        <div className={styles.resultsList}>
          {searchResults.Search.map((result) => (
            <SearchResultItem key={result?.imdbID} searchResult={result} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default SearchResults;
