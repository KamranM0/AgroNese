import styles from "./Board.module.css";
import Button from "./Button";
import { useMediaQueries } from "../hooks/UseMedia";
import { Element, Link } from "react-scroll";
function Board() {
  const { lg, sm } = useMediaQueries();
  return (
    <Element name="board" className={styles.board}>
      <div className={styles.text}>
        <h1>
          Son texnologiya həll yolları ilə fermerlərin işini asanlaşdırmaq
        </h1>
        <p>
          İnnovativ kənd təsərrüfatı tətbiqimizlə əkinçiliyin gələcəyini kəşf
          edin. Gələcək nəsillər üçün davamlı və firavan kənd təsərrüfatı
          landşaftının yetişdirilməsində bizə qoşulun.
        </p>
        <Link to="form" smooth={true} offset={-120}>
          <Button type={"primary"}>Müraciət et</Button>
        </Link>
      </div>
      {!sm && (
        <div className={styles.mockup}>
          <img src="phone1.png" alt="phone"></img>
        </div>
      )}
    </Element>
  );
}

export default Board;
