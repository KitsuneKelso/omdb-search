import { SearchResult } from "../../types";

interface Props {
  searchResult: SearchResult;
}

const SearchResults: React.FC<Props> = ({ searchResult }) => {
  if (!searchResult) {
    return null;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <span>Title: {searchResult.Title}</span>
      <span>Year: {searchResult.Year}</span>
      <span>Rated: {searchResult.Rated}</span>
      <span>Released: {searchResult.Released}</span>
      <span>Runtime: {searchResult.Runtime}</span>
      <span>Genre: {searchResult.Genre}</span>
      <span>Director: {searchResult.Director}</span>
      <span>Writer: {searchResult.Writer}</span>
      <span>Actors: {searchResult.Actors}</span>
      <span>Plot: {searchResult.Plot}</span>
      <span>Language: {searchResult.Language}</span>
      <span>Country: {searchResult.Country}</span>
      <span>Awards: {searchResult.Awards}</span>
      <span>Poster: {searchResult.Poster}</span>
      {searchResult.Ratings.map((rating) => (
        <span key={rating.Source}>
          {rating.Source}: {rating.Value}
        </span>
      ))}
      <span>Metascore: {searchResult.Metascore}</span>
      <span>imdbRating: {searchResult.imdbRating}</span>
      <span>imdbVotes: {searchResult.imdbVotes}</span>
      <span>imdbID: {searchResult.imdbID}</span>
      <span>Type: {searchResult.Type}</span>
      <span>DVD: {searchResult.DVD}</span>
      <span>BoxOffice: {searchResult.BoxOffice}</span>
      <span>Production: {searchResult.Production}</span>
      <span>Website: {searchResult.Website}</span>
      <span>Response: {searchResult.Response}</span>
    </div>
  );
};

export default SearchResults;
