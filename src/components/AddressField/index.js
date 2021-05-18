import React from "react";
import axios from "axios";
import styles from "./styles.module.css";

export default ({ values, onChange }) => {
  const getAddress = async () => {
    try {
      const info = await axios.get(
        `https://viacep.com.br/ws/${values.cep}/json/`
      );
      onChange(info.data.cep, "cep");
      onChange(info.data.logradouro, "logradouro");
      onChange(info.data.bairro, "bairro");
      onChange(info.data.localidade, "localidade");
      onChange(info.data.uf, "uf");
    } catch (error) {
      alert("Erro ao procurar CEP, tente outra vez");
    }
  };

  return (
    <div className={styles.form}>
      <h1 className={styles.title}>Endereço</h1>

      <div className={styles.singleInput}>
        <label>CEP:</label>
        <input
          className={styles.input}
          value={values.cep}
          onChange={(e) => onChange(e.target.value, "cep")}
        />
        <button className={styles.button} onClick={getAddress}>
          Procurar
        </button>
      </div>

      <div className={styles.singleInput}>
        <label>Logradouro:</label>
        <input
          className={styles.input}
          value={values.logradouro}
          onChange={(e) => onChange(e.target.value, "logradouro")}
        />
      </div>
      <div className={styles.singleInput}>
        <label>Bairro:</label>
        <input
          className={styles.input}
          value={values.bairro}
          onChange={(e) => onChange(e.target.value, "bairro")}
        />
      </div>
      <div className={styles.singleInput}>
        <label>Localidade:</label>
        <input
          className={styles.input}
          value={values.localidade}
          onChange={(e) => onChange(e.target.value, "localidade")}
        />
      </div>
      <div className={styles.singleInput}>
        <label>UF:</label>
        <input
          className={styles.input}
          value={values.uf}
          onChange={(e) => onChange(e.target.value, "uf")}
        />
      </div>
      <div>
        <button className={styles.buttonSave}>Salvar</button>
      </div>
    </div>
  );
};
