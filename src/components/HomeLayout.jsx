import { memo } from "react";
import Board from "./Board";
import Functionalities from "./Functionalities";
import styles from "./HomeLayout.module.css";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Element } from "react-scroll";
import Form from "./Form";
import { useMediaQueries } from "../hooks/UseMedia";
import FunctionalitiesMobile from "./FunctionalitiesMobile";
function HomeLayout() {
  const { sm } = useMediaQueries();
  return (
    <div className={styles.home}>
      <Board></Board>

      <Services />
      {!sm ? (
        <Functionalities />
      ) : (
        <FunctionalitiesMobile></FunctionalitiesMobile>
      )}

      <Testimonials />
      <Form />
    </div>
  );
}

export default memo(HomeLayout);
