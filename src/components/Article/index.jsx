import styles from "./Article.module.css";

function Article(props) {
  console.log(props.user.name);
  return (
    <article className={styles.userWrap}>
      <h2>
        {props.user.name} {props.user.surname}
      </h2>
      <p>{props.user.age}</p>
      <img className={styles.userImg} src={props.user.imgSrc} alt="" />
    </article>
  );
}

export default Article;
