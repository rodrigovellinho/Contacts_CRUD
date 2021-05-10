import React from "react";
import { Link } from "react-router-dom";
import AddressRegister from "../AddressRegister";
import styles from "./styles.module.css";

export default function CompleteRegister() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Cadastro usuário</span>
        </div>
        <div className={styles.addressRegister}>
          <AddressRegister />
        </div>
        <div className={styles.btnContainer}>
          <Link to="/">
            <button className={styles.btn}>Salvar</button>
          </Link>
          <Link to="/">
            <button className={styles.btnCancel}>Cancelar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
