import React from "react";
import styles from "./styles.module.css";

export default function PersonnalRegister({ selectedUser }) {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <span className={styles.title}>Dados pessoais</span>
        <div className={styles.singleInput}>
          <span>Nome:</span>
          <input value={selectedUser.name} />
        </div>
        <div className={styles.singleInput}>
          <span>Email:</span>
          <input value={selectedUser.email} />
        </div>
        <div className={styles.singleInput}>
          <span>Senha:</span>
          <input value={selectedUser.password} />
        </div>
      </form>
    </div>
  );
}
