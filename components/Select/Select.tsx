import { FormEvent } from "react";
import styles from "../../styles/Search.module.css";

interface Props {
  id: string;
  label: string;
  options: string[];
  onChange: (event: FormEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<Props> = ({ id, label, options, onChange }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <select name={id} id={id} onChange={onChange}>
        <option value="">Search by type</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
