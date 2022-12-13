import { FormEvent } from "react";
import styles from "../../styles/Search.module.css";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ id, label, placeholder, onChange }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
