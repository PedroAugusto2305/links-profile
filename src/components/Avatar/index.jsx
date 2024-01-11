/* eslint-disable react/prop-types */
import styles from "./style.module.css";

const Avatar = ({ imgUrl }) => {
  return (
    <>
      <img className={styles.image} src={imgUrl} alt="Avatar Image" />
    </>
  );
};

export default Avatar;
