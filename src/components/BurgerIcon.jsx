import { useState } from "react";
import styles from "./BurgerIcon.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
function BurgerIcon({ toggleIcon, isBurgerOpen }) {
  return (
    <div className={styles.burgerIcon} onClick={toggleIcon}>
      {isBurgerOpen ? (
        <FaTimes color={"#54EA54"} size={25} />
      ) : (
        <FaBars color={"#54EA54"} size={25} />
      )}
    </div>
  );
}

export default BurgerIcon;
