import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
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
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td style={{ textAlign: "center" }}>
        <Link to={`/edit/${user.id}`}>
          <Button className="btn btn-primary">Editar</Button>
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <Button className="btn btn-danger" onClick={handleDeleteUser}>
          Deletar
        </Button>
      </td>
    </tr>
  );
}
