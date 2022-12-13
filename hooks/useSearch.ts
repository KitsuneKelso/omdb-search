import { FormEvent, MouseEvent, useCallback, useMemo, useState } from "react";
import {
  Response,
  SearchParams,
  SearchResult,
  TotalResults,
  Type,
} from "../types";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [totalResults, setTotalResults] = useState<TotalResults>(null);
  const [response, setResponse] = useState<Response>(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<Type | undefined>();
  const [year, setYear] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeTitle = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    []
  );

  const handleChangeType = useCallback(
    (event: FormEvent<HTMLSelectElement>) => {
      setType(event.currentTarget.value as Type);
    },
    []
  );

  const handleChangeYear = useCallback((event: FormEvent<HTMLInputElement>) => {
    setYear(event.currentTarget.value);
  }, []);

  const searchFor = useCallback(
    async ({ type, title, year, nextPage }: SearchParams) => {
      setIsLoading(true);

      let url = `http://www.omdbapi.com/?apikey=${
        process.env.NEXT_PUBLIC_API_KEY
      }&page=${nextPage || page}`;
      if (title && title.length > 0) url += `&s=${title}`;
      if (type && type.length > 0) url += `&type=${type}`;
      if (year && year.length > 0) url += `&y=${year}`;

      const data = await fetch(url).then((response) => response.json());

      setSearchResults([...searchResults, ...data.Search]);
      setTotalResults(data.totalResults);
      setResponse(data.Response);
      setIsLoading(false);
    },
    [page, searchResults]
  );

  const handleSearch = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      searchFor({ title, type, year });
    },
    [searchFor, title, type, year]
  );

  const canLoadMore = useMemo(() => {
    if (isLoading) {
      return false;
    }

    if (totalResults) {
      return Number.parseInt(totalResults) > page * 10;
    }

    return false;
  }, [isLoading, page, totalResults]);

  const loadNextPage = useCallback(() => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchFor({ title, type, year, nextPage });
  }, [page, searchFor, title, type, year]);

  return {
    handleChangeTitle,
    handleChangeType,
    handleChangeYear,
    handleSearch,
    searchResults,
    totalResults,
    response,
    isLoading,
    canLoadMore,
    loadNextPage,
  };
};

export default useSearch;
