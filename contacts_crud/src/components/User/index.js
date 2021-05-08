import React from "react";
import styles from "./styles.module.css";

export default function User({ user, deleteUser }) {
  function handleEditUser() {
    return null;
  }

  function handleDeleteUser(e) {
    e.preventDefault();

    deleteUser(user.id);
  }

  return (
    <tr>
      <td style={{ textAlign: "center" }}>{user.name}</td>
      <td style={{ textAlign: "center" }}>{user.email}</td>
      <td style={{ textAlign: "center" }}>
        <button className={styles.editBtn} onClick={handleEditUser}>
          Editar
        </button>
      </td>
      <td style={{ textAlign: "center" }}>
        <button className={styles.deleteBtn} onClick={handleDeleteUser}>
          Deletar
        </button>
      </td>
    </tr>
  );
}
