import React, { useContext } from "react";
import { UserContext } from "../../hooks/useUsers";
import User from "../User";
import styles from "./styles.module.css";

export default function UserList() {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Lista de usuários</span>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Editar Cadastro</th>
            <th>Deletar Usuário</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <User key={user.id} user={user} deleteUser={deleteUser} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
