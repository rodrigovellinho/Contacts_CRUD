import React, { useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import PersonnalRegister from "../PersonnalRegister";
import { Link } from "react-router-dom";
import AddressRegister from "../AddressRegister";
import styles from "./styles.module.css";
import PhoneRegister from "../PhoneRegister";

export default function CompleteRegister({ selectedUser }) {
  const { users, addUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>Cadastro usuário</span>
        </div>
        <div className={styles.fullRegister}>
          <div className={styles.personnalRegister}>
            <PersonnalRegister selectedUser={selectedUser} />
            <PhoneRegister selectedUser={selectedUser} />
          </div>
          <div className={styles.addressContainer}>
            <AddressRegister selectedUser={selectedUser} />
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Link to="/">
            <button className={styles.btnCancel}>Voltar ao menu</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
