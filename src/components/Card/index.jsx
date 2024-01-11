import Avatar from "../Avatar";
import BioInfo from "../BioInfo";
import Button from "../Button";
import Title from "../Title";
import styles from "./style.module.css"

const Card = () => {
  return (
    <>
        <div className={styles.container}>
            <Avatar imgUrl={"https://avatars.githubusercontent.com/u/85378029?v=4"} />
            <Title name={"Pedro Augusto"} />
           <BioInfo />
           <Button linkUrl="#" name="LinkedIn" />
           <Button linkUrl="https://github.com/PedroAugusto2305" name="GitHub" />
           <Button linkUrl="#" name="Instagram" />
        </div>
    
    </>
  );
};

export default Card;
