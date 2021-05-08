import React, { useState } from "react";
import UserRegisterModal from "../UserRegisterModal";
import styles from "./styles.module.css";

export default function CreateNewUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      <div className={styles.container}>
        <span>Cadastrar novo usuário</span>
        <button onClick={handleOpenModal} className={styles.registerBtn}>
          Cadastrar
        </button>
      </div>
      <UserRegisterModal
        isModalOpen={isModalOpen}
        onRequestClose={handleCloseModal}
      />
    </>
  );
}
