import Button from "./Button";
import Logo from "./Logo";
import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";
import { useMediaQueries } from "../hooks/UseMedia";
import Burger from "./BurgerIcon";
import { useNavigate } from "react-router-dom";
function NavBar({ toggleIcon, isBurgerOpen, setIsBurgerOpen }) {
  const { lg } = useMediaQueries();
  const navigate = useNavigate();
  return lg ? (
    <div className={styles.nav}>
      <Logo />
      <NavLinks />
      <Button type={"primary"} onClick={() => navigate("form")}>
        Giriş
      </Button>
    </div>
  ) : (
    <div className={styles.nav}>
      <Logo />
      <Burger
        setIsBurgerOpen={setIsBurgerOpen}
        isBurgerOpen={isBurgerOpen}
        toggleIcon={toggleIcon}
      />
      {/* <Button type={"primary"}>Giriş</Button> */}
    </div>
  );
}

export default NavBar;
