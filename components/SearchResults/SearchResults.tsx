import { SearchResult } from "../../types";
import styles from "../../styles/Search.module.css";

interface Props {
  searchResult: SearchResult;
}

const SearchResults: React.FC<Props> = ({ searchResult }) => {
  if (!searchResult) {
    return null;
  }

  if (searchResult?.Response === "False") {
    return (
      <span>
        <i>No search result found.</i>
      </span>
    );
  }

  if (searchResult?.Response === "True") {
    return (
      <div className={styles.result}>
        <span>
          <b>Title:</b> {searchResult?.Title}
        </span>
        <span>
          <b>Year:</b> {searchResult?.Year}
        </span>
        <span>
          <b>Rated:</b> {searchResult?.Rated}
        </span>
        <span>
          <b>Released:</b> {searchResult?.Released}
        </span>
        <span>
          <b>Runtime:</b> {searchResult?.Runtime}
        </span>
        <span>
          <b>Genre:</b> {searchResult?.Genre}
        </span>
        <span>
          <b>Director:</b> {searchResult?.Director}
        </span>
        <span>
          <b>Writer:</b> {searchResult?.Writer}
        </span>
        <span>
          <b>Actors:</b> {searchResult?.Actors}
        </span>
        <span>
          <b>Plot:</b> {searchResult?.Plot}
        </span>
        <span>
          <b>Language:</b> {searchResult?.Language}
        </span>
        <span>
          <b>Country:</b> {searchResult?.Country}
        </span>
        <span>
          <b>Awards:</b> {searchResult?.Awards}
        </span>
        <span>
          <b>Poster:</b> {searchResult?.Poster}
        </span>
        {searchResult?.Ratings &&
          searchResult.Ratings.map((rating) => (
            <span key={rating.Source}>
              <b>{rating.Source}:</b> {rating.Value}
            </span>
          ))}
        <span>
          <b>Metascore:</b> {searchResult?.Metascore}
        </span>
        <span>
          <b>imdbRating:</b> {searchResult?.imdbRating}
        </span>
        <span>
          <b>imdbVotes:</b> {searchResult?.imdbVotes}
        </span>
        <span>
          <b>imdbID:</b> {searchResult?.imdbID}
        </span>
        <span>
          <b>Type:</b> {searchResult?.Type}
        </span>
        <span>
          <b>DVD:</b> {searchResult?.DVD}
        </span>
        <span>
          <b>BoxOffice:</b> {searchResult?.BoxOffice}
        </span>
        <span>
          <b>Production:</b> {searchResult?.Production}
        </span>
        <span>
          <b>Website:</b> {searchResult?.Website}
        </span>
      </div>
    );
  }

  return null;
};

export default SearchResults;
