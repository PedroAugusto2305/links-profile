/* eslint-disable react/prop-types */
import styles from "./style.module.css"

const Button = ({linkUrl, name}) => {
    return (
        <a href={linkUrl} className={styles.button} target="_blank" rel="noreferrer">{name}</a>
    );
};

export default Button;