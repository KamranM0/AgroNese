import { memo, useState } from "react";
import NavBar from "./components/NavBar";
import Burger from "./components/Burger";
import HomeLayout from "./components/HomeLayout";
import Footer from "./components/Footer";

function HomePage() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  function toggleIcon() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div>
      <NavBar
        setIsBurgerOpen={setIsBurgerOpen}
        toggleIcon={toggleIcon}
      ></NavBar>
      {isBurgerOpen && (
        <Burger setIsBurgerOpen={setIsBurgerOpen} isBurgerOpen={isBurgerOpen} />
      )}{" "}
      <HomeLayout />
      <Footer />
    </div>
  );
}

export default HomePage;
