import Image from "next/image";
import styles from "./Instalations.module.css";

import { BiRestaurant } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BiDrink } from "react-icons/bi";
import { TbMassage } from "react-icons/tb";
import { AiOutlineWifi } from "react-icons/ai";
import { MdPool } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { IoGameController } from "react-icons/io5";

const Instalations = () => {
  return (
    <section className={styles.instalations}>
      <div className="container">
        <div className={styles.instalationsContainer}>
          <div className={styles.titleContainer}>
            <h4>Nuestras Instalaciones</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
              viverra parturient diam sagittis nec cras.
            </p>
          </div>

          <div className={styles.cardsContainer}>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <BiRestaurant />
              </div>
              <h5>Restaurant</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <ImLocation2 />
              </div>
              <h5>A 5 min. del centro de la ciudad</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <BiDrink />
              </div>
              <h5>Mini Bar</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <TbMassage />
              </div>
              <h5>Spa y Sallon</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <AiOutlineWifi />
              </div>
              <h5>Free Wifi</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <MdPool />
              </div>
              <h5>Swimming Poll</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <FaDoorOpen />
              </div>
              <h5>Conference Room</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className={styles.instalationCard}>
              <div className={styles.iconContainer}>
                <IoGameController />
              </div>
              <h5>Game Room</h5>
              <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instalations;
