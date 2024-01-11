import styles from "./style.module.css";

const BioInfo = () => {
  return (
    <>
      <h2 className={styles.subtitle}>FullStack Developer &</h2>
      <h3 className={styles.workInfo}>
        Instructor at <span className={styles.highlight}>Mynds TechSchool.</span>
      </h3>
      <div className={styles.separator}></div>
    </>
  );
};

export default BioInfo;
