import { FormEvent, MouseEvent, useCallback, useState } from "react";
import { SearchParams, SearchResult } from "../types";

const useSearch = () => {
  const [searchResult, setSearchResult] = useState<SearchResult>(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");

  const handleChangeTitle = useCallback(
    (event: FormEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    []
  );

  const handleChangeType = useCallback((event: FormEvent<HTMLInputElement>) => {
    setType(event.currentTarget.value);
  }, []);

  const handleChangeYear = useCallback((event: FormEvent<HTMLInputElement>) => {
    setYear(event.currentTarget.value);
  }, []);

  const searchFor = useCallback(async ({ type, title, year }: SearchParams) => {
    let url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    if (title && title.length > 0) url += `&t=${title}`;
    if (type && type.length > 0) url += `&type=${type}`;
    if (year && year.length > 0) url += `&y=${year}`;

    const data = await fetch(url).then((response) => response.json());
    /*
      .then((response) => response.body)
      .then((body) => {
        const reader = body?.getReader();
        return reader?.read().then(({ done, value }) => {
          if (done) {
            return value;
          }
        });
      });
      */

    setSearchResult(data);
  }, []);

  const handleSearch = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      searchFor({ title, type, year });
    },
    [searchFor, title, type, year]
  );

  return {
    handleChangeTitle,
    handleChangeType,
    handleChangeYear,
    handleSearch,
    searchResult,
  };
};

export default useSearch;
