import React, { useState, useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import InputMask from "react-input-mask";
import styles from "./styles.module.css";

export default function PhoneRegister({ createPhone, selectedUser }) {
  const { users, addUser } = useContext(UserContext);
  const [phones, setPhones] = useState([{ id: 1, phone: "" }]);

  function handleCreatePhone(e) {
    e.preventDefault();

    const phoneUser = {
      id: selectedUser.id,
    };

    addUser(phoneUser);
    console.log(selectedUser);
  }

  function handleSavePhone() {}

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <span className={styles.title}>Telefone</span>

        <div className={styles.singleInput}>
          <span>Telefone 1:</span>
          <InputMask
            mask="(99) 999999-9999"
            value={phones}
            onChange={(e) => setPhones(e.target.value)}
            alwaysShowMask={false}
          />
        </div>

        {phones.map((phone, index) => {
          return (
            <div className={styles.singleInput}>
              <span>Telefone:</span>
              <InputMask
                mask="(99) 999999-9999"
                value={phones[index].phone}
                onChange={(e) => setPhones(e.target.value)}
                alwaysShowMask={false}
              />
            </div>
          );
        })}

        <div className={styles.btnContainer}>
          <button className={styles.buttonNewPhone} onClick={handleCreatePhone}>
            Novo telefone
          </button>
          <button className={styles.buttonSavePhone} onClick={handleSavePhone}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
