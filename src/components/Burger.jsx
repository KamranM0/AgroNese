import { Link } from "react-scroll";
import styles from "./Burger.module.css";
function Burger({ isBurgerOpen, setIsBurgerOpen }) {
  return (
    <div className={`${styles.container} ${isBurgerOpen ? styles.open : ""}`}>
      <ul>
        <li>
          <Link
            to="services"
            smooth={true}
            onClick={() => setIsBurgerOpen(false)}
          >
            <p>Xidmətlərimiz</p>
          </Link>
        </li>
        <li>
          <Link
            to="functionalities"
            smooth={true}
            onClick={() => setIsBurgerOpen(false)}
          >
            <p>Üstünlüklərimiz </p>
          </Link>
        </li>
        <li>
          <Link onClick={() => setIsBurgerOpen(false)}>
            <p>Qiymətlər</p>
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
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
