import { SearchForm, SearchResults } from "../../components";
import { useSearch } from "../../hooks";
import styles from "../../styles/Search.module.css";

const Search: React.FC = () => {
  const {
    handleChangeTitle,
    handleChangeType,
    handleChangeYear,
    handleSearch,
    searchResults,
  } = useSearch();

  return (
    <div className={styles.search}>
      <SearchForm
        handleChangeTitle={handleChangeTitle}
        handleChangeType={handleChangeType}
        handleChangeYear={handleChangeYear}
        handleSearch={handleSearch}
      />
      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
