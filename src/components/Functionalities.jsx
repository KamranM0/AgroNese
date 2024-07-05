import { useState } from "react";
import styles from "./Functionalities.module.css";
import Tab from "./Tab.jsx";
import { Element } from "react-scroll";
import { useMediaQueries } from "../hooks/UseMedia.jsx";
function Functionalities() {
  const [openTab, setOpenTab] = useState(null);
  const [imageURL, setImageURL] = useState("/home.png");

  const functions = [
    {
      num: 1,
      title: "Sürətli giriş",
      description:
        "Mobil tətbiqimizdən istifadə edərək qısa müddətdə giriş edə bilərsiniz.",
      img: "/login.png",
    },
    {
      num: 2,
      title: "Asan alışveriş",
      description: "Rahat dizayn ilə əlçatan alışveriş imkanı.",
      img: "/shopping.png",
    },
    {
      num: 3,
      title: "Öyrənmək",
      description:
        "Geniş məlumat bazamız vasitəsilə bitkilər haqqında məlumat əldə edin.",
      img: "/data.png",
    },
    {
      num: 4,
      title: "Ekspertlərlə əlaqə",
      description:
        "Ekspertlərlə sıx əlaqədə olub, problemlərinizə optimal həllər tapın.",
      img: "/chatting.png",
    },
  ];
  return (
    <Element name="functionalities" className={styles.container}>
      <div>
        <h1>Üstünlüklərimiz</h1>

        <div className={styles.funcs}>
          <div className={styles.tabs}>
            {functions.map((el) => (
              <Tab
                openTab={openTab}
                setOpenTab={setOpenTab}
                tabNum={el.num}
                title={el.title}
                setImageURL={setImageURL}
                imageURL={el.img}
              >
                {el.description}
              </Tab>
            ))}
          </div>
          <div>
            <img src={imageURL}></img>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Functionalities;
