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
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErroEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  /*   function validateUserName(userName) {
    if (userName < 1) setUserName(true);
  }

  function validateUserEmail(userEmail) {}

  function validateUserPassword(userPassword) {} */

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
              required
            />
            <div>{errorName && <small>Escreva um nome válido</small>}</div>
          </div>

          <div className={styles.singleInputModal}>
            <span>Email:</span>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <div>{errorEmail && <small>Digite um email válido</small>}</div>
          </div>

          <div className={styles.singleInputModal}>
            <span>Senha:</span>
            <input
              className={styles.input}
              type="password"
              placeholder="Senha"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
            <div>
              {errorPassword && (
                <small>
                  Digite uma senha entre 4 e 8 caracteres contendo letras e
                  números e um caractere especial
                </small>
              )}
            </div>
          </div>

          <button type="submit" onClick={handleCreateNewUser}>
            Registrar novo usuário
          </button>
        </div>
      </form>
    </Modal>
  );
}
