import { FormEvent, MouseEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import Select from "../Select";
import styles from "../../styles/Search.module.css";

interface Props {
  handleChangeTitle: (event: FormEvent<HTMLInputElement>) => void;
  handleChangeType: (event: FormEvent<HTMLSelectElement>) => void;
  handleChangeYear: (event: FormEvent<HTMLInputElement>) => void;
  handleSearch: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SearchForm: React.FC<Props> = ({
  handleChangeTitle,
  handleChangeType,
  handleChangeYear,
  handleSearch,
}) => {
  return (
    <form className={styles.form}>
      <Input
        id="title-input"
        label="Title"
        placeholder="Search by title"
        onChange={handleChangeTitle}
      />
      <Select
        id="type-input"
        label="Type"
        options={["movie", "series", "episode"]}
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
  );
};

export default SearchForm;
