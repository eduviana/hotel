import Image from "next/image";
import React from "react";
import styles from "./Reviews.module.css";

import avatar1 from "../../public/avatars/avatar1.png"
import avatar2 from "../../public/avatars/avatar2.png"
import avatar3 from "../../public/avatars/avatar3.png"

import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

const Reviews = () => {
  return (
    <div className={styles.reviews}>
      <div className="container">
        <div className={styles.titleContainer}>
          <h4>Reseñas</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            viverra parturient diam sagittis nec cras.
          </p>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}>
          <div className={styles.textContainer}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
              <span>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              </span>
            </div>

            <div className={styles.avatarContainer}>
              <Image src={avatar1} layout="fixed" alt="avatar 1" />
              <p>James Cooper</p>
              <span>@James Cooper</span>
            </div>
          </div>

          <div className={styles.card}>
          <div className={styles.textContainer}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
              <span>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              </span>
            </div>

            <div className={styles.avatarContainer}>
              <Image src={avatar2} layout="fixed" alt="avatar 2" />
              <p>James Cooper</p>
              <span>@James Cooper</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.textContainer}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus consectetur amet, diam pellentesque lectus sit morbi.</p>
              <span>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiFillStar/>
              <AiOutlineStar/>
              </span>
            </div>

            <div className={styles.avatarContainer}>
              <Image src={avatar3} layout="fixed" alt="avatar 3" />
              <p>James Cooper</p>
              <span>@James Cooper</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
