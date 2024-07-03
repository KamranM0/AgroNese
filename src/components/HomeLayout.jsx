import { memo } from "react";
import Board from "./Board";
import Functionalities from "./Functionalities";
import styles from "./HomeLayout.module.css";
import Services from "./Services";
import Testimonials from "./Testimonials";
import { Element } from "react-scroll";
import Form from "./Form";
function HomeLayout() {
  return (
    <div className={styles.home}>
      <Board></Board>

      <Services />

      <Functionalities />
      <Testimonials />
      <Form />
    </div>
  );
}

export default memo(HomeLayout);
