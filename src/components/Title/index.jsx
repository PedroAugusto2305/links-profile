/* eslint-disable react/prop-types */
import styles from "./style.module.css";
const Title = ({ name }) => {
  return (
    <>
      <h1 className={styles.title}>{name}</h1>
    </>
  );
};

export default Title;
