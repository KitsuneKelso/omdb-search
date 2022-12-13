export type Type = "movie" | "series" | "episode";

export type SearchParams = {
  title?: string;
  type?: Type;
  year?: string;
};

type Rating = { Source: string; Value: string };
type Response = "True" | "False";

/*
TODO: Could be used for an expanded view when clicking a search result item
export type SearchResultItemDetails = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: Response;
};
*/

export type SearchResultItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type SearchResult = SearchResultItem | null;

export type SearchResults = {
  Search: SearchResult[];
  totalResults: string;
  Response: Response;
} | null;
