import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import Modal from "react-modal";
import styles from "./styles.module.css";

Modal.setAppElement("#root");

export default function UserRegisterModal({ isModalOpen, onRequestClose }) {
  const { addUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleCreateNewUser(e) {
    e.preventDefault();

    const addedUser = {
      id: Math.floor(Math.random() * 10000),
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    addUser(addedUser);
    setUserEmail("");
    setUserName("");
    setUserPassword("");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName={styles.reactModalOverlay}
      className={styles.reactModalContent}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className={styles.modalClose}
      >
        <span>X</span>
      </button>

      <form className={styles.form} onSubmit={onRequestClose}>
        <div className={styles.title}>
          <h2>Novo usuário</h2>
        </div>

        <div className={styles.inputModal}>
          <div className={styles.singleInputModal}>
            <span>Nome</span>
            <input
              className={styles.input}
              type="text"
              placeholder="Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value.toUpperCase())}
            />
          </div>

          <div className={styles.singleInputModal}>
            <span>Email:</span>
            <input
              className={styles.input}
              type="email"
              placeholder="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>

          <div className={styles.singleInputModal}>
            <span>Senha:</span>
            <input
              className={styles.input}
              placeholder="senha"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>

          <button type="submit" onClick={handleCreateNewUser}>
            Registrar novo usuário
          </button>
        </div>
      </form>
    </Modal>
  );
}
