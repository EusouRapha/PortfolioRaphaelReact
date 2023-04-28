import { DiReact } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { SiC } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import styles from "./Tecnology.module.css";

function Experience() {
  return (
    <section className={styles.experience_container}>
      <h1>Tecnologias e Habilidades</h1>
      <p>Tecnologias que já utilizei</p>
      <div className={styles.icons}>
      <a className={styles.icons} href="https://www.java.com/pt-BR/" target=" blank">   
            <DiJava></DiJava>
      </a>
      <a className={styles.icons} href="https://pt.wikipedia.org/wiki/C_(linguagem_de_programa%C3%A7%C3%A3o)" target=" blank">   
            <SiC></SiC>
      </a>
      <a className={styles.icons} href="https://www.adobe.com/br/products/photoshop.html" target=" blank">   
            <SiAdobephotoshop></SiAdobephotoshop>
      </a>
      <a className={styles.icons} href="https://www.adobe.com/br/products/premiere.html" target=" blank">   
            <SiAdobepremierepro></SiAdobepremierepro>
      </a>

      </div>
      <p>Tecnologias que tenho utilizado recentemente</p>
      <div className={styles.icons}>
      <a className={styles.icons} href="https://react.dev/" target=" blank">   
            <DiReact></DiReact>
      </a>
      <a className={styles.icons} href="https://www.javascript.com/learn/strings" target=" blank">   
            <DiJsBadge></DiJsBadge>
      </a>
      <a className={styles.icons} href="https://html.com/" target=" blank">   
            <DiHtml5></DiHtml5>
      </a>
      <a className={styles.icons} href="https://www.w3.org/Style/CSS/Overview.en.html" target=" blank">   
            <DiCss3></DiCss3>
      </a>
      <a className={styles.icons} href="https://www.canva.com/" target=" blank">   
            <SiCanva></SiCanva>
      </a>
      </div>
    </section>
  );
}

export default Experience;
