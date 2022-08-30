import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/header/logo.png";

import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="logo" />
      </div>

      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">Departamentos</a>
        <a href="#">Instalaciones</a>
        <a href="#">Galería</a>
        <a href="#">Sobre Nosotros</a>
      </nav>

      <div className={styles.socialMedia}>
      <AiFillInstagram />
      <AiFillYoutube/>
      <AiFillTwitterSquare/>
      <AiFillFacebook/>
     
    
      </div>
    </header>
  );
};

export default Header;
