export type Type = "movie" | "series" | "episode";

export type SearchParams = {
  title?: string;
  type?: Type;
  year?: string;
  nextPage?: number;
};

export type SearchResultItem = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export type SearchResult = SearchResultItem | null;
export type TotalResults = string | null;
export type Response = "True" | "False" | null;
