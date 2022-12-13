import Head from "next/head";
import { FormEvent, MouseEvent, useCallback, useState } from "react";
import { Button, Input } from "../components";
import { useSearch } from "../hooks";
import styles from "../styles/Home.module.css";

export default function Home() {
  const searchFor = useSearch();
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

  const handleSearch = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      searchFor({ title, type, year });
    },
    [searchFor, title, type, year]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>OMDb Search</title>
        <meta
          name="description"
          content="Search for movies by title, type or year"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>OMDb Search</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "200px",
        }}
      >
        <Input
          id="title-input"
          label="Title"
          placeholder="Search by title"
          onChange={handleChangeTitle}
        />
        <Input
          id="type-input"
          label="Type"
          placeholder="Search by type"
          onChange={handleChangeType}
        />
        <Input
          id="year-input"
          label="Year"
          placeholder="Search by year"
          onChange={handleChangeYear}
        />
        <Button onClick={handleSearch}>Search</Button>
      </form>
    </div>
  );
}
