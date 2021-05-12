import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function CreateNewUser() {
  return (
    <>
      <div className={styles.container}>
        <span>Cadastrar novo usuário</span>
        <Link to="/register">
          <button className={styles.registerBtn}>Cadastrar</button>
        </Link>
      </div>
    </>
  );
}
