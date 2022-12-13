import styles from "../../styles/Search.module.css";

interface Props {
  src: string | undefined;
}

const Poster: React.FC<Props> = ({ src }) => {
  if (!src || src === "N/A") {
    return <div className={styles.placeholderPoster} />;
  }

  return (
    <picture>
      <img src={src} alt="Poster" width={68} height={100} />
    </picture>
  );
};

export default Poster;
