import { AiOutlineMail } from "react-icons/ai";
import styles from "./Social.module.css";

function Social() {
  return (
    <article className={styles.article_container}>
      <section className={styles.text_container}>
        <h1>Vamos conversar.</h1>
        <h1>Me mande uma mensagem</h1>
        <h1>no formulario.</h1>
        <p className={styles.text}>Qualquer duvida, estou a disposição</p>
      </section>
      <div className={styles.email_container}>
        <AiOutlineMail></AiOutlineMail>
        <p>Fale comigo em<br />
        <a href = "mailto: raphaelgw@gmail.com">raphaelgw@gmail.com</a>
          </p>
        
      </div>
    </article>
    
  );
}

export default Social;
