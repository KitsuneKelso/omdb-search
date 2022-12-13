import { SearchResult } from "../../types";
import styles from "../../styles/Search.module.css";
import Poster from "../Poster";

interface Props {
  searchResult: SearchResult;
}

const SearchResultItem: React.FC<Props> = ({ searchResult }) => {
  return (
    <div className={styles.resultItem}>
      <Poster src={searchResult?.Poster} />
      <div className={styles.resultDetails}>
        <span>
          <b>Title:</b> {searchResult?.Title}
        </span>
        <span>
          <b>Year:</b> {searchResult?.Year}
        </span>
        <span>
          <b>imdbID:</b> {searchResult?.imdbID}
        </span>
        <span>
          <b>Type:</b> {searchResult?.Type}
        </span>
      </div>
    </div>
  );
};

export default SearchResultItem;
