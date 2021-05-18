import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function User({ user, deleteUser }) {
  function handleDeleteUser(e) {
    e.preventDefault();
    let answer = window.confirm("Você tem certeza?");
    if (answer === true) {
      deleteUser(user.id);
    }
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>{user.name}</td>
      <td style={{ textAlign: "center" }}>{user.email}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/edit/${user.id}`}>
          <button className={styles.editBtn}>Editar</button>
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button className={styles.deleteBtn} onClick={handleDeleteUser}>
          Deletar
        </button>
      </td>
    </tr>
  );
}
