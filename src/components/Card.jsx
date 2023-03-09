import styles from "../pages/ArtistPage.module.css";

import React from "react";

export default function Card({ artist }) {
  return (
    <div className={styles.card4}>
      <div className={styles.card4Child} />
      <div className={styles.monthlyListeners}>
        {artist.followers.total}
        monthly listeners
        <div></div>
      </div>
      <div className={styles.antent}>Antent</div>
      <img
        className={styles.image4Icon}
        alt="artist image"
        src="../image-4@2x.png"
      />
    </div>
  );
}
