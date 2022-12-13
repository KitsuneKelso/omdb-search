import styles from "../../styles/PageHeader.module.css";

const PageHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>OMDb Search</h1>
    </div>
  );
};

export default PageHeader;
