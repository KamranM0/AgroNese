import { Link } from "react-scroll";
import styles from "./Burger.module.css";
import { useMediaQueries } from "../hooks/UseMedia";
function Burger({ isBurgerOpen, setIsBurgerOpen }) {
  const { sm } = useMediaQueries();
  return (
    <div className={`${styles.container} ${isBurgerOpen ? styles.open : ""}`}>
      <ul>
        <li>
          <Link
            to="services"
            smooth={true}
            offset={-110}
            onClick={() => setIsBurgerOpen(false)}
          >
            <p>Xidmətlərimiz</p>
          </Link>
        </li>
        <li>
          <Link
            to="functionalities"
            smooth={true}
            offset={-110}
            onClick={() => setIsBurgerOpen(false)}
          >
            <p>Üstünlüklərimiz </p>
          </Link>
        </li>

        <li>
          <Link
            to="testimonials"
            smooth={true}
            offset={-110}
            onClick={() => setIsBurgerOpen(false)}
          >
            <p>Müştəri məmnuniyyəti</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Burger;
