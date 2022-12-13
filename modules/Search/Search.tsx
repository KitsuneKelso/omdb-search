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
    totalResults,
    response,
    isLoading,
    canLoadMore,
    loadNextPage,
  } = useSearch();

  return (
    <div className={styles.search}>
      <div className={styles.leftPanel}>
        <SearchForm
          handleChangeTitle={handleChangeTitle}
          handleChangeType={handleChangeType}
          handleChangeYear={handleChangeYear}
          handleSearch={handleSearch}
        />
      </div>
      <SearchResults
        searchResults={searchResults}
        totalResults={totalResults}
        response={response}
        isLoading={isLoading}
        canLoadMore={canLoadMore}
        loadNextPage={loadNextPage}
      />
    </div>
  );
};

export default Search;
