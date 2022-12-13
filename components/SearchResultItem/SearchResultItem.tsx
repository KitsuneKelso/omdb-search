import { SearchResult } from "../../types";
import styles from "../../styles/Search.module.css";

interface Props {
  searchResult: SearchResult;
}

const SearchResultItem: React.FC<Props> = ({ searchResult }) => {
  return (
    <div className={styles.result}>
      <span>
        <b>Title:</b> {searchResult?.Title}
      </span>
      <span>
        <b>Year:</b> {searchResult?.Year}
      </span>

      <span>
        <b>Poster:</b> {searchResult?.Poster}
      </span>

      <span>
        <b>imdbID:</b> {searchResult?.imdbID}
      </span>
      <span>
        <b>Type:</b> {searchResult?.Type}
      </span>
    </div>
  );
};

export default SearchResultItem;
