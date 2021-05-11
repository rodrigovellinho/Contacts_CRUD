import React, { useContext, useState } from "react";
import { AddressContext } from "../../hooks/useAddress";
import { UserContext } from "../../hooks/useUsers";
import styles from "./styles.module.css";

export default function AddressRegister({ address }) {
  const { addressData, getAddress } = useContext(AddressContext);
  const { users, editUser } = useContext(UserContext);
  const [cep, setCep] = useState(0);

  function searchCEP(e) {
    e.preventDefault();
    getAddress(cep);
  }

  function handleCreateAddress(e) {
    e.preventDefault();

    const newAddress = {
      cep: addressData.cep,
      logradouro: addressData.logradouro,
      bairro: addressData.bairro,
      localidade: addressData.localidade,
      uf: addressData.uf,
    };

    editUser(newAddress);
    console.log(newAddress);
  }

  return (
    <div className={styles.container}>
      <span className={styles.title}>{address}</span>
      <form className={styles.form}>
        <div className={styles.singleInput}>
          <span>CEP</span>
          <input
            className={styles.input}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <button className={styles.button} onClick={searchCEP}>
            Procurar
          </button>
        </div>

        <div className={styles.singleInput}>
          <span>Logradouro:</span>
          <input className={styles.input} value={addressData.logradouro} />
        </div>
        <div className={styles.singleInput}>
          <span>Bairro:</span>
          <input className={styles.input} value={addressData.bairro} />
        </div>
        <div className={styles.singleInput}>
          <span>Localidade:</span>
          <input className={styles.input} value={addressData.localidade} />
        </div>
        <div className={styles.singleInput}>
          <span>UF:</span>
          <input className={styles.input} value={addressData.uf} />
        </div>
        <button className={styles.buttonSave} onClick={handleCreateAddress}>
          Salvar
        </button>
      </form>
    </div>
  );
}
