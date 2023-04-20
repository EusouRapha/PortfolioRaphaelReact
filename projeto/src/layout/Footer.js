import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <a className={styles.color_icon} href="https://www.instagram.com/raphael_gw/ " target=" blank">   
            <FaInstagram></FaInstagram>
          </a>
        </li>
        <li>
          <a className={styles.color_icon} href="https://www.linkedin.com/in/raphael-gomes-2b69a6239/" target=" blank">   
            <FaLinkedin></FaLinkedin>
          </a>
        </li>
        <li>
          <a className={styles.color_icon} href="https://github.com/eusourapha" target=" blank">   
            <FaGithub></FaGithub>
          </a>
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>EusouRapha </span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
