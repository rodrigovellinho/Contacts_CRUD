import React from "react";
import Logo from "../../img/logoIncentiv.png";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.image} />
    </div>
  );
}
