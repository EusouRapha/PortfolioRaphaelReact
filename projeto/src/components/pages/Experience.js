import styles from "./Experience.module.css";
import senai from "../img/senai.png";
import aperam from "../img/aperam.png";
import cefet from "../img/cefetmg.png";
import commit from "../img/commit.png";

function About() {
  return (
    <section className={styles.section_divisors}>
      <aside className={styles.images_container}>
        
        <div className={styles.top}>
          <img className={styles.imagens} src={senai} alt="senai" />
          <img className={styles.imagens} src={cefet} alt="cefet" />
        </div>
        <div className={styles.bottom}>
          <img className={styles.imagens} src={aperam} alt="aperam" />
          <img className={styles.imagens} src={commit} alt="commit" />
        </div>
      </aside>
      <article className={styles.experience_container}>
        <h1>Experiencias Academicas</h1>
        <ul>
          <li>
            <h2>Aprendizagem Industrial em Redes de Computadores</h2>
            <p>SENAI-MG (2017)</p>
          </li>
          <li>
            <h2>Graduação em Engenharia de Computação</h2>
            <p>CEFET-MG Timóteo (2020-20xx)</p>
          </li>
        </ul>
        <h1>Experiencias Profissionais</h1>
        <ul>
          <li>
            <h2>Estagio na Aperam South America</h2>
            <p>FI-CO e ABAP (2023-20xx)</p>
          </li>
          <li>
            <h2>Junior na Commit Jr, empresa Junior do CEFET-MG</h2>
            <p>Marketing e Sistemas (2023-20xx)</p>
          </li>
        </ul>
      </article>
    </section>
  );
}

export default About;
