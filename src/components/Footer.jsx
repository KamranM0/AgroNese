import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© AgroNese</p>
      <ul>
        <Link>
          <li>Haqqımızda</li>
        </Link>
        <Link>
          <li>Məxfilik siyasəti</li>
        </Link>
        <Link>
          <li>Əlaqə</li>
        </Link>
      </ul>
    </footer>
  );
}

export default Footer;
