import { FormEvent, MouseEvent, useCallback, useState } from "react";
import { SearchParams, SearchResults, Type } from "../types";

const useSearch = () => {
  const [searchResults, setSearchResults] = useState<SearchResults>(null);
  const [title, setTitle] = useState("");
  const [type, setType] = useState<Type | undefined>();
  const [year, setYear] = useState("");

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

  const searchFor = useCallback(async ({ type, title, year }: SearchParams) => {
    let url = `http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}`;
    if (title && title.length > 0) url += `&s=${title}`;
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

    setSearchResults(data);
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
    searchResults,
  };
};

export default useSearch;
