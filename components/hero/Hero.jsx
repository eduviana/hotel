import React from "react";
import styles from "../hero/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.promotion}>
          <h2>20% OFF</h2>
          <h3>Promociones Estadia + Cena</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
