import { Link } from "react-router-dom";
import styles from "./Board.module.css";
import Button from "./Button";
import { useMediaQueries } from "../hooks/UseMedia";
function Board() {
  const { lg, sm } = useMediaQueries();
  return (
    <div className={styles.board}>
      <div className={styles.text}>
        <h1>
          Son texnologiya həll yolları ilə fermerlərin işini asanlaşdırmaq
        </h1>
        <p>
          İnnovativ kənd təsərrüfatı tətbiqimizlə əkinçiliyin gələcəyini kəşf
          edin. Gələcək nəsillər üçün davamlı və firavan kənd təsərrüfatı
          landşaftının yetişdirilməsində bizə qoşulun.
        </p>
        <Button type={"primary"}>Yüklə</Button>
        <Link>Daha ətraflı</Link>
      </div>
      {!sm && (
        <div className={styles.mockup}>
          <img src="phone1.png" alt="phone"></img>
        </div>
      )}
    </div>
  );
}

export default Board;
