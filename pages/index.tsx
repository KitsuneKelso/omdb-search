import Head from "next/head";
import { SearchForm, SearchResults } from "../components";
import { useSearch } from "../hooks";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {
    handleChangeTitle,
    handleChangeType,
    handleChangeYear,
    handleSearch,
    searchResult,
  } = useSearch();

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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          paddingBottom: "100px",
        }}
      >
        <SearchForm
          handleChangeTitle={handleChangeTitle}
          handleChangeType={handleChangeType}
          handleChangeYear={handleChangeYear}
          handleSearch={handleSearch}
        />
        <SearchResults searchResult={searchResult} />
      </div>
    </div>
  );
}
