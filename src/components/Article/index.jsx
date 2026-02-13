import { TbBulb } from "react-icons/tb";
import styles from "./Article.module.css";

function Article(props) {
  const articleClassName = `${styles.userWrap} ${props.user.gender === "male" ? styles.maleBorder : styles.femaleBorder} `;
  const changeColorBorder = () => {};
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
    </article>
  );
}

export default Article;
