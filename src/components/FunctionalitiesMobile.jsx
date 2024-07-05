import SwipeTabs from "./SwipeTabs";
import styles from "./FunctionalitiesMobile.module.css";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Element } from "react-scroll";
function FunctionalitiesMobile() {
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
  const [openTab, setOpenTab] = useState(1);
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  function handleNext() {
    if (openTab === 4) {
      return setOpenTab(1);
    }
    setOpenTab(openTab + 1);
  }
  function handlePrev() {
    if (openTab === 1) {
      return setOpenTab(4);
    }
    setOpenTab(openTab - 1);
  }

  return (
    <Element name="functionalities" className={styles.container}>
      <h1>Üstünlüklərimiz</h1>
      <div className={styles.tabContainer} {...handlers}>
        {functions.map(
          (el) =>
            el.num === openTab && (
              <SwipeTabs
                onNextClick={handleNext}
                onPrevClick={handlePrev}
                title={el.title}
                num={el.num}
                description={el.description}
                img={el.img}
              />
            )
        )}
      </div>
    </Element>
  );
}

export default FunctionalitiesMobile;
