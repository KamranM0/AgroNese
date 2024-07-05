import Button from "./Button";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { useMediaQueries } from "../hooks/UseMedia";
import Burger from "./BurgerIcon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
function NavBar({ toggleIcon, isBurgerOpen, setIsBurgerOpen }) {
  const { lg } = useMediaQueries();
  const navigate = useNavigate();

  return lg ? (
    <div className={styles.nav}>
      <Link to="board" smooth={true} offset={-110}>
        <Logo />
      </Link>

      <NavLinks />
      <Link to="form" smooth={true} offset={-150}>
        <Button type={"primary"} href="#form">
          Müraciət et
        </Button>
      </Link>
    </div>
  ) : (
    <div className={styles.nav}>
      <Logo />
      <div className={styles.container}>
        <Burger
          setIsBurgerOpen={setIsBurgerOpen}
          isBurgerOpen={isBurgerOpen}
          toggleIcon={toggleIcon}
        />
        <Link to="form" smooth={true} offset={-150}>
          <Button type={"primary"} href="#form">
            Müraciət et
          </Button>
        </Link>
      </div>
      {/* <Button type={"primary"}>Giriş</Button> */}
    </div>
  );
}

export default NavBar;
