import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

import logo from "../img/LOGO-FAEL.png";

function NavBar() {
  return (
    <nav className={styles.navbar}>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/Contact">Contato</Link>
          </li >
          <Link to="/">
            <img className={styles.logo} src={logo} alt="Portfolio" />
          </Link>
          <li className={styles.item}>
            <Link to="/About">Sobre</Link>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
