import React from "react";
import Gallery from "react-photo-gallery";
import styles from "./GalleryContainer.module.css";

import { photos } from "./photos";

const GalleryContainer = () => {
  return (
    <div className={styles.gallery}>
    <div className="container">
    <div className={styles.titleContainer}>
          <h4>Galería</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor
            viverra parturient diam sagittis nec cras.
          </p>
        </div>
        <Gallery photos={photos} />
      </div>
    </div>
  );
};

export default GalleryContainer;
