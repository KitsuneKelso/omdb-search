import { useCallback, useMemo, useRef } from "react";
import styles from "../../styles/Search.module.css";
import { Response, SearchResult, TotalResults } from "../../types";
import SearchResultItem from "../SearchResultItem";

interface Props {
  searchResults: SearchResult[];
  totalResults: TotalResults;
  response: Response;
  isLoading: boolean;
  canLoadMore: boolean;
  loadNextPage: () => void;
}

const SearchResults: React.FC<Props> = ({
  searchResults,
  totalResults,
  response,
  isLoading,
  canLoadMore,
  loadNextPage,
}) => {
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (canLoadMore && entries[0].isIntersecting) {
          loadNextPage();
        }
      });

      if (node) {
        observer.current?.observe(node);
      }
    },
    [canLoadMore, isLoading, loadNextPage]
  );

  if (!searchResults) {
    return null;
  }

  if (response === "False") {
    return (
      <span>
        <i>No search result found.</i>
      </span>
    );
  }

  if (response === "True" && searchResults.length > 0) {
    return (
      <div>
        <span className={styles.totalResults}>
          Total search results: <b>{totalResults}</b>
        </span>
        <div className={styles.resultsList}>
          {searchResults.map((result, index) => {
            if (searchResults.length === index + 1) {
              return (
                <SearchResultItem
                  ref={lastElementRef}
                  key={result?.imdbID}
                  searchResult={result}
                />
              );
            }
            return (
              <SearchResultItem key={result?.imdbID} searchResult={result} />
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default SearchResults;
