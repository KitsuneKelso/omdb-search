import { FormEvent, MouseEvent } from "react";
import Button from "../Button";
import Input from "../Input";

interface Props {
  handleChangeTitle: (event: FormEvent<HTMLInputElement>) => void;
  handleChangeType: (event: FormEvent<HTMLInputElement>) => void;
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
  );
};

export default SearchForm;
