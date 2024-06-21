import { Link } from "react-scroll";
import styles from "./NavLinks.module.css";
function NavLinks() {
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <Link to="services" smooth={true}>
            Xidmətlərimiz
          </Link>
        </li>
        <li>
          <Link to="functionalities" smooth={true}>
            Üstünlüklərimiz{" "}
          </Link>
        </li>
        <li>
          <Link>Qiymətlər</Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true}>
            Müştəri məmnuniyyəti
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
