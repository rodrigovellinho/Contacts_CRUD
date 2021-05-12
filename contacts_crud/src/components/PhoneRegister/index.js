import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import InputMask from "react-input-mask";
import styles from "./styles.module.css";

export default function PhoneRegister({ selectedUser }) {
  const { users, addUser } = useContext(UserContext);
  const [phones, setPhones] = useState([
    {
      id: 1,
      number: "",
    },
  ]);

  function handleChangePhone(value, id) {
    setPhones((prevState) => {
      return prevState.map((phone) => ({
        ...phone,
        number: phone.id === id ? value : phone.number,
      }));
    });
  }

  function addPhone() {
    setPhones((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 1000),
        phone: "",
      },
    ]);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>Telefone</span>
      <div className={styles.form}>
        {phones.map((phone) => (
          <div className={styles.phoneContainer}>
            <span>Telefone:</span>
            <InputMask
              className={styles.inputMask}
              mask="(99)99999-9999"
              value={phone.number}
              onChange={(e) => handleChangePhone(e.target.value, phone.id)}
              style={{ marginBottom: "1rem" }}
            />
          </div>
        ))}
        <div className={styles.btnContainer}>
          <button className={styles.buttonNewPhone} onClick={() => addPhone()}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}
