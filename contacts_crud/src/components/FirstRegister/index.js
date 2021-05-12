import React from "react";
import UserRegister from "../UserRegister";
import styles from "./styles.module.css";

export default function FirstRegister() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <header className={styles.titleContainer}>
          <h1 className={styles.title}>Cadastro usuário</h1>
        </header>

        <main className={styles.fullRegister}>
          <UserRegister />
        </main>
      </div>
    </div>
  );
}
