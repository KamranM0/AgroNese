import { Element } from "react-scroll";
import styles from "./Services.module.css";
import ServicesSection from "./ServicesSection";
function Services() {
  return (
    <Element name="services" className={styles.services}>
      <div>
        <h1>Xidmətlərimiz</h1>
        <p>
          Bölmələrimizi daha diqqətli araşdıraraq xidmətlərimiz haqqında ətraflı
          məlumat ala bilərsiniz.
        </p>
        <div className={styles.sections}>
          <ServicesSection imageSrc={"/img1.jpg"}>
            <h2>Əkin təhlili</h2>
          </ServicesSection>
          <ServicesSection imageSrc={"/img2.jpg"}>
            <h2>Torpağın məhsuldarlığı</h2>
          </ServicesSection>
          <ServicesSection imageSrc={"/img3.jpg"}>
            <h2>Hava haqqında proqnoz</h2>
          </ServicesSection>
        </div>
      </div>
    </Element>
  );
}

export default Services;
