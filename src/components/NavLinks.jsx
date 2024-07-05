import { Link } from "react-scroll";
import styles from "./NavLinks.module.css";
import { useMediaQueries } from "../hooks/UseMedia";
function NavLinks() {
  const { lg, sm } = useMediaQueries();
  return (
    <div className={styles.links}>
      <ul>
        <li>
          <Link to="services" smooth={true} offset={-110}>
            Xidmətlərimiz
          </Link>
        </li>
        <li>
          <Link to="functionalities" smooth={true} offset={-110}>
            Üstünlüklərimiz{" "}
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-120}>
            Müştəri məmnuniyyəti
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
