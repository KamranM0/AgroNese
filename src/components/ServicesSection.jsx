import { Link } from "react-scroll";
import Button from "./Button";
import styles from "./ServicesSection.module.css";
function ServicesSection({ children, imageSrc }) {
  return (
    <div className={styles.section}>
      <img src={imageSrc} alt={imageSrc} />
      {children}
      <Link to="form" smooth={true} offset={-110}>
        <Button>Müraciət et</Button>
      </Link>
    </div>
  );
}

export default ServicesSection;
