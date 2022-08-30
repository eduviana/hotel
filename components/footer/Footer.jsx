import React from "react";
import styles from "./Footer.module.css";
import logo from "../../public/header/logo.png";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

import { MdMail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";


const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          <div className={styles.logoContainer}>
            <Image src={logo} alt="logo" layout="fixed" />
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <div className={styles.socialMedia}>
              <AiFillInstagram />
              <AiFillYoutube />
              <AiFillTwitterSquare />
              <AiFillFacebook />
            </div>
          </div>

          {/* <div className={styles.services} >
          <h4>Services</h4>
            <ul>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
              <li>lorem</li>
            </ul>
          </div> */}

          <div className={styles.contacts}>
            <h4>Contactenos</h4>
            <div className={styles.mail}>
              <MdMail/>
              <p>info@domusempredimientos.com</p>
            </div>
            <div className={styles.cel}>
              <IoMdPhonePortrait/>
              <p>354115579481</p>
            </div>

            <div className={styles.address}>
              <ImLocation2/>
              <p>Av. Sarmiento esq. Pje. Sarmiento, Villa Carlos Paz, Cordoba.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
