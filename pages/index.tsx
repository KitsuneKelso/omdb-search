import Head from "next/head";
import { Search } from "../modules";
import styles from "../styles/Home.module.css";

export default function Home() {
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
      <Search />
    </div>
  );
}
