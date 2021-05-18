import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function UserRegister() {
  const { addUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  function validateUserName(userName) {
    if (!userName) setErrorName(true);
  }

  function checkEmptyFields(inputArr) {
    return inputArr.some(function (input) {
      return Boolean(!input);
    });
  }

  function validateUserEmail(userEmail) {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userEmail)) {
      setErrorEmail(false);
      return;
    }
    setErrorEmail(true);
  }

  function validateUserPassword(userPassword, min, max) {
    if (!userPassword) {
      setErrorPassword(true);
      return;
    } else if (userPassword.length < min || userPassword.lenght > max) {
      setErrorPassword(true);
    } else {
      setErrorPassword(false);
    }
  }

  function handleCreateNewUser(e) {
    e.preventDefault();

    const isRequiredFieldsEmpty = checkEmptyFields([
      userName,
      userEmail,
      userPassword,
    ]);

    if (isRequiredFieldsEmpty) {
      alert("Preencha os campos vazios para inserir usuário no cadastro");
      return;
    }

    if (!errorName && !errorEmail && !errorPassword) {
      const addedUser = {
        id: Math.floor(Math.random() * 10000),
        name: userName,
        email: userEmail,
        password: userPassword,
      };

      addUser(addedUser);
      alert("Usuário criado com sucesso");
    } else {
      alert("Ajuste os campos para inserir usuário no cadastro");
    }
  }

  return (
    <form className={styles.form}>
      <div className={styles.singleInput}>
        <div className={styles.inputText}>
          <span>Nome</span>
          <input
            className={styles.input}
            type="text"
            placeholder="Nome"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onBlur={(e) => validateUserName(e.target.value)}
            required
          />
        </div>
        <div className={styles.errorMessage}>
          {errorName ? <small>Escreva um nome válido</small> : null}
        </div>
      </div>

      <div className={styles.singleInput}>
        <div className={styles.inputText}>
          <span>Email:</span>
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            onBlur={(e) => validateUserEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.errorMessage}>
          {errorEmail ? <small>Digite um email válido</small> : null}
        </div>
      </div>

      <div className={styles.singleInput}>
        <div className={styles.inputText}>
          <span>Senha:</span>
          <input
            className={styles.input}
            type="password"
            placeholder="Senha"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            onBlur={(e) => validateUserPassword(e.target.value, 4, 8)}
            required
          />
        </div>
        <div className={styles.errorMessage}>
          {errorPassword ? (
            <small>
              Digite uma senha entre 4 e 8 caracteres contendo letras e números
              e um caractere especial
            </small>
          ) : null}
        </div>
      </div>

      <div className={styles.btnContainer}>
        <button type="submit" onClick={handleCreateNewUser}>
          Registrar novo usuário
        </button>

        <Link to="/">
          <button className={styles.linkBtn}>Retornar ao menu</button>
        </Link>
      </div>
    </form>
  );
}
