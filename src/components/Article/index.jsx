import { useState } from "react";
import { TbBulb } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./Article.module.css";

function Article(props) {
  const [isActive, setIsActive] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  let articleClassName = "";

  if (isActive) {
    articleClassName = `${styles.userWrap} ${props.user.gender === "male" ? styles.maleBorder : styles.femaleBorder} `;
  } else {
    articleClassName = styles.userWrap;
  }
  const changeColorBorder = () => {
    setIsActive(true);
  };
  if (isDeleted) {
    articleClassName = styles.hidden;
  }
  const deleteUser = () => {
    setIsDeleted(true);
  };
  console.log(props.user.name);
  return (
    <article className={articleClassName}>
      <h2>
        {props.user.name} {props.user.surname}
      </h2>
      <p>{props.user.age}</p>
      <img className={styles.userImg} src={props.user.imgSrc} alt="" />
      <button onClick={changeColorBorder}>
        <TbBulb />
      </button>
      <button onClick={deleteUser}>
        <MdDeleteOutline />
      </button>
    </article>
  );
}

export default Article;
