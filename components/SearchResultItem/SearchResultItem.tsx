import { forwardRef } from "react";
import { SearchResult } from "../../types";
import styles from "../../styles/Search.module.css";
import Poster from "../Poster";

interface Props {
  searchResult: SearchResult;
}

const SearchResultItem = forwardRef<HTMLDivElement, Props>(
  ({ searchResult }, ref) => {
    return (
      <div className={styles.resultItem} ref={ref}>
        <Poster src={searchResult?.Poster} />
        <div className={styles.resultDetails}>
          <span>
            <b>Title:</b> {searchResult?.Title}
          </span>
          <span>
            <b>Type:</b> {searchResult?.Type}
          </span>
          <span>
            <b>Year:</b> {searchResult?.Year}
          </span>
          <span>
            <a
              href={`https://www.imdb.com/title/${searchResult?.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more at IMDb
            </a>
          </span>
        </div>
      </div>
    );
  }
);

SearchResultItem.displayName = "searchResultItem";

export default SearchResultItem;
