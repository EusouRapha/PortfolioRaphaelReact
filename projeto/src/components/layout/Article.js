import styles from "./Article.module.css";
import photo from "../img/Eu.png";

function Article() {
  return (
    <article className={styles.article_container}>
        <img className={styles.imagem} src={photo} alt="img"/>
    </article>
  );
}

export default Article;
